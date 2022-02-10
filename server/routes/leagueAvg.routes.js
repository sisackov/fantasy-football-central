const express = require('express');
const LeagueAvgController = require('../controllers/leagueAvg.controller.js');
const router = new express.Router();

router.get('/leagueAvg', LeagueAvgController.getAllLeagueAvg);

router.get(
    '/leagueAvg/position/:pos',
    LeagueAvgController.getLeagueAvgByPosition
);

router.get('/leagueAvg/:id', LeagueAvgController.getLeagueAvgById);

module.exports = router;
