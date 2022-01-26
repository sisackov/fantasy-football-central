const mongoose = require('mongoose');

const teamDefenseStatsSchema = new mongoose.Schema(
    {
        team: {
            type: String,
            required: true,
            unique: true,
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
    {
        timestamps: true,
    }
);

teamDefenseStatsSchema.statics.findByTeam = async (teamName) => {
    return TeamDefenseStats.findOne({ teamName });

    // if (!team) {
    //     throw new Error('Unable to find team defense stats.');
    // }

    // return team;
};

const TeamDefenseStats = mongoose.model(
    'TeamDefenseStats',
    teamDefenseStatsSchema
);

module.exports = TeamDefenseStats;
