const puppeteer = require('puppeteer');
const {
    PLAYER_DATA_TABLE_COLUMNS,
    DEFENSE_TABLE_COLUMNS,
} = require('./constants');

const qbTableHeaders = [
    'week',
    'opponent',
    'result',
    'completions',
    'passingAttempts',
    'passingYards',
    'passingAverage',
    'passingTouchdowns',
    'interceptions',
    'sacks',
    'sackYards',
    'qbRating',
    'rushingAttempts',
    'rushingYards',
    'rushingAverage',
    'rushingTouchdowns',
    'fumbles',
    'fumblesLost',
];

const wrTableHeaders = [
    'week',
    'opponent',
    'result',
    'receptions',
    'receivingYards',
    'receivingAverage',
    'longestReception',
    'receivingTouchdowns',
    'rushingAttempts',
    'rushingYards',
    'rushingAverage',
    'longestRush',
    'rushingTouchdowns',
    'fumbles',
    'fumblesLost',
];

const rbTableHeaders = [
    'week',
    'opponent',
    'result',
    'rushingAttempts',
    'rushingYards',
    'rushingAverage',
    'longestRush',
    'rushingTouchdowns',
    'receptions',
    'receivingYards',
    'receivingAverage',
    'longestReception',
    'receivingTouchdowns',
    'fumbles',
    'fumblesLost',
];

const kickerTableHeaders = [
    'week',
    'opponent',
    'result',
    'fieldGoals',
    'fieldGoalAttempts',
    'fgPercentage',
    'bellow19Yards',
    'bellow29Yards',
    'bellow39Yards',
    'bellow49Yards',
    'fiftyYardsPlus',
    'longestFieldGoal',
    'extraPoints',
    'extraPointsAttempts',
    'fantasyScore',
];

async function getTableContent(page, selector) {
    return page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent || '');
        })
    );
}

const getTableHeaders = (playerPosition) => {
    //TODO: make all positions constants
    switch (playerPosition) {
        case 'QB':
            return qbTableHeaders;
        case 'WR':
        case 'TE':
            return wrTableHeaders;
        case 'RB':
            return rbTableHeaders;
        case 'PK':
            return kickerTableHeaders;
        default:
            return qbTableHeaders;
    }
};

const getDataFromTableContent = (tableContent, tableColumns) => {
    return tableContent.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            rowData[tableColumns[index]] = cell;
        });
        rowData.year = 2021;
        return rowData;
    });
};

async function getPlayerStatsNFL(playerName, playerPosition) {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();

        const url = `https://www.nfl.com/players/${playerName}/stats/`;
        console.log(url);

        // Instructs the blank page to navigate a URL
        await page.goto(url);

        const selector = 'table[summary="Recent Games"] > tbody > tr ';
        await page.waitForSelector(selector);

        const tableContent = await page.$$eval(selector, (trs) =>
            trs.map((tr) => {
                const tds = [...tr.querySelectorAll('td')];
                return tds.map((td) => td.textContent);
            })
        );

        const tableHeaders = getTableHeaders(playerPosition);

        return getDataFromTableContent(tableContent, tableHeaders);
    } catch (err) {
        console.log(err);
    } finally {
        await browser.close();
        console.log('done');
    }
    return [];
}
// getPlayerStatsNFL('tom-brady', 'QB');
// getPlayerStatsNFL('travis-kelce', 'TE');
// getPlayerStatsNFL('dalvin-cook', 'RB');
// getPlayerStatsNFL('mike-evans', 'WR');

const NEEDED_OFFENSIVE_POSITIONS = ['QB', 'RB', 'WR', 'TE'];

const getPlayerDataTableContent = async (page, selector) => {
    return page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td, index) => {
                try {
                    if (index === 0) {
                        return td.querySelector('img').getAttribute('alt');
                    } else if (index === 1) {
                        const linkContent = td.querySelector('a').textContent;
                        const spanContent = td.querySelector('span')
                            ? td.querySelector('span').textContent
                            : '-1'; //*player without a number

                        return `${linkContent}__${spanContent}`;
                    }
                    return td.textContent;
                } catch (err) {
                    console.log(err);
                }
                return '';
            });
        })
    );
};

