const express = require('express');
const LeagueAvgController = require('../controllers/leagueAvg.controller.js');
const router = new express.Router();

//get all defenses
router.get('/leagueAvg', LeagueAvgController.getAllLeagueAvg);

//get defense by query string
router.get(
    '/leagueAvg/position/:position',
    LeagueAvgController.getLeagueAvgByPosition
);

//get player by id
router.get('/leagueAvg/:id', LeagueAvgController.getLeagueAvgById);

module.exports = router;
