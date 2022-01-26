const PlayerData = require('../models/playerData.model');

exports.create = async (req, res) => {
    try {
        const playerData = await PlayerData.create(req.body);
        res.status(201).json(playerData);
    } catch (e) {
        res.status(400).json(e);
    }
};
