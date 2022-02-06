const mongoose = require('mongoose');
const { POS_KICKER } = require('../utils/constants');
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
                //todo: handle duplication on totals, averages, games
                totals: {
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
                    underNineteen: {
                        type: Number,
                    },
                    underTwentyNine: {
                        type: Number,
                    },
                    underThirtyNine: {
                        type: Number,
                    },
                    underFortyNine: {
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
                    extraPointAts: {
                        type: Number,
                    },
                    fantasyScore: {
                        type: Number,
                    },
                },
                averages: {
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
                    underNineteen: {
                        type: Number,
                    },
                    underTwentyNine: {
                        type: Number,
                    },
                    underThirtyNine: {
                        type: Number,
                    },
                    underFortyNine: {
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
                    extraPointAts: {
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
                            type: Number,
                        },
                        underNineteen: {
                            type: Number,
                        },
                        underTwentyNine: {
                            type: Number,
                        },
                        underThirtyNine: {
                            type: Number,
                        },
                        underFortyNine: {
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
                        extraPointAts: {
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

const getTotals = (games, position) => {
    const totals = {};
    if (position === POS_KICKER) {
        totals.fieldGoals = 0;
        totals.fieldGoalAttempts = 0;
        totals.underNineteen = 0;
        totals.underTwentyNine = 0;
        totals.underThirtyNine = 0;
        totals.underFortyNine = 0;
        totals.fiftyYardsPlus = 0;
        totals.extraPoints = 0;
        totals.extraPointAts = 0;
        totals.fantasyScore = 0;
    } else {
        totals.completions = 0;
        totals.passingAttempts = 0;
        totals.passingYards = 0;
        totals.passingTouchdowns = 0;
        totals.interceptions = 0;
        totals.sacks = 0;
        totals.sackYards = 0;
        totals.qbRating = 0;
        totals.rushingAttempts = 0;
        totals.rushingYards = 0;
        totals.rushingTouchdowns = 0;
        totals.fumbles = 0;
        totals.fumblesLost = 0;
        totals.receptions = 0;
        totals.receivingYards = 0;
        totals.longestReception = 0;
        totals.receivingTouchdowns = 0;
        totals.longestRush = 0;
        totals.fantasyScore = 0;
    }

    let gameCount = 0;
    games.forEach((game) => {
        if (game.opponent !== 'Bye' && game.opponent !== 'BYE Week') {
            for (const key in totals) {
                totals[key] += game[key];
            }
            gameCount++;
        }
    });
    Object.keys(totals).forEach((key) => {
        totals[key] = getFixedValue(totals[key]);
    });
    return { totals, gameCount };
};

const getAverages = (totals, gameCount) => {
    const averages = {};
    Object.keys(totals).forEach((key) => {
        averages[key] = getFixedValue(totals[key] / gameCount);
    });
    return averages;
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
    fantasyScore += (game.underFortyNine || 0) * 1;
    fantasyScore += (game.fiftyYardsPlus || 0) * 2;
    return getFixedValue(fantasyScore);
};

const sortGamesByWeek = (position, games) => {
    if (['QB', 'RB', 'WR', 'TE'].includes(position)) {
        games.reverse();
    }
};

playerDataSchema.pre('save', async function (next) {
    const playerData = this;
    // if (playerData.isModified('stats')) {
    for (const yearData of playerData.stats) {
        sortGamesByWeek(playerData.position, yearData.games);
        for (const game of yearData.games) {
            if (!game.fantasyScore) {
                game.fantasyScore = calculateFantasyScore(game);
            }
        }
        const { totals, gameCount } = getTotals(
            yearData.games,
            playerData.position
        );
        yearData.totals = totals;
        yearData.averages = getAverages(totals, gameCount);
    }
    // }
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
