const mongoose = require('mongoose');

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
                averageFantasyScore: {
                    type: Number,
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

defenseStatsSchema.statics.findByTeam = async (teamName) => {
    return TeamDefenseStats.findOne({ teamName });

    // if (!team) {
    //     throw new Error('Unable to find team defense stats.');
    // }

    // return team;
};

defenseStatsSchema.pre('save', async function (next) {
    const defenseStats = this;
    if (defenseStats.isModified('stats')) {
        for (const yearData of defenseStats.stats) {
            const averageFantasyScore =
                yearData.games.reduce(
                    (acc, game) => acc + game.fantasyScore,
                    0
                ) / yearData.games.length;
            yearData.averageFantasyScore = averageFantasyScore.toFixed(2);
        }
    }
    next();
});

const DefenseStats = mongoose.model('DefenseStats', defenseStatsSchema);

module.exports = DefenseStats;
