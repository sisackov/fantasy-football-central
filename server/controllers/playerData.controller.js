const PlayerDataService = require('../services/playerData.service');

exports.getAllPlayers = async (req, res) => {
    try {
        const playerData = await PlayerDataService.getAllPlayers(
            req.query.limit
        );
        res.send(playerData);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};

exports.getAutocomplete = async (req, res) => {
    try {
        const playerData = await PlayerDataService.getAutocomplete(req.query);
        res.send(playerData);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};

exports.getQueriedPlayers = async (req, res) => {
    try {
        const playerData = await PlayerDataService.getQueriedPlayers(req.query);
        res.send(playerData);
    } catch (e) {
        console.error(e.message);
        res.status(500).send(e.message);
    }
};

exports.getPlayerById = async (req, res) => {
    try {
        const playerData = await PlayerDataService.getPlayerById(req.params.id);
        res.send(playerData);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
