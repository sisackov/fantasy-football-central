const express = require('express');
const DefenseStatsController = require('../controllers/defenseStats.controller.js');
const router = new express.Router();

//get all defenses
router.get('/defense', DefenseStatsController.getAllDefenses);

//get defense by query string
router.get('/defense/query', DefenseStatsController.getQueriedDefenses);

//get player by id
router.get('/defense/:id', DefenseStatsController.getDefenseById);

module.exports = router;
