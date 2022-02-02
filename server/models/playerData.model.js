const mongoose = require('mongoose');
const { getFixedValue } = require('../utils/utils');

const playerDataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        position: {
            type: String,
            required: true,
            trim: true,
        },
        team: {
            type: String,
            required: true,
            trim: true,
        },
        imageLink: {
            type: String,
            trim: true,
        },
        espnId: {
            type: String,
            trim: true,
        },
        number: {
            type: Number,
        },
        height: {
            type: String,
            trim: true,
        },
        weight: {
            type: String,
            trim: true,
        },
        age: {
            type: Number,
        },
        college: {
            type: String,
            trim: true,
        },
        experience: {
            type: String,
            trim: true,
        },
        stats: [
            {
                year: {
                    type: Number,
                },
                sums: {
                    completionsSum: {
                        type: Number,
                    },
                    passingAttemptsSum: {
                        type: Number,
                    },
                    passingYardsSum: {
                        type: Number,
                    },
                    passingAverageSum: {
                        type: Number,
                    },
                    passingTouchdownsSum: {
                        type: Number,
                    },
                    interceptionsSum: {
                        type: Number,
                    },
                    sacksSum: {
                        type: Number,
                    },
                    sackYardsSum: {
                        type: Number,
                    },
                    qbRatingSum: {
                        type: Number,
                    },
                    rushingAttemptsSum: {
                        type: Number,
                    },
                    rushingYardsSum: {
                        type: Number,
                    },
                    rushingAverageSum: {
                        type: Number,
                    },
                    rushingTouchdownsSum: {
                        type: Number,
                    },
                    fumblesSum: {
                        type: Number,
                    },
                    fumblesLostSum: {
                        type: Number,
                    },
                    receptionsSum: {
                        type: Number,
                    },
                    receivingYardsSum: {
                        type: Number,
                    },
                    receivingAverageSum: {
                        type: Number,
                    },
                    longestReceptionSum: {
                        type: Number,
                    },
                    receivingTouchdownsSum: {
                        type: Number,
                    },
                    longestRushSum: {
                        type: Number,
                    },
                    fieldGoalsSum: {
                        type: Number,
                    },
                    fieldGoalAttemptsSum: {
                        type: Number,
                    },
                    bellow19yardsSum: {
                        type: Number,
                    },
                    bellow29yardsSum: {
                        type: Number,
                    },
                    bellow39yardsSum: {
                        type: Number,
                    },
                    bellow49yardsSum: {
                        type: Number,
                    },
                    fiftyYardsPlusSum: {
                        type: Number,
                    },
                    longestFieldGoalSum: {
                        type: Number,
                    },
                    extraPointsSum: {
                        type: Number,
                    },
                    extraPointAttemptsSum: {
                        type: Number,
                    },
                    fantasyScoreSum: {
                        type: Number,
                    },
                },
                averages: {
                    completionsAvg: {
                        type: Number,
                    },
                    passingAttemptsAvg: {
                        type: Number,
                    },
                    passingYardsAvg: {
                        type: Number,
                    },
                    passingAverageAvg: {
                        type: Number,
                    },
                    passingTouchdownsAvg: {
                        type: Number,
                    },
                    interceptionsAvg: {
                        type: Number,
                    },
                    sacksAvg: {
                        type: Number,
                    },
                    sackYardsAvg: {
                        type: Number,
                    },
                    qbRatingAvg: {
                        type: Number,
                    },
                    rushingAttemptsAvg: {
                        type: Number,
                    },
                    rushingYardsAvg: {
                        type: Number,
                    },
                    rushingAverageAvg: {
                        type: Number,
                    },
                    rushingTouchdownsAvg: {
                        type: Number,
                    },
                    fumblesAvg: {
                        type: Number,
                    },
                    fumblesLostAvg: {
                        type: Number,
                    },
                    receptionsAvg: {
                        type: Number,
                    },
                    receivingYardsAvg: {
                        type: Number,
                    },
                    receivingAverageAvg: {
                        type: Number,
                    },
                    longestReceptionAvg: {
                        type: Number,
                    },
                    receivingTouchdownsAvg: {
                        type: Number,
                    },
                    longestRushAvg: {
                        type: Number,
                    },
                    fieldGoalsAvg: {
                        type: Number,
                    },
                    fieldGoalAttemptsAvg: {
                        type: Number,
                    },
                    bellow19yardsAvg: {
                        type: Number,
                    },
                    bellow29yardsAvg: {
                        type: Number,
                    },
                    bellow39yardsAvg: {
                        type: Number,
                    },
                    bellow49yardsAvg: {
                        type: Number,
                    },
                    fiftyYardsPlusAvg: {
                        type: Number,
                    },
                    longestFieldGoalAvg: {
                        type: Number,
                    },
                    extraPointsAvg: {
                        type: Number,
                    },
                    extraPointAttemptsAvg: {
                        type: Number,
                    },
                    fantasyScoreAvg: {
                        type: Number,
                    },
                },
                games: [
                    {
                        week: {
                            type: String,
                        },
                        opponent: {
                            type: String,
                        },
                        result: {
                            type: String,
                        },
                        completions: {
                            type: Number,
                        },
                        passingAttempts: {
                            type: Number,
                        },
                        passingYards: {
                            type: Number,
                        },
                        passingAverage: {
                            type: Number,
                        },
                        passingTouchdowns: {
                            type: Number,
                        },
                        interceptions: {
                            type: Number,
                        },
                        sacks: {
                            type: Number,
                        },
                        sackYards: {
                            type: Number,
                        },
                        qbRating: {
                            type: Number,
                        },
                        rushingAttempts: {
                            type: Number,
                        },
                        rushingYards: {
                            type: Number,
                        },
                        rushingAverage: {
                            type: Number,
                        },
                        rushingTouchdowns: {
                            type: Number,
                        },
                        fumbles: {
                            type: Number,
                        },
                        fumblesLost: {
                            type: Number,
                        },
                        receptions: {
                            type: Number,
                        },
                        receivingYards: {
                            type: Number,
                        },
                        receivingAverage: {
                            type: Number,
                        },
                        longestReception: {
                            type: Number,
                        },
                        receivingTouchdowns: {
                            type: Number,
                        },
                        longestRush: {
                            type: Number,
                        },
                        fieldGoals: {
                            type: Number,
                        },
                        fieldGoalAttempts: {
                            type: Number,
                        },
                        fgPercentage: {
                            type: String,
                        },
                        bellow19yards: {
                            type: Number,
                        },
                        bellow29yards: {
                            type: Number,
                        },
                        bellow39yards: {
                            type: Number,
                        },
                        bellow49yards: {
                            type: Number,
                        },
                        fiftyYardsPlus: {
                            type: Number,
                        },
                        longestFieldGoal: {
                            type: Number,
                        },
                        extraPoints: {
                            type: Number,
                        },
                        extraPointAttempts: {
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
        completionsSum: 0,
        passingAttemptsSum: 0,
        passingYardsSum: 0,
        passingAverageSum: 0,
        passingTouchdownsSum: 0,
        interceptionsSum: 0,
        sacksSum: 0,
        sackYardsSum: 0,
        qbRatingSum: 0,
        rushingAttemptsSum: 0,
        rushingYardsSum: 0,
        rushingAverageSum: 0,
        rushingTouchdownsSum: 0,
        fumblesSum: 0,
        fumblesLostSum: 0,
        receptionsSum: 0,
        receivingYardsSum: 0,
        receivingAverageSum: 0,
        longestReceptionSum: 0,
        receivingTouchdownsSum: 0,
        longestRushSum: 0,
        fieldGoalsSum: 0,
        fieldGoalAttemptsSum: 0,
        bellow19yardsSum: 0,
        bellow29yardsSum: 0,
        bellow39yardsSum: 0,
        bellow49yardsSum: 0,
        fiftyYardsPlusSum: 0,
        longestFieldGoalSum: 0,
        extraPointsSum: 0,
        extraPointAttemptsSum: 0,
        fantasyScoreSum: 0,
    };
    let gameCount = 0;
    games.forEach((game) => {
        if (game.opponent !== 'Bye') {
            sums.completionsSum += game.completions;
            sums.passingAttemptsSum += game.passingAttempts;
            sums.passingYardsSum += game.passingYards;
            sums.passingAverageSum += game.passingAverage;
            sums.passingTouchdownsSum += game.passingTouchdowns;
            sums.interceptionsSum += game.interceptions;
            sums.sacksSum += game.sacks;
            sums.sackYardsSum += game.sackYards;
            sums.qbRatingSum += game.qbRating;
            sums.rushingAttemptsSum += game.rushingAttempts;
            sums.rushingYardsSum += game.rushingYards;
            sums.rushingAverageSum += game.rushingAverage;
            sums.rushingTouchdownsSum += game.rushingTouchdowns;
            sums.fumblesSum += game.fumbles;
            sums.fumblesLostSum += game.fumblesLost;
            sums.receptionsSum += game.receptions;
            sums.receivingYardsSum += game.receivingYards;
            sums.receivingAverageSum += game.receivingAverage;
            sums.longestReceptionSum += game.longestReception;
            sums.receivingTouchdownsSum += game.receivingTouchdowns;
            sums.longestRushSum += game.longestRush;
            sums.fieldGoalsSum += game.fieldGoals;
            sums.fieldGoalAttemptsSum += game.fieldGoalAttempts;
            sums.bellow19yardsSum += game.bellow19yards;
            sums.bellow29yardsSum += game.bellow29yards;
            sums.bellow39yardsSum += game.bellow39yards;
            sums.bellow49yardsSum += game.bellow49yards;
            sums.fiftyYardsPlusSum += game.fiftyYardsPlus;
            sums.longestFieldGoalSum += game.longestFieldGoal;
            sums.extraPointsSum += game.extraPoints;
            sums.extraPointAttemptsSum += game.extraPointAttempts;
            sums.fantasyScoreSum += game.fantasyScore;
            gameCount++;
        }
    });
    return { sums, gameCount };
};

const getAverages = (sums, gameCount) => {
    return {
        completionsAvg: getFixedValue(sums.completionsSum / gameCount),
        passingAttemptsAvg: getFixedValue(sums.passingAttemptsSum / gameCount),
        passingYardsAvg: getFixedValue(sums.passingYardsSum / gameCount),
        passingAverageAvg: getFixedValue(sums.passingAverageSum / gameCount),
        passingTouchdownsAvg: getFixedValue(
            sums.passingTouchdownsSum / gameCount
        ),
        interceptionsAvg: getFixedValue(sums.interceptionsSum / gameCount),
        sacksAvg: getFixedValue(sums.sacksSum / gameCount),
        sackYardsAvg: getFixedValue(sums.sackYardsSum / gameCount),
        qbRatingAvg: getFixedValue(sums.qbRatingSum / gameCount),
        rushingAttemptsAvg: getFixedValue(sums.rushingAttemptsSum / gameCount),
        rushingYardsAvg: getFixedValue(sums.rushingYardsSum / gameCount),
        rushingAverageAvg: getFixedValue(sums.rushingAverageSum / gameCount),
        rushingTouchdownsAvg: getFixedValue(
            sums.rushingTouchdownsSum / gameCount
        ),
        fumblesAvg: getFixedValue(sums.fumblesSum / gameCount),
        fumblesLostAvg: getFixedValue(sums.fumblesLostSum / gameCount),
        receptionsAvg: getFixedValue(sums.receptionsSum / gameCount),
        receivingYardsAvg: getFixedValue(sums.receivingYardsSum / gameCount),
        receivingAverageAvg: getFixedValue(
            sums.receivingAverageSum / gameCount
        ),
        longestReceptionAvg: getFixedValue(
            sums.longestReceptionSum / gameCount
        ),
        receivingTouchdownsAvg: getFixedValue(
            sums.receivingTouchdownsSum / gameCount
        ),
        longestRushAvg: getFixedValue(sums.longestRushSum / gameCount),
        fieldGoalsAvg: getFixedValue(sums.fieldGoalsSum / gameCount),
        fieldGoalAttemptsAvg: getFixedValue(
            sums.fieldGoalAttemptsSum / gameCount
        ),
        bellow19yardsAvg: getFixedValue(sums.bellow19yardsSum / gameCount),
        bellow29yardsAvg: getFixedValue(sums.bellow29yardsSum / gameCount),
        bellow39yardsAvg: getFixedValue(sums.bellow39yardsSum / gameCount),
        bellow49yardsAvg: getFixedValue(sums.bellow49yardsSum / gameCount),
        fiftyYardsPlusAvg: getFixedValue(sums.fiftyYardsPlusSum / gameCount),
        longestFieldGoalAvg: getFixedValue(
            sums.longestFieldGoalSum / gameCount
        ),
        extraPointsAvg: getFixedValue(sums.extraPointsSum / gameCount),
        extraPointAttemptsAvg: getFixedValue(
            sums.extraPointAttemptsSum / gameCount
        ),
        fantasyScoreAvg: getFixedValue(sums.fantasyScoreSum / gameCount),
    };
};

const calculateFantasyScore = (game) => {
    let fantasyScore = 0;
    fantasyScore += (game.passingYards || 0) * 0.04;
    fantasyScore += (game.rushingYards || 0) * 0.1;
    fantasyScore += (game.receivingYards || 0) * 0.1;
    fantasyScore += (game.rushingTouchdowns || 0) * 6;
    fantasyScore += (game.receivingTouchdowns || 0) * 6;
    fantasyScore += (game.passingTouchdowns || 0) * 4;
    fantasyScore += (game.receptions || 0) * 0.5;
    fantasyScore += (game.interceptions || 0) * -1;
    fantasyScore += (game.fumblesLost || 0) * -2;
    fantasyScore += (game.extraPoints || 0) * 1;
    fantasyScore += (game.fieldGoals || 0) * 3; //0-39 yards:3 pts, 40-49 yards:4 pts, 50+ yards:5 pts
    fantasyScore += (game.bellow49yards || 0) * 1;
    fantasyScore += (game.fiftyYardsPlus || 0) * 2;
    return fantasyScore.toFixed(3);
};

const sortGamesByWeek = (position, games) => {
    if (['QB', 'RB', 'WR', 'TE'].includes(position)) {
        games.reverse();
    }
};

playerDataSchema.pre('save', async function (next) {
    const playerData = this;
    if (playerData.isModified('stats')) {
        for (const yearData of playerData.stats) {
            sortGamesByWeek(playerData.position, yearData.games);
            // console.log(yearData.games);
            for (const game of yearData.games) {
                if (!game.fantasyScore) {
                    game.fantasyScore = calculateFantasyScore(game);
                }
            }
            const { sums, gameCount } = getSums(yearData.games);
            yearData.sums = sums;
            yearData.averages = getAverages(sums, gameCount);
        }
    }
    next();
});

playerDataSchema.methods.toJSON = function () {
    const playerDataObject = this.toObject();
    delete playerDataObject.__v;
    for (const yearData of playerDataObject.stats) {
        //todo: remove this after testing
        delete yearData.games;
    }
    return playerDataObject;
};

const PlayerData = mongoose.model('Player-Data', playerDataSchema);

module.exports = PlayerData;
