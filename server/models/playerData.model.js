const mongoose = require('mongoose');

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

playerDataSchema.pre('save', async function (next) {
    const playerData = this;
    if (playerData.isModified('stats')) {
        for (const yearData of playerData.stats) {
            for (const game of yearData.games) {
                if (!game.fantasyScore) {
                    game.fantasyScore = calculateFantasyScore(game);
                }
            }
        }
    }
    next();
});

const PlayerData = mongoose.model('PlayerData', playerDataSchema);

module.exports = PlayerData;
