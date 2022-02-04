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

const getTotals = (games) => {
    const totals = {
        completions: 0,
        passingAttempts: 0,
        passingYards: 0,
        passingAverage: 0,
        passingTouchdowns: 0,
        interceptions: 0,
        sacks: 0,
        sackYards: 0,
        qbRating: 0,
        rushingAttempts: 0,
        rushingYards: 0,
        rushingAverage: 0,
        rushingTouchdowns: 0,
        fumbles: 0,
        fumblesLost: 0,
        receptions: 0,
        receivingYards: 0,
        receivingAverage: 0,
        longestReception: 0,
        receivingTouchdowns: 0,
        longestRush: 0,
        fieldGoals: 0,
        fieldGoalAttempts: 0,
        bellow19yards: 0,
        bellow29yards: 0,
        bellow39yards: 0,
        bellow49yards: 0,
        fiftyYardsPlus: 0,
        longestFieldGoal: 0,
        extraPoints: 0,
        extraPointAttempts: 0,
        fantasyScore: 0,
    };
    let gameCount = 0;
    games.forEach((game) => {
        if (game.opponent !== 'Bye') {
            totals.completions += game.completions;
            totals.passingAttempts += game.passingAttempts;
            totals.passingYards += game.passingYards;
            totals.passingAverage += game.passingAverage;
            totals.passingTouchdowns += game.passingTouchdowns;
            totals.interceptions += game.interceptions;
            totals.sacks += game.sacks;
            totals.sackYards += game.sackYards;
            totals.qbRating += game.qbRating;
            totals.rushingAttempts += game.rushingAttempts;
            totals.rushingYards += game.rushingYards;
            totals.rushingAverage += game.rushingAverage;
            totals.rushingTouchdowns += game.rushingTouchdowns;
            totals.fumbles += game.fumbles;
            totals.fumblesLost += game.fumblesLost;
            totals.receptions += game.receptions;
            totals.receivingYards += game.receivingYards;
            totals.receivingAverage += game.receivingAverage;
            totals.longestReception += game.longestReception;
            totals.receivingTouchdowns += game.receivingTouchdowns;
            totals.longestRush += game.longestRush;
            totals.fieldGoals += game.fieldGoals;
            totals.fieldGoalAttempts += game.fieldGoalAttempts;
            totals.bellow19yards += game.bellow19yards;
            totals.bellow29yards += game.bellow29yards;
            totals.bellow39yards += game.bellow39yards;
            totals.bellow49yards += game.bellow49yards;
            totals.fiftyYardsPlus += game.fiftyYardsPlus;
            totals.longestFieldGoal += game.longestFieldGoal;
            totals.extraPoints += game.extraPoints;
            totals.extraPointAttempts += game.extraPointAttempts;
            totals.fantasyScore += game.fantasyScore;
            gameCount++;
        }
    });
    return { totals, gameCount };
};

const getAverages = (totals, gameCount) => {
    return {
        completions: getFixedValue(totals.completions / gameCount),
        passingAttempts: getFixedValue(totals.passingAttempts / gameCount),
        passingYards: getFixedValue(totals.passingYards / gameCount),
        passingAverage: getFixedValue(totals.passingAverage / gameCount),
        passingTouchdowns: getFixedValue(totals.passingTouchdowns / gameCount),
        interceptions: getFixedValue(totals.interceptions / gameCount),
        sacks: getFixedValue(totals.sacks / gameCount),
        sackYards: getFixedValue(totals.sackYards / gameCount),
        qbRating: getFixedValue(totals.qbRating / gameCount),
        rushingAttempts: getFixedValue(totals.rushingAttempts / gameCount),
        rushingYards: getFixedValue(totals.rushingYards / gameCount),
        rushingAverage: getFixedValue(totals.rushingAverage / gameCount),
        rushingTouchdowns: getFixedValue(totals.rushingTouchdowns / gameCount),
        fumbles: getFixedValue(totals.fumbles / gameCount),
        fumblesLost: getFixedValue(totals.fumblesLost / gameCount),
        receptions: getFixedValue(totals.receptions / gameCount),
        receivingYards: getFixedValue(totals.receivingYards / gameCount),
        receivingAverage: getFixedValue(totals.receivingAverage / gameCount),
        longestReception: getFixedValue(totals.longestReception / gameCount),
        receivingTouchdowns: getFixedValue(
            totals.receivingTouchdowns / gameCount
        ),
        longestRush: getFixedValue(totals.longestRush / gameCount),
        fieldGoals: getFixedValue(totals.fieldGoals / gameCount),
        fieldGoalAttempts: getFixedValue(totals.fieldGoalAttempts / gameCount),
        bellow19yards: getFixedValue(totals.bellow19yards / gameCount),
        bellow29yards: getFixedValue(totals.bellow29yards / gameCount),
        bellow39yards: getFixedValue(totals.bellow39yards / gameCount),
        bellow49yards: getFixedValue(totals.bellow49yards / gameCount),
        fiftyYardsPlus: getFixedValue(totals.fiftyYardsPlus / gameCount),
        longestFieldGoal: getFixedValue(totals.longestFieldGoal / gameCount),
        extraPoints: getFixedValue(totals.extraPoints / gameCount),
        extraPointAttempts: getFixedValue(
            totals.extraPointAttempts / gameCount
        ),
        fantasyScore: getFixedValue(totals.fantasyScore / gameCount),
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
            const { totals, gameCount } = getTotals(yearData.games);
            yearData.totals = totals;
            yearData.averages = getAverages(totals, gameCount);
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
