const puppeteer = require('puppeteer');

const qbTableHeaders = [
    'week',
    'opponent',
    'result',
    'completions',
    'passAttempts',
    'passYards',
    'passAverage',
    'passTouchdowns',
    'interceptions',
    'sacks',
    'sackYards',
    'qbRating',
    'rushAttempts',
    'rushYards',
    'rushAverage',
    'rushTouchdowns',
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

const defenseTableHeaders = [
    'week',
    'opponent',
    'result',
    'sacks',
    'interceptions',
    'fumbleRecoveries',
    'safeties',
    'defensiveTouchdowns',
    'defensive2PtReturns',
    'returnedTouchdowns',
    'pointsAllowed',
    'fantasyScore',
];

const kickerTableHeaders = [
    'week',
    'opponent',
    'result',
    'fieldGoal',
    'fieldGoalAttempts',
    'fgPercentage',
    'bellow19yards',
    'bellow29yards',
    'bellow39yards',
    'bellow49yards',
    'above50yards',
    'longestFieldGoal',
    'extraPoints',
    'extraPointsAttempts',
    'fantasyScore',
];

async function getTableRows(page, selector) {
    return page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent || '');
        })
    );
}

const getTableHeaders = (playerPosition) => {
    switch (playerPosition) {
        case 'QB':
            return qbTableHeaders;
        case 'WR':
        case 'TE':
            return wrTableHeaders;
        case 'RB':
            return rbTableHeaders;
        case 'K':
            return kickerTableHeaders;
        default:
            return qbTableHeaders;
    }
};

async function getPlayerStatsNFL(playerName, playerPosition) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://www.nfl.com/players/${playerName}/stats/`;
    console.log(url);

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title');

    // const selector = '.d3-o-table > tbody > tr ';
    const selector = 'table[summary="Recent Games"] > tbody > tr ';

    // const table = await page.$$('.d3-o-table > tbody > tr ');
    // console.log(table);
    const tableRows = await page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent);
        })
    );

    const tableHeaders = getTableHeaders(playerPosition);

    const data = tableRows.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            rowData[tableHeaders[index]] = cell;
        });
        rowData.year = 2021;
        return rowData;
    });
    console.log(data); //Works!!!

    await browser.close();
}
// getPlayerStatsNFL('tom-brady', 'QB');
// getPlayerStatsNFL('travis-kelce', 'TE');
// getPlayerStatsNFL('dalvin-cook', 'RB');
// getPlayerStatsNFL('mike-evans', 'WR');

const neededOffensivePositions = ['QB', 'RB', 'WR', 'TE', 'K'];
const playerDataTableHeader = [
    'imageLink',
    'name',
    'position',
    'age',
    'height',
    'weight',
    'experience',
    'college',
];

const espnTeamRosterLinks = [
    'buf/buffalo-bills',
    'mia/miami-dolphins',
    'ne/new-england-patriots',
    'nyj/new-york-jets',
    'bal/baltimore-ravens',
    'cin/cincinnati-bengals',
    'cle/cleveland-browns',
    'pit/pittsburgh-steelers',
    'hou/houston-texans',
    'ind/indianapolis-colts',
    'jax/jacksonville-jaguars',
    'ten/tennessee-titans',
    'den/denver-broncos',
    'kc/kansas-city-chiefs',
    'oak/oakland-raiders',
    'lac/los-angeles-chargers',
    'chi/chicago-bears',
    'det/detroit-lions',
    'gb/green-bay-packers',
    'min/minnesota-vikings',
    'dal/dallas-cowboys',
    'nyg/new-york-giants',
    'phi/philadelphia-eagles',
    'wsh/washington',
    'atl/atlanta-falcons',
    'car/carolina-panthers',
    'no/new-orleans-saints',
    'tb/tampa-bay-buccaneers',
    'ari/arizona-cardinals',
    'sf/san-francisco-49ers',
    'sea/seattle-seahawks',
    'lar/los-angeles-rams',
];

async function getPlayersNameAndPosition(teamName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(`https://www.espn.com/nfl/team/roster/_/name/${teamName}`);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title');

    const selector = 'div.ResponsiveTable.Offense table > tbody > tr';
    const tableRows = await page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td, index) => {
                try {
                    if (index === 0) {
                        return td.querySelector('img').getAttribute('alt');
                    } else if (index === 1) {
                        return `${td.querySelector('a').textContent}__${
                            td.querySelector('span').textContent
                        }`;
                    }
                    return td.textContent;
                } catch (err) {
                    console.log(err);
                }
                return '';
            });
        })
    );

    const data = tableRows
        .map((row) => {
            const rowData = {};
            row.forEach((cell, index) => {
                if (index === 0) {
                    rowData[playerDataTableHeader[index]] = cell;
                    rowData.espnId = cell
                        .slice(cell.lastIndexOf('/') + 1)
                        .split('.')[0];
                } else if (index === 1) {
                    const split = cell.split('__');
                    rowData[playerDataTableHeader[index]] = split[0];
                    rowData.number = split[1];
                    rowData.teamName = teamName.split('/')[1];
                } else {
                    rowData[playerDataTableHeader[index]] = cell;
                }
            });
            return rowData;
        })
        .filter((player) => neededOffensivePositions.includes(player.position));

    await browser.close();
    return data;
    // console.log(data); //Works!!!
}

