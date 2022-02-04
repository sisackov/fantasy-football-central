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
                totals: {
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

const getTotals = (games) => {
    const totals = {
        sacks: 0,
        interceptions: 0,
        fumbleRecoveries: 0,
        safeties: 0,
        defensiveTouchdowns: 0,
        defensive2PtReturns: 0,
        returnedTouchdowns: 0,
        pointsAllowed: 0,
        fantasyScore: 0,
    };
    let gameCount = 0;
    games.forEach((week) => {
        if (week.opponent !== 'Bye') {
            gameCount++;
            for (const stat in totals) {
                totals[stat] += week[stat];
            }

            // totals.sacks += week.sacks;
            // totals.interceptions += week.interceptions;
            // totals.fumbleRecoveries += week.fumbleRecoveries;
            // totals.safeties += week.safeties;
            // totals.defensiveTouchdowns += week.defensiveTouchdowns;
            // totals.defensive2PtReturns += week.defensive2PtReturns;
            // totals.returnedTouchdowns += week.returnedTouchdowns;
            // totals.pointsAllowed += week.pointsAllowed;
            // totals.fantasyScore += week.fantasyScore;
        }
    });
    return { totals, gameCount };
};

const getAverages = (totals, gameCount) => {
    const averages = {};
    for (const field in totals) {
        averages[field] = getFixedValue(totals[field] / gameCount);
    }
    return averages;

    // return {
    //     sacks: getFixedValue(totals.sacks / gameCount),
    //     interceptions: getFixedValue(totals.interceptions / gameCount),
    //     fumbleRecoveries: getFixedValue(totals.fumbleRecoveries / gameCount),
    //     safeties: getFixedValue(totals.safeties / gameCount),
    //     defensiveTouchdowns: getFixedValue(
    //         totals.defensiveTouchdowns / gameCount
    //     ),
    //     defensive2PtReturns: getFixedValue(
    //         totals.defensive2PtReturns / gameCount
    //     ),
    //     returnedTouchdowns: getFixedValue(
    //         totals.returnedTouchdowns / gameCount
    //     ),
    //     pointsAllowed: getFixedValue(totals.pointsAllowed / gameCount),
    //     fantasyScore: getFixedValue(totals.fantasyScore / gameCount),
    // };
};

defenseStatsSchema.pre('save', async function (next) {
    const defenseStats = this;
    if (defenseStats.isModified('stats')) {
        for (const yearData of defenseStats.stats) {
            const { totals, gameCount } = getTotals(yearData.games);
            yearData.totals = totals;
            yearData.averages = getAverages(totals, gameCount);
        }
    }
    next();
});

const DefenseStats = mongoose.model('Defense-Stats', defenseStatsSchema);

module.exports = DefenseStats;
