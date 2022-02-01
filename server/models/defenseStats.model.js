const mongoose = require('mongoose');
const { getFixedValue } = require('../utils/utils');

const defenseStatsSchema = new mongoose.Schema(
    {
        team: {
            type: String,
            required: true,
            unique: true,
        },
        stats: [
            {
                year: {
                    type: Number,
                },
                averages: {
                    avgSacks: {
                        type: Number,
                    },
                    avgInterceptions: {
                        type: Number,
                    },
                    avgFumbleRecoveries: {
                        type: Number,
                    },
                    avgSafeties: {
                        type: Number,
                    },
                    avgDefensiveTouchdowns: {
                        type: Number,
                    },
                    avgDefensive2PtReturns: {
                        type: Number,
                    },
                    avgReturnedTouchdowns: {
                        type: Number,
                    },
                    avgPointsAllowed: {
                        type: Number,
                    },
                    avgFantasyScore: {
                        type: Number,
                    },
                },
                sums: {
                    sacksSum: {
                        type: Number,
                    },
                    interceptionsSum: {
                        type: Number,
                    },
                    fumbleRecoveriesSum: {
                        type: Number,
                    },
                    safetiesSum: {
                        type: Number,
                    },
                    defensiveTouchdownsSum: {
                        type: Number,
                    },
                    defensive2PtReturnsSum: {
                        type: Number,
                    },
                    returnedTouchdownsSum: {
                        type: Number,
                    },
                    pointsAllowedSum: {
                        type: Number,
                    },
                    fantasyScoreSum: {
                        type: Number,
                    },
                },
                games: [
                    {
                        week: {
                            type: String,
                            required: true,
                            trim: true,
                        },
                        opponent: {
                            type: String,
                        },
                        result: {
                            type: String,
                        },
                        sacks: {
                            type: Number,
                        },
                        interceptions: {
                            type: Number,
                        },
                        fumbleRecoveries: {
                            type: Number,
                        },
                        safeties: {
                            type: Number,
                        },
                        defensiveTouchdowns: {
                            type: Number,
                        },
                        defensive2PtReturns: {
                            type: Number,
                        },
                        returnedTouchdowns: {
                            type: Number,
                        },
                        pointsAllowed: {
                            type: Number,
                        },
                        fantasyScore: {
                            type: Number,
                        },
                    },
                ],
            },
        ],
    },
    {
        timestamps: true,
    }
);

const getSums = (games) => {
    const sums = {
        sacksSum: 0,
        interceptionsSum: 0,
        fumbleRecoveriesSum: 0,
        safetiesSum: 0,
        defensiveTouchdownsSum: 0,
        defensive2PtReturnsSum: 0,
        returnedTouchdownsSum: 0,
        pointsAllowedSum: 0,
        fantasyScoreSum: 0,
    };
    let gameCount = 0;
    games.forEach((week) => {
        if (week.opponent !== 'Bye') {
            gameCount++;
            sums.sacksSum += week.sacks;
            sums.interceptionsSum += week.interceptions;
            sums.fumbleRecoveriesSum += week.fumbleRecoveries;
            sums.safetiesSum += week.safeties;
            sums.defensiveTouchdownsSum += week.defensiveTouchdowns;
            sums.defensive2PtReturnsSum += week.defensive2PtReturns;
            sums.returnedTouchdownsSum += week.returnedTouchdowns;
            sums.pointsAllowedSum += week.pointsAllowed;
            sums.fantasyScoreSum += week.fantasyScore;
        }
    });
    return { sums, gameCount };
};

const getAverages = (sums, gameCount) => {
    return {
        avgSacks: getFixedValue(sums.sacksSum / gameCount),
        avgInterceptions: getFixedValue(sums.interceptionsSum / gameCount),
        avgFumbleRecoveries: getFixedValue(
            sums.fumbleRecoveriesSum / gameCount
        ),
        avgSafeties: getFixedValue(sums.safetiesSum / gameCount),
        avgDefensiveTouchdowns: getFixedValue(
            sums.defensiveTouchdownsSum / gameCount
        ),
        avgDefensive2PtReturns: getFixedValue(
            sums.defensive2PtReturnsSum / gameCount
        ),
        avgReturnedTouchdowns: getFixedValue(
            sums.returnedTouchdownsSum / gameCount
        ),
        avgPointsAllowed: getFixedValue(sums.pointsAllowedSum / gameCount),
        avgFantasyScore: getFixedValue(sums.fantasyScoreSum / gameCount),
    };
};

defenseStatsSchema.pre('save', async function (next) {
    const defenseStats = this;
    if (defenseStats.isModified('stats')) {
        for (const yearData of defenseStats.stats) {
            const { sums, gameCount } = getSums(yearData.games);
            yearData.sums = sums;
            yearData.averages = getAverages(sums, gameCount);
        }
    }
    next();
});

const DefenseStats = mongoose.model('Defense-Stats', defenseStatsSchema);

module.exports = DefenseStats;
