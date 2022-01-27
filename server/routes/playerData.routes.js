const express = require('express');
const PlayerDataController = require('../controllers/playerData.controller');
const auth = require('../services/auth');
const router = new express.Router();

//get all players(limited to 50)
router.get('/players', PlayerDataController.getAllPlayers);

//gets list of player names by autocomplete query string
router.get('/players/autocomplete', PlayerDataController.getAutocomplete);

//get players by query string
router.get('/players/query', PlayerDataController.getQueriedPlayers);

//get player by id
router.get('/players/:id', PlayerDataController.getPlayerById);

module.exports = router;
