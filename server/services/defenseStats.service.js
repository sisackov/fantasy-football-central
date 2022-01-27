const TeamDefenseStats = require('../models/defenseStats.model');

exports.createDefenseStats = async (teamStats) => {
    try {
        // const teamDefenseStats = await TeamDefenseStats.findByTeam(
        //     teamStats.team
        // );
        // console.log('teamDefenseStats', teamDefenseStats);
        // if (!teamDefenseStats) {
        const teamData = new TeamDefenseStats(teamStats);
        await teamData.save();
        // }
        // else {
        //     //todo: rework this
        //     console.log('Defense stats already exist:', teamStats.team);
        //     for (const [key, value] of Object.entries(teamStats)) {
        //         teamDefenseStats[key] = value;
        //     }
        //     await teamDefenseStats.save();
        // }
    } catch (e) {
        console.error('Failed to save data for: ', teamStats, e);
    }
};

exports.deleteDefenseStatsCollection = async () => {
    try {
        await TeamDefenseStats.deleteMany({});
    } catch (e) {
        console.log('Failed to delete collection', e);
    }
};
