const mongoose = require('mongoose');
const { POS_KICKER } = require('../utils/constants');
const { getFixedValue } = require('../utils/utils');

const leagueAvgsSchema = new mongoose.Schema(
    {
        stats: [
            {
                position: {
                    type: String,
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
            },
        ],
    },
    {
        timestamps: true,
    }
);

const LeagueAvgs = mongoose.model('League-Avg', leagueAvgsSchema);

module.exports = LeagueAvgs;
