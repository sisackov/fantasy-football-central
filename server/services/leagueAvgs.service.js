const LeagueAvgs = require('../models/leagueAvgs.model');

exports.createLeagueAvgs = async (leagueAvgStats) => {
    try {
        const leagueAvgs = new LeagueAvgs(leagueAvgStats);
        await leagueAvgs.save();
    } catch (e) {
        console.error('Failed to save data for: ', leagueAvgStats, e.message);
    }
};

exports.getAllLeagueAvgs = async (limit) => {
    try {
        const leagueAvgs = await LeagueAvgs.find().limit(limit || 0);
        console.log('getAllLeagueAvgs length: ', leagueAvgs.length);
        return leagueAvgs;
    } catch (e) {
        console.error('Failed to get all leagueAvgs data: ', e.message);
    }
    return [];
};

exports.getLeagueAvgByPosition = async (position) => {
    try {
        const allData = this.getAllLeagueAvgs();
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
        const leagueAvgs = await LeagueAvgs.findById(id);
        console.log('getLeagueAvgById : ', leagueAvgs);
        return leagueAvgs;
    } catch (e) {
        console.error('Failed to get leagueAvgs data by id: ', e.message);
    }
    return null;
};

exports.deleteLeagueAvgsCollection = async () => {
    try {
        await LeagueAvgs.deleteMany({});
    } catch (e) {
        console.error('Failed to delete collection', e.message);
    }
};
