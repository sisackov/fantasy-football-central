const puppeteer = require('puppeteer');
const {
    PLAYER_DATA_TABLE_COLUMNS,
    DEFENSE_TABLE_COLUMNS,
    QB_TABLE_COLUMNS,
    WR_TABLE_COLUMNS,
    RB_TABLE_COLUMNS,
    KICKER_TABLE_COLUMNS,
    POS_QUARTERBACK,
    POS_WIDE_RECEIVER,
    POS_TIGHT_END,
    POS_RUNNING_BACK,
    POS_KICKER,
    NEEDED_OFFENSIVE_POSITIONS,
} = require('./constants');

const getTableContent = async (page, selector) => {
    return page.$$eval(selector, (trs) =>
        trs.map((tr) => {
            const tds = [...tr.querySelectorAll('td')];
            return tds.map((td) => td.textContent || '');
        })
    );
};

const getTableColumns = (playerPosition) => {
    switch (playerPosition) {
        case POS_QUARTERBACK:
            return QB_TABLE_COLUMNS;
        case POS_WIDE_RECEIVER:
        case POS_TIGHT_END:
            return WR_TABLE_COLUMNS;
        case POS_RUNNING_BACK:
            return RB_TABLE_COLUMNS;
        case POS_KICKER:
            return KICKER_TABLE_COLUMNS;
        default:
            return QB_TABLE_COLUMNS;
    }
};

const getDataFromTableContent = (tableContent, tableColumns) => {
    return tableContent.map((row) => {
        const rowData = {};
        row.forEach((cell, index) => {
            if (index > 2) {
                rowData[tableColumns[index]] = isNaN(cell) ? 0 : Number(cell);
            } else {
                rowData[tableColumns[index]] = cell;
            }
        });
        // rowData.year = 2021;
        return rowData;
    });
};

const getPlayerStatsNFL = async (playerName, playerPosition) => {
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

        const tableColumns = getTableColumns(playerPosition);

        const games = getDataFromTableContent(tableContent, tableColumns);
        return { year: 2021, games };
    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
        console.log('done');
    }
    return {};
};
// getPlayerStatsNFL('tom-brady', 'QB');
// getPlayerStatsNFL('travis-kelce', 'TE');
// getPlayerStatsNFL('dalvin-cook', 'RB');
// getPlayerStatsNFL('mike-evans', 'WR');

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
                            : '-1'; //!player without a number

                        return `${linkContent}__${spanContent}`;
                    }
                    return td.textContent;
                } catch (err) {
                    console.error(err.message);
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

const getPlayersData = async (teamName) => {
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
};

const getTeamDefenseStats = async (team) => {
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
                rowData[tableColumns[index]] = isNaN(cell) ? '0' : cell;
            } else {
                rowData[tableColumns[index]] = cell;
            }
        });
        rowData.year = 2021;
        return rowData;
    });

    await browser.close();
    return data;
};
// getTeamDefenseStats(FNFL_TEAM_IDS[0]);

const getKickerStats = async (playerName) => {
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

        const tableColumns = getTableColumns('PK');

        return getDataFromTableContent(tableContent, tableColumns).filter(
            (row) => row.opponent !== 'BYE Week'
        );
    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
    return [];
};
//getKickerStats('nick-folk');

module.exports = {
    getKickerStats,
    getPlayersData,
    getPlayerStatsNFL,
    getTeamDefenseStats,
};
