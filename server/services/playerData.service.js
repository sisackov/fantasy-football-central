const PlayerData = require('../models/playerData.model');

exports.createPlayerData = async (player) => {
    try {
        const playerInDB = await PlayerData.findByName(player.name);
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
        console.error('Failed to save data for: ', player, e);
    }
};

exports.getAllPlayers = async () => {
    try {
        const playerData = await PlayerData.find();
        console.log('getAllPlayerData length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get all player data: ', e);
    }
    return [];
};

exports.getAutocomplete = async (query) => {
    try {
        const playerData = await PlayerData.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { position: { $regex: query, $options: 'i' } },
            ],
        });
        console.log('getAutocomplete length: ', playerData.length);
        return playerData.map((player) => player.name); //returns a list of player names
    } catch (e) {
        console.error('Failed to get autocomplete player data: ', e);
    }
    return [];
};

exports.getQueriedPlayers = async (query) => {
    try {
        const playerData = await PlayerData.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { position: { $regex: query, $options: 'i' } },
                { team: { $regex: query, $options: 'i' } },
                { college: { $regex: query, $options: 'i' } },
            ],
        });
        console.log('getQueriedPlayers length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get queried player data: ', e);
    }
    return [];
};

exports.getPlayerById = async (id) => {
    try {
        const playerData = await PlayerData.findById(id);
        console.log('getPlayerById : ', playerData);
        return playerData;
    } catch (e) {
        console.error('Failed to get player data by id: ', e);
    }
    return null;
};

exports.getAllPlayersByPosition = async (position) => {
    try {
        const playerData = await PlayerData.find({ position });
        console.log('getAllPlayersByPosition length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get all player data: ', e);
    }
    return [];
};

exports.deletePlayerDataCollection = async () => {
    try {
        await PlayerData.deleteMany({});
    } catch (e) {
        console.log('Failed to delete collection', e);
    }
};
