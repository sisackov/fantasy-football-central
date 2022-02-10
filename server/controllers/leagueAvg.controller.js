const LeagueAvgService = require('../services/leagueAvg.service');

exports.getAllLeagueAvg = async (req, res) => {
    try {
        const leagueAvg = await LeagueAvgService.getAllLeagueAvg(
            req.query.limit
        );
        res.send(leagueAvg);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};

exports.getLeagueAvgByPosition = async (req, res) => {
    try {
        const leagueAvg = await LeagueAvgService.getLeagueAvgByPosition(
            req.params.pos
        );
        res.send(leagueAvg);
    } catch (e) {
        console.error(e.message);
        res.status(500).send(e.message);
    }
};

exports.getLeagueAvgById = async (req, res) => {
    try {
        const leagueAvg = await LeagueAvgService.getLeagueAvgById(
            req.params.id
        );
        res.send(leagueAvg);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
};
