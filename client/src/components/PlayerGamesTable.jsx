import { useCallback } from 'react';

function PlayerGamesTable({ position, games }) {
    const renderGameRowsQB = useCallback(() => {
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
    }, [games]);

    const renderGameRows = useCallback(() => {
        switch (position) {
            case 'QB':
                return renderGameRowsQB();
            default:
                return null;
        }
    }, [position, renderGameRowsQB]);

    const renderGamesTable = useCallback(() => {
        console.log(position);
        switch (position) {
            case 'QB':
                return (
                    <table className='table table-bordered table-success table-hover'>
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
                                <th scope='col' colSpan={5} align='center'>
                                    Def Pressure
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
                                <th scope='col'>FumL</th>
                                <th scope='col'>Sacks</th>
                                <th scope='col'>SackYds</th>
                            </tr>
                        </thead>
                        <tbody>{renderGameRows()}</tbody>
                    </table>
                );
            default:
                return <div></div>;
        }
    }, [position, renderGameRows]);

    return <div className='table-responsive'>{renderGamesTable()}</div>;
}

export default PlayerGamesTable;
