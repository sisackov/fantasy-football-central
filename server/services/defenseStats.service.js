const DefenseStats = require('../models/defenseStats.model');

exports.createDefenseStats = async (defense) => {
    try {
        const defenseInDB = await DefenseStats.findOne({ team: defense.team });
        if (!defenseInDB) {
            const defenseStats = new DefenseStats(defense);
            await defenseStats.save();
        } else {
            defenseInDB.stats = defense.stats;
            await defenseInDB.save();
        }
    } catch (e) {
        console.error('Failed to save data for: ', defense, e.message);
    }
};

exports.getAllDefenses = async (limit) => {
    try {
        const defenseStats = await DefenseStats.find().limit(limit || 0);
        console.log('getAllDefenseStats length: ', defenseStats.length);
        return defenseStats;
    } catch (e) {
        console.error('Failed to get all defense data: ', e.message);
    }
    return [];
};

const createQueryList = (query) => {
    if (!query) {
        throw new Error('No query parameters provided');
    }
    const { team } = query;
    const queryList = [];
    if (team) {
        // if (teamRegex) {
        // const regex = new RegExp('^' + team, 'i');
        // queryList.push({ team: regex });
        // } else {
        queryList.push({ team: { $regex: team, $options: 'i' } });
        // }
    }
    return queryList;
};

exports.getQueriedDefenses = async (query) => {
    const queryList = createQueryList(query);
    const { limit, sort } = query;
    try {
        const dbQuery = queryList.length
            ? DefenseStats.find({
                  $and: queryList,
              })
            : DefenseStats.find();

        if (sort) {
            dbQuery.sort({ 'stats.averages.fantasyScore': sort });
        }
        if (limit) {
            dbQuery.limit(limit);
        }

        const defenseStats = await dbQuery;
        console.log('getQueriedDefenses length: ', defenseStats.length);
        return defenseStats;
    } catch (e) {
        console.error('Failed to get queried defense data: ', e.message);
    }
    return [];
};

exports.getDefenseById = async (id) => {
    try {
        const defenseStats = await DefenseStats.findById(id);
        console.log('getDefenseById : ', defenseStats);
        return defenseStats;
    } catch (e) {
        console.error('Failed to get defense data by id: ', e.message);
    }
    return null;
};

exports.deleteDefenseStatsCollection = async () => {
    try {
        await DefenseStats.deleteMany({});
    } catch (e) {
        console.error('Failed to delete collection', e.message);
    }
};