const getPlayerDataFiltered = async (
    tableContent,
    tableColumns,
    filterArray,
    teamName
) => {
    return tableContent
        .map((row) => {
            const rowData = {};
            row.forEach((cell, index) => {
                if (index === 0) {
                    rowData[tableColumns[index]] = cell;
                    rowData.espnId = cell
                        .slice(cell.lastIndexOf('/') + 1)
                        .split('.')[0];
                } else if (index === 1) {
                    const split = cell.split('__');
                    rowData[tableColumns[index]] = split[0];
                    rowData.number = split[1];
                    rowData.team = teamName.split('/')[1];
                } else {
                    rowData[tableColumns[index]] = cell;
                }
            });
            if (rowData.age === '--') {
                rowData.age = '-1';
            }
            return rowData;
        })
        .filter((player) => filterArray.includes(player.position));
};

async function getPlayersData(teamName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    const url = `https://www.espn.com/nfl/team/roster/_/name/${teamName}`;
    console.log(url);
    await page.goto(url);

    let selector = 'div.ResponsiveTable.Offense table > tbody > tr';
    // Waits until the selector element is rendered
    await page.waitForSelector(selector);

    let tableContent = await getPlayerDataTableContent(page, selector);
    const data = await getPlayerDataFiltered(
        tableContent,
        PLAYER_DATA_TABLE_COLUMNS,
        NEEDED_OFFENSIVE_POSITIONS,
        teamName
    );

    selector = 'div.ResponsiveTable.Special.Teams table > tbody > tr';
    tableContent = await getPlayerDataTableContent(page, selector);
    const specialTeams = await getPlayerDataFiltered(
        tableContent,
        PLAYER_DATA_TABLE_COLUMNS,
        ['PK'],
        teamName
    );
    data.push(...specialTeams);

    await browser.close();
    return data;
}

async function getTeamDefenseStats(team) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const tableColumns = DEFENSE_TABLE_COLUMNS;

    const url = `https://fantasy.nfl.com/players/card?leagueId=0&playerId=${team.teamId}`;

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    const statsSelector =
        'div.player-card-season-stats-graph-handle > span.stats';
    await page.waitForSelector(statsSelector);
    await page.click(statsSelector);

    const selector = 'table.tableType-weeks > tbody > tr';
    await page.waitForSelector(selector);
    let tableRows = await getTableContent(page, selector);
    tableRows = tableRows.filter((row) => row.length === tableColumns.length);

    const data = tableRows.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            if (index > 2) {
                rowData[tableColumns[index]] = isNaN(parseFloat(cell))
                    ? '0'
                    : cell;
            } else {
                rowData[tableColumns[index]] = cell;
            }
        });
        rowData.year = 2021;
        return rowData;
    });

    await browser.close();
    return data;
}

async function getKickerStats(playerName) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();

        const url = `https://www.fantasypros.com/nfl/games/${playerName}.php`;

        // Instructs the blank page to navigate a URL
        await page.goto(url);

        const selector = 'table.table > tbody > tr';
        await page.waitForSelector(selector);
        let tableContent = await getTableContent(page, selector);

        const tableHeaders = getTableHeaders('PK');

        return getDataFromTableContent(tableContent, tableHeaders).filter(
            (row) => row.opponent !== 'BYE Week'
        );
    } catch (e) {
        console.log(e);
    } finally {
        await browser.close();
    }
    return [];
}

async function startRun() {
    // const team = await getTeamDefenseStats(fnflTeams[0]);
    const team = await getKickerStats('nick-folk');
    console.log(team);
}

// startRun();

module.exports = {
    getKickerStats,
    getPlayersData,
    getPlayerStatsNFL,
    getTeamDefenseStats,
};
