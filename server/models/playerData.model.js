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
        stats: {
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
                    passAttempts: {
                        type: Number,
                    },
                    passYards: {
                        type: Number,
                    },
                    passAverage: {
                        type: Number,
                    },
                    passTouchdowns: {
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
                    rushAttempts: {
                        type: Number,
                    },
                    rushYards: {
                        type: Number,
                    },
                    rushAverage: {
                        type: Number,
                    },
                    rushTouchdowns: {
                        type: Number,
                    },
                    fumbles: {
                        type: Number,
                    },
                    fumblesLost: {
                        type: Number,
                    },

                    fantasyScore: {
                        type: Number,
                    },
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

// playerDataSchema.virtual('playerStats', {
//     ref: 'PlayerStats',
//     localField: '_id',
//     foreignField: 'player',
// });

// playerDataSchema.methods.updateFields = async function (fields) {
//     const playerData = this;
//     const playerDataObject = playerData.toObject();
//     for (const [key, value] of Object.entries(fields)) {
//         playerDataObject[key] = value;
//     }
//     return playerDataObject;
// };

playerDataSchema.statics.findByName = async (name) => {
    const player = await PlayerData.findOne({ name });

    if (!player) {
        throw new Error('Unable to find player');
    }

    return player;
};

// todo:
// Delete user tasks when user is removed
// userSchema.pre('remove', async function (next) {
//     const player = this;
//     await PlayerStats.deleteMany({ player: player._id });
//     next();
// });

const PlayerData = mongoose.model('PlayerData', playerDataSchema);

module.exports = PlayerData;