const fnflTeams = [
    {
        team: 'Buffalo Bills',
        teamId: '100003',
    },
    {
        team: 'Miami Dolphins',
        teamId: '100019',
    },
    {
        team: 'New England Patriots',
        teamId: '100021',
    },
    {
        team: 'New York Jets',
        teamId: '100024',
    },
    {
        team: 'Baltimore Ravens',
        teamId: '100002',
    },
    {
        team: 'Cincinnati Bengals',
        teamId: '100006',
    },
    {
        team: 'Cleveland Browns',
        teamId: '100007',
    },
    {
        team: 'Pittsburgh Steelers',
        teamId: '100027',
    },
    {
        team: 'Houston Texans',
        teamId: '100013',
    },
    {
        team: 'Indianapolis Colts',
        teamId: '100014',
    },
    {
        team: 'Jacksonville Jaguars',
        teamId: '100015',
    },
    {
        team: 'Tennessee Titans',
        teamId: '100012',
    },
    {
        team: 'Denver Broncos',
        teamId: '100009',
    },
    {
        team: 'Kansas City Chiefs',
        teamId: '100016',
    },
    {
        team: 'Oakland Raiders',
        teamId: '100018',
    },
    {
        team: 'Los Angeles Chargers',
        teamId: '100028',
    },
    {
        team: 'Chicago Bears',
        teamId: '100005',
    },
    {
        team: 'Detroit Lions',
        teamId: '100010',
    },
    {
        team: 'Green Bay Packers',
        teamId: '100011',
    },
    {
        team: 'Minnesota Vikings',
        teamId: '100020',
    },
    {
        team: 'Dallas Cowboys',
        teamId: '100008',
    },
    {
        team: 'New York Giants',
        teamId: '100023',
    },
    {
        team: 'Philadelphia Eagles',
        teamId: '100025',
    },
    {
        team: 'Washington',
        teamId: '100032',
    },
    {
        team: 'Atlanta Falcons',
        teamId: '100001',
    },
    {
        team: 'Carolina Panthers',
        teamId: '100004',
    },
    {
        team: 'New Orleans Saints',
        teamId: '100022',
    },
    {
        team: 'Tampa Bay Buccaneers',
        teamId: '100031',
    },
    {
        team: 'Arizona Cardinals',
        teamId: '100026',
    },
    {
        team: 'San Francisco 49ers',
        teamId: '100029',
    },
    {
        team: 'Seattle Seahawks',
        teamId: '100030',
    },
    {
        team: 'Los Angeles Rams',
        teamId: '100017',
    },
];

async function getTeamDefenseStats(team) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = `https://fantasy.nfl.com/players/card?leagueId=0&playerId=${team.teamId}`;

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    const statsSelector =
        'div.player-card-season-stats-graph-handle > span.stats';
    await page.waitForSelector(statsSelector);
    await page.click(statsSelector);

    const selector = 'table.tableType-weeks > tbody > tr';
    await page.waitForSelector(selector);
    let tableRows = await getTableRows(page, selector);
    tableRows = tableRows.filter(
        (row) => row.length === defenseTableHeaders.length
    );

    const data = tableRows.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            rowData[defenseTableHeaders[index]] = cell;
        });
        return rowData;
    });

    await browser.close();
    return data;
}

async function getKickerStats(playerName) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const url = `https://www.fantasypros.com/nfl/games/${playerName}.php`;

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    const selector = 'table.table > tbody > tr';
    await page.waitForSelector(selector);
    let tableRows = await getTableRows(page, selector);
    // console.log(tableRows);

    const tableHeaders = getTableHeaders('K');

    const data = tableRows.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            rowData[tableHeaders[index]] = cell;
        });
        rowData.year = 2021;
        return rowData;
    });
    console.log(data);

    await browser.close();
    return data;
}

async function startRun() {
    // const team = await getTeamDefenseStats(fnflTeams[0]);
    const team = await getKickerStats('nick-folk');
    console.log(team);
}

// startRun();

module.exports = { getKickerStats };
