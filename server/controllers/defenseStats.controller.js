const DefenseStatsService = require('../services/defenseStats.service');

exports.getAllDefenses = async (req, res) => {
    try {
        const defenseStats = await DefenseStatsService.getAllDefenses(
            req.query.limit
        );
        res.send(defenseStats);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};

exports.getQueriedDefenses = async (req, res) => {
    try {
        const defenseStats = await DefenseStatsService.getQueriedDefenses(
            req.query
        );
        res.send(defenseStats);
    } catch (e) {
        console.error(e.message);
        res.status(500).send(e.message);
    }
};

exports.getDefenseById = async (req, res) => {
    try {
        const defenseStats = await DefenseStatsService.getDefenseById(
            req.params.id
        );
        res.send(defenseStats);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
