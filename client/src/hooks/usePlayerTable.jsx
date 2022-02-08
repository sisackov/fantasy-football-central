import { useCallback } from 'react';
import {
    POSITION_PK,
    POSITION_QB,
    POSITION_RB,
    POSITION_TE,
    POSITION_WR,
} from '../utils/constants';

function usePlayerTable() {
    const renderPlayerStatsHeader = useCallback((pos) => {
        switch (pos) {
            case POSITION_QB:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={1} rowSpan={2}>
                                Stats Type
                            </th>
                            <th colSpan={2} align='center'>
                                Score
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Passing
                            </th>
                            <th scope='col' colSpan={3} align='center'>
                                Rushing
                            </th>
                            <th scope='col' colSpan={3} align='center'>
                                Turnovers
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Sacks
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Fantasy</th>
                            <th scope='col'>QBR</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Comps</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Ints</th>
                            <th scope='col'>Fumb</th>
                            <th scope='col'>FumbL</th>
                            <th scope='col'>#</th>
                            <th scope='col'>Yds</th>
                        </tr>
                    </thead>
                );
            case POSITION_WR:
            case POSITION_TE:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={1} rowSpan={2}>
                                Stats Type
                            </th>
                            <th colSpan={1} rowSpan={2} align='center'>
                                Fantasy
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Receiving
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Rushing
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Fumbles
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Recs</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>#</th>
                            <th scope='col'>Lost</th>
                        </tr>
                    </thead>
                );
            case POSITION_RB:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={1} rowSpan={2}>
                                Stats Type
                            </th>
                            <th colSpan={1} rowSpan={2} align='center'>
                                Fantasy
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Rushing
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Receiving
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Fumbles
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>Recs</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>#</th>
                            <th scope='col'>Lost</th>
                        </tr>
                    </thead>
                );
            case POSITION_PK:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={1} rowSpan={2}>
                                Stats Type
                            </th>
                            <th scope='col' colSpan={7} align='center'>
                                Field Goals
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Extra Points
                            </th>
                            <th colSpan={1} rowSpan={2} align='center'>
                                Fantasy
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Made</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>{`19 >`}</th>
                            <th scope='col'>{`29 >`}</th>
                            <th scope='col'>{`39 >`}</th>
                            <th scope='col'>{`49 >`}</th>
                            <th scope='col'>{`50 +`}</th>
                            <th scope='col'>Made</th>
                            <th scope='col'>Atts</th>
                        </tr>
                    </thead>
                );
            default:
                return null;
        }
    }, []);

    const renderPlayerStatsBody = useCallback((pos, avgs, tots) => {
        switch (pos) {
            case POSITION_QB:
                return (
                    <tbody>
                        <tr>
                            <th scope='row'>Average</th>
                            <td>{avgs.fantasyScore}</td>
                            <td>{avgs.qbRating}</td>
                            <td>{avgs.passingAttempts}</td>
                            <td>{avgs.completions}</td>
                            <td>{avgs.passingYards}</td>
                            <td>{avgs.passingTouchdowns}</td>
                            <td>{avgs.rushingAttempts}</td>
                            <td>{avgs.rushingYards}</td>
                            <td>{avgs.rushingTouchdowns}</td>
                            <td>{avgs.interceptions}</td>
                            <td>{avgs.fumbles}</td>
                            <td>{avgs.fumblesLost}</td>
                            <td>{avgs.sacks}</td>
                            <td>{avgs.sackYards}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Total</th>
                            <td>{tots.fantasyScore}</td>
                            <td>{tots.qbRating}</td>
                            <td>{tots.passingAttempts}</td>
                            <td>{tots.completions}</td>
                            <td>{tots.passingYards}</td>
                            <td>{tots.passingTouchdowns}</td>
                            <td>{tots.rushingAttempts}</td>
                            <td>{tots.rushingYards}</td>
                            <td>{tots.rushingTouchdowns}</td>
                            <td>{tots.interceptions}</td>
                            <td>{tots.fumbles}</td>
                            <td>{tots.fumblesLost}</td>
                            <td>{tots.sacks}</td>
                            <td>{tots.sackYards}</td>
                        </tr>
                    </tbody>
                );
            case POSITION_WR:
            case POSITION_TE:
                return (
                    <tbody>
                        <tr>
                            <th scope='row'>Average</th>
                            <td>{avgs.fantasyScore}</td>
                            <td>{avgs.receptions}</td>
                            <td>{avgs.receivingYards}</td>
                            <td>{avgs.receivingTouchdowns}</td>
                            <td>{avgs.longestReception}</td>
                            <td>{avgs.rushingAttempts}</td>
                            <td>{avgs.rushingYards}</td>
                            <td>{avgs.rushingTouchdowns}</td>
                            <td>{avgs.longestRush}</td>
                            <td>{avgs.fumbles}</td>
                            <td>{avgs.fumblesLost}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Total</th>
                            <td>{tots.fantasyScore}</td>
                            <td>{tots.receptions}</td>
                            <td>{tots.receivingYards}</td>
                            <td>{tots.receivingTouchdowns}</td>
                            <td>{tots.longestReception}</td>
                            <td>{tots.rushingAttempts}</td>
                            <td>{tots.rushingYards}</td>
                            <td>{tots.rushingTouchdowns}</td>
                            <td>{tots.longestRush}</td>
                            <td>{tots.fumbles}</td>
                            <td>{tots.fumblesLost}</td>
                        </tr>
                    </tbody>
                );
            case POSITION_RB:
                return (
                    <tbody>
                        <tr>
                            <th scope='row'>Average</th>
                            <td>{avgs.fantasyScore}</td>
                            <td>{avgs.rushingAttempts}</td>
                            <td>{avgs.rushingYards}</td>
                            <td>{avgs.rushingTouchdowns}</td>
                            <td>{avgs.longestRush}</td>
                            <td>{avgs.receptions}</td>
                            <td>{avgs.receivingYards}</td>
                            <td>{avgs.receivingTouchdowns}</td>
                            <td>{avgs.longestReception}</td>
                            <td>{avgs.fumbles}</td>
                            <td>{avgs.fumblesLost}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Total</th>
                            <td>{tots.fantasyScore}</td>
                            <td>{tots.rushingAttempts}</td>
                            <td>{tots.rushingYards}</td>
                            <td>{tots.rushingTouchdowns}</td>
                            <td>{tots.longestRush}</td>
                            <td>{tots.receptions}</td>
                            <td>{tots.receivingYards}</td>
                            <td>{tots.receivingTouchdowns}</td>
                            <td>{tots.longestReception}</td>
                            <td>{tots.fumbles}</td>
                            <td>{tots.fumblesLost}</td>
                        </tr>
                    </tbody>
                );
            case POSITION_PK:
                return (
                    <tbody>
                        <tr>
                            <th scope='row'>Average</th>
                            <td>{avgs.fieldGoals}</td>
                            <td>{avgs.fieldGoalAttempts}</td>
                            <td>{avgs.underNineteen}</td>
                            <td>{avgs.underTwentyNine}</td>
                            <td>{avgs.underThirtyNine}</td>
                            <td>{avgs.underFortyNine}</td>
                            <td>{avgs.fiftyYardsPlus}</td>
                            <td>{avgs.extraPoints}</td>
                            <td>{avgs.extraPointAts}</td>
                            <td>{avgs.fantasyScore}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Total</th>
                            <td>{tots.fieldGoals}</td>
                            <td>{tots.fieldGoalAttempts}</td>
                            <td>{tots.underNineteen}</td>
                            <td>{tots.underTwentyNine}</td>
                            <td>{tots.underThirtyNine}</td>
                            <td>{tots.underFortyNine}</td>
                            <td>{tots.fiftyYardsPlus}</td>
                            <td>{tots.extraPoints}</td>
                            <td>{tots.extraPointAts}</td>
                            <td>{tots.fantasyScore}</td>
                        </tr>
                    </tbody>
                );
            default:
                return null;
        }
    }, []);

    const renderPlayerStatsTable = useCallback(
        (position, totals, averages) => {
            return (
                <table className='table table-warning table-striped table-bordered table-hover'>
                    {renderPlayerStatsHeader(position)}
                    {renderPlayerStatsBody(position, averages, totals)}
                </table>
            );
        },
        [renderPlayerStatsHeader, renderPlayerStatsBody]
    );

    const renderGameRowsQB = useCallback((games) => {
        let hadByeWeek = false;
        const rows = [];
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            if (!hadByeWeek && +game.week !== i + 1) {
                hadByeWeek = true;
                rows.push(
                    <tr key={`bye-week-${i}`}>
                        <th scope='row'>{i + 1}</th>
                        <td>Bye Week</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                );
            }
            rows.push(
                <tr key={game.week}>
                    <th scope='row'>{game.week}</th>
                    <td>{game.opponent}</td>
                    <td>{game.result}</td>
                    <td>{game.fantasyScore}</td>
                    <td>{game.qbRating}</td>
                    <td>{game.completions}</td>
                    <td>{game.passingAttempts}</td>
                    <td>{game.passingYards}</td>
                    <td>{game.passingTouchdowns}</td>
                    <td>{game.rushingAttempts}</td>
                    <td>{game.rushingYards}</td>
                    <td>{game.rushingTouchdowns}</td>
                    <td>{game.interceptions}</td>
                    <td>{game.fumbles}</td>
                    <td>{game.fumblesLost}</td>
                    <td>{game.sacks}</td>
                    <td>{game.sackYards}</td>
                </tr>
            );
        }
        return rows;
    }, []);

    const renderGameRowsSlot = useCallback((games) => {
        let hadByeWeek = false;
        const rows = [];
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            if (!hadByeWeek && +game.week !== i + 1) {
                hadByeWeek = true;
                rows.push(
                    <tr key={`bye-week-${i}`}>
                        <th scope='row'>{i + 1}</th>
                        <td>Bye Week</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                );
            }
            rows.push(
                <tr key={game.week}>
                    <th scope='row'>{game.week}</th>
                    <td>{game.opponent}</td>
                    <td>{game.result}</td>
                    <td>{game.fantasyScore}</td>
                    <td>{game.receptions}</td>
                    <td>{game.receivingYards}</td>
                    <td>{game.receivingTouchdowns}</td>
                    <td>{game.longestReception}</td>
                    <td>{game.rushingAttempts}</td>
                    <td>{game.rushingYards}</td>
                    <td>{game.rushingTouchdowns}</td>
                    <td>{game.longestRush}</td>
                    <td>{game.fumbles}</td>
                    <td>{game.fumblesLost}</td>
                </tr>
            );
        }
        return rows;
    }, []);

    const renderGameRowsRB = useCallback((games) => {
        let hadByeWeek = false;
        const rows = [];
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            if (!hadByeWeek && +game.week !== i + 1) {
                hadByeWeek = true;
                rows.push(
                    <tr key={`bye-week-${i}`}>
                        <th scope='row'>{i + 1}</th>
                        <td>Bye Week</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                );
            }
            rows.push(
                <tr key={game.week}>
                    <th scope='row'>{game.week}</th>
                    <td>{game.opponent}</td>
                    <td>{game.result}</td>
                    <td>{game.fantasyScore}</td>
                    <td>{game.rushingAttempts}</td>
                    <td>{game.rushingYards}</td>
                    <td>{game.rushingTouchdowns}</td>
                    <td>{game.longestRush}</td>
                    <td>{game.receptions}</td>
                    <td>{game.receivingYards}</td>
                    <td>{game.receivingTouchdowns}</td>
                    <td>{game.longestReception}</td>
                    <td>{game.fumbles}</td>
                    <td>{game.fumblesLost}</td>
                </tr>
            );
        }
        return rows;
    }, []);

    const renderGameRowsPK = useCallback((games) => {
        return games.map((game) => {
            return (
                <tr key={game.week}>
                    <th scope='row'>{game.week}</th>
                    <td>{game.opponent}</td>
                    <td>{game.result}</td>
                    <td>{game.fieldGoals}</td>
                    <td>{game.fieldGoalAttempts}</td>
                    <td>{game.underNineteen}</td>
                    <td>{game.underTwentyNine}</td>
                    <td>{game.underThirtyNine}</td>
                    <td>{game.underFortyNine}</td>
                    <td>{game.fiftyYardsPlus}</td>
                    <td>{game.extraPoints}</td>
                    <td>{game.extraPointAts}</td>
                    <td>{game.fantasyScore}</td>
                </tr>
            );
        });
    }, []);

    const renderGameRows = useCallback(
        (position, games) => {
            switch (position) {
                case POSITION_QB:
                    return renderGameRowsQB(games);
                case POSITION_WR:
                    return renderGameRowsSlot(games);
                case POSITION_RB:
                    return renderGameRowsRB(games);
                case POSITION_TE:
                    return renderGameRowsSlot(games);
                case POSITION_PK:
                    return renderGameRowsPK(games);
                default:
                    return null;
            }
        },
        [
            renderGameRowsQB,
            renderGameRowsSlot,
            renderGameRowsRB,
            renderGameRowsPK,
        ]
    );

    const renderGameTableHeaders = useCallback((position) => {
        switch (position) {
            case POSITION_QB:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={3}>
                                Game
                            </th>
                            <th colSpan={2} align='center'>
                                Eval
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Passing
                            </th>
                            <th scope='col' colSpan={3} align='center'>
                                Rushing
                            </th>
                            <th scope='col' colSpan={3} align='center'>
                                Turnovers
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Sacks
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Week</th>
                            <th scope='col'>Opp</th>
                            <th scope='col'>Result</th>
                            <th scope='col'>Fantasy</th>
                            <th scope='col'>QBR</th>
                            <th scope='col'>Comp</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Ints</th>
                            <th scope='col'>Fumb</th>
                            <th scope='col'>FumbL</th>
                            <th scope='col'>#</th>
                            <th scope='col'>Yds</th>
                        </tr>
                    </thead>
                );
            case POSITION_WR:
            case POSITION_TE:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={3}>
                                Game
                            </th>
                            <th colSpan={1} rowSpan={2} align='center'>
                                Fantasy
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Receiving
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Rushing
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Fumbles
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Week</th>
                            <th scope='col'>Opp</th>
                            <th scope='col'>Result</th>
                            <th scope='col'>Recs</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>#</th>
                            <th scope='col'>Lost</th>
                        </tr>
                    </thead>
                );
            case POSITION_RB:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={3}>
                                Game
                            </th>
                            <th colSpan={1} rowSpan={2} align='center'>
                                Fantasy
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Rushing
                            </th>
                            <th scope='col' colSpan={4} align='center'>
                                Receiving
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Fumbles
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Week</th>
                            <th scope='col'>Opp</th>
                            <th scope='col'>Result</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>Recs</th>
                            <th scope='col'>Yds</th>
                            <th scope='col'>TDs</th>
                            <th scope='col'>Longest</th>
                            <th scope='col'>#</th>
                            <th scope='col'>Lost</th>
                        </tr>
                    </thead>
                );
            case POSITION_PK:
                return (
                    <thead>
                        <tr className='text-center'>
                            <th scope='col' colSpan={3}>
                                Game
                            </th>
                            <th scope='col' colSpan={7} align='center'>
                                Field Goals
                            </th>
                            <th scope='col' colSpan={2} align='center'>
                                Extra Points
                            </th>
                            <th colSpan={1} rowSpan={2} align='center'>
                                Fantasy
                            </th>
                        </tr>
                        <tr>
                            <th scope='col'>Week</th>
                            <th scope='col'>Opp</th>
                            <th scope='col'>Result</th>
                            <th scope='col'>Made</th>
                            <th scope='col'>Atts</th>
                            <th scope='col'>{`19 >`}</th>
                            <th scope='col'>{`29 >`}</th>
                            <th scope='col'>{`39 >`}</th>
                            <th scope='col'>{`49 >`}</th>
                            <th scope='col'>{`50 +`}</th>
                            <th scope='col'>Made</th>
                            <th scope='col'>Atts</th>
                        </tr>
                    </thead>
                );
            default:
                return null;
        }
    }, []);

    const renderPlayerGamesTable = useCallback(
        (position, games) => {
            return (
                <table className='table table-bordered table-success table-hover'>
                    {renderGameTableHeaders(position)}
                    <tbody>{renderGameRows(position, games)}</tbody>
                </table>
            );
        },
        [renderGameRows, renderGameTableHeaders]
    );

    return { renderPlayerStatsTable, renderPlayerGamesTable };
}

export default usePlayerTable;
