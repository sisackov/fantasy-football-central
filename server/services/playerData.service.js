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

exports.getAllPlayerData = async () => {
    try {
        const playerData = await PlayerData.find();
        console.log('getAllPlayerData length: ', playerData.length);
        return playerData;
    } catch (e) {
        console.error('Failed to get all player data: ', e);
    }
    return [];
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
