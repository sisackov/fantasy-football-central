const PlayerData = require('../models/playerData.model');

exports.createPlayerData = async (player) => {
    try {
        const playerInDB = await PlayerData.findOne({ name: player.name });
        if (!playerInDB) {
            const playerData = new PlayerData(player);
            await playerData.save();
        } else {
            //todo: test this
            for (const [key, value] of Object.entries(player)) {
                playerInDB[key] = value;
            }
            await playerInDB.save();
        }
    } catch (e) {
        console.error('Failed to save data for: ', player, e.message);
    }
};

exports.getAllPlayers = async (limit) => {
    try {
        const playerData = await PlayerData.find().limit(limit || 0);
        console.log('getAllPlayerData length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get all player data: ', e.message);
    }
    return [];
};

const createQueryList = (query, nameRegex = false) => {
    if (!query) {
        throw new Error('No query parameters provided');
    }
    const { name, position, team, college } = query;
    const queryList = [];
    if (name) {
        if (nameRegex) {
            const regex = new RegExp('^' + name, 'i');
            queryList.push({ name: regex });
        } else {
            queryList.push({ name: { $regex: name, $options: 'i' } });
        }
    }
    if (position) {
        if (['QB', 'RB', 'WR', 'TE', 'PK'].includes(position)) {
            queryList.push({ position: position });
        } else {
            throw new Error('Invalid position queried');
        }
    }
    if (team) {
        queryList.push({ team: { $regex: team, $options: 'i' } });
    }
    if (college) {
        queryList.push({ college: { $regex: college, $options: 'i' } });
    }
    return queryList;
};

exports.getAutocomplete = async (query) => {
    const queryList = createQueryList(query, true);
    const { limit } = query;

    try {
        const dbQuery = queryList.length
            ? PlayerData.find({ $and: queryList })
            : PlayerData.find();
        if (limit) {
            dbQuery.limit(limit);
        }

        const playerData = await dbQuery;

        console.log('getAutocomplete length: ', playerData.length);
        return playerData.map((player) => player.name); //returns a list of player names
    } catch (e) {
        console.error('Failed to get autocomplete player data: ', e.message);
    }
    return [];
};

const getSortBy = (sort) => {
    switch (sort) {
        case 'avgFantasy':
            return 'stats.averages.fantasyScoreAvg';

        case 'avgPassYds':
            return 'stats.averages.passingYardsAvg';

        case 'avgPassTD':
            return 'stats.averages.passingTouchdownsAvg';

        case 'avgRushYds':
            return 'stats.averages.rushingYardsAvg';

        case 'avgRushTD':
            return 'stats.averages.rushingTouchdownsAvg';

        case 'avgRecYds':
            return 'stats.averages.receivingYardsAvg';

        case 'avgRecTds':
            return 'stats.averages.receivingTouchdownsAvg';

        case 'avgRushTds':
            return 'stats.averages.rushingTouchdownsAvg';

        case 'totalFantasy':
            return 'stats.totals.fantasyScoreTotal';

        case 'totalPassYds':
            return 'stats.totals.passingYardsTotal';

        case 'totalPassTD':
            return 'stats.totals.passingTouchdownsTotal';

        case 'totalRushYds':
            return 'stats.totals.rushingYardsTotal';

        case 'totalRecYds':
            return 'stats.totals.receivingYardsTotal';

        case 'totalRecTds':
            return 'stats.totals.receivingTouchdownsTotal';

        case 'totalFumbles':
            return 'stats.totals.fumblesTotal';

        default:
            return 'name';
    }
};

exports.getQueriedPlayers = async (query) => {
    const queryList = createQueryList(query);
    const { limit, sort, order } = query;
    try {
        const dbQuery = queryList.length
            ? PlayerData.find({
                  $and: queryList,
              })
            : PlayerData.find();

        if (sort) {
            const sortQuery = { [getSortBy(sort)]: order === 'asc' ? 1 : -1 };
            dbQuery.sort(sortQuery);
            // dbQuery.sort({ 'stats.averages.fantasyScoreAvg': -1 });
        }
        if (limit) {
            dbQuery.limit(limit);
        }

        const playerData = await dbQuery;
        console.log('getQueriedPlayers length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get queried player data: ', e.message);
    }
    return [];
};

exports.getPlayerById = async (id) => {
    try {
        const playerData = await PlayerData.findById(id);
        console.log('getPlayerById : ', playerData);
        return playerData;
    } catch (e) {
        console.error('Failed to get player data by id: ', e.message);
    }
    return null;
};

exports.getAllPlayersByPosition = async (position) => {
    try {
        const playerData = await PlayerData.find({ position });
        console.log('getAllPlayersByPosition length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get all player data: ', e.message);
    }
    return [];
};

exports.deletePlayerDataCollection = async () => {
    try {
        await PlayerData.deleteMany({});
    } catch (e) {
        console.error('Failed to delete collection', e.message);
    }
};
