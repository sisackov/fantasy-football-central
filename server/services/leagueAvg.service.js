const LeagueAvg = require('../models/leagueAvg.model');

exports.createLeagueAvg = async (leagueAvgStats) => {
    try {
        const leagueAvg = new LeagueAvg(leagueAvgStats);
        await leagueAvg.save();
    } catch (e) {
        console.error('Failed to save data for: ', leagueAvgStats, e.message);
    }
};

exports.getAllLeagueAvg = async (limit) => {
    try {
        const leagueAvg = await LeagueAvg.find().limit(limit || 0);
        console.log('getAllLeagueAvg length: ', leagueAvg.length);
        return leagueAvg;
    } catch (e) {
        console.error('Failed to get all leagueAvg data: ', e.message);
    }
    return [];
};

exports.getLeagueAvgByPosition = async (position) => {
    try {
        const allData = await LeagueAvg.find();
        const filteredData = allData.filter(
            (data) => data.position === position
        );
        console.log('getLeagueAvgByPosition length: ', filteredData.length);
        return filteredData;
    } catch (e) {
        console.error('Failed to getLeagueAvgByPosition: ', e.message);
    }
    return [];
};

exports.getLeagueAvgById = async (id) => {
    try {
        const leagueAvg = await LeagueAvg.findById(id);
        console.log('getLeagueAvgById : ', leagueAvg);
        return leagueAvg;
    } catch (e) {
        console.error('Failed to get leagueAvg data by id: ', e.message);
    }
    return null;
};

exports.deleteLeagueAvgCollection = async () => {
    try {
        await LeagueAvg.deleteMany({});
    } catch (e) {
        console.error('Failed to delete collection', e.message);
    }
};
