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
    },
    {
        timestamps: true,
    }
);

//todo: use this for saving the user's leagues
// playerDataSchema.virtual('playerStats', {
//     ref: 'PlayerStats',
//     localField: '_id',
//     foreignField: 'player',
// });

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
