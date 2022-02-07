import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQueriedPlayers } from '../api/ffc-api';
import Card from 'react-bootstrap/Card';

function PlayerViewPage() {
    let { playerName } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchQueriedPlayers(`name=${playerName}`);
                console.log(res[0]);
                setData(res[0]);
            } catch (e) {
                // setErrorMsg(e.message);
                console.error(e.message);
            }
        };

        if (!data) {
            fetchData();
        }
    }, [playerName, data]);

    const renderStatsTable = useCallback(() => {
        const { totals, averages } = data.stats[0];
        switch (data.position) {
            case 'QB':
                return (
                    <table className='table table-danger table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Stats Type</th>
                                <th scope='col'>Fantasy Score</th>
                                <th scope='col'>Passing Attempts</th>
                                <th scope='col'>Completions</th>
                                <th scope='col'>Passing Yards</th>
                                <th scope='col'>Passing TDs</th>
                                <th scope='col'>Interceptions</th>
                                <th scope='col'>Fumbles</th>
                                <th scope='col'>Fumbles Lost</th>
                                <th scope='col'>QB Rating</th>
                                <th scope='col'>Rushing Attempts</th>
                                <th scope='col'>Rushing Yards</th>
                                <th scope='col'>Rushing TDs</th>
                                <th scope='col'>Sacks</th>
                                <th scope='col'>Sack Yards</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>Average</th>
                                <td>{averages.fantasyScore}</td>
                                <td>{averages.passingAttempts}</td>
                                <td>{averages.completions}</td>
                                <td>{averages.passingYards}</td>
                                <td>{averages.passingTouchdowns}</td>
                                <td>{averages.interceptions}</td>
                                <td>{averages.fumbles}</td>
                                <td>{averages.fumblesLost}</td>
                                <td>{averages.qbRating}</td>
                                <td>{averages.rushingAttempts}</td>
                                <td>{averages.rushingYards}</td>
                                <td>{averages.rushingTouchdowns}</td>
                                <td>{averages.sacks}</td>
                                <td>{averages.sackYards}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Total</th>
                                <td>{totals.fantasyScore}</td>
                                <td>{totals.passingAttempts}</td>
                                <td>{totals.completions}</td>
                                <td>{totals.passingYards}</td>
                                <td>{totals.passingTouchdowns}</td>
                                <td>{totals.interceptions}</td>
                                <td>{totals.fumbles}</td>
                                <td>{totals.fumblesLost}</td>
                                <td>{totals.qbRating}</td>
                                <td>{totals.rushingAttempts}</td>
                                <td>{totals.rushingYards}</td>
                                <td>{totals.rushingTouchdowns}</td>
                                <td>{totals.sacks}</td>
                                <td>{totals.sackYards}</td>
                            </tr>
                        </tbody>
                    </table>
                );
            default:
                return null;
        }
    }, [data]);

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
                    <td>{game.completions}</td>
                    <td>{game.passingAttempts}</td>
                    <td>{game.passingYards}</td>
                    <td>{game.passingTouchdowns}</td>
                    <td>{game.qbRating}</td>
                    <td>{game.interceptions}</td>
                    <td>{game.fumbles}</td>
                    <td>{game.fumblesLost}</td>
                    <td>{game.rushingAttempts}</td>
                    <td>{game.rushingYards}</td>
                    <td>{game.rushingTouchdowns}</td>
                    <td>{game.sacks}</td>
                    <td>{game.sackYards}</td>
                </tr>
            );
        }
        return rows;
    }, []);

    const renderGameRows = useCallback(
        (games, position) => {
            switch (position) {
                case 'QB':
                    return renderGameRowsQB(games);
                default:
                    return null;
            }
        },
        [renderGameRowsQB]
    );

    const renderGamesTable = useCallback(() => {
        const { games } = data.stats[0];
        switch (data.position) {
            case 'QB':
                return (
                    <table className='table table-success table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Week</th>
                                <th scope='col'>Opp</th>
                                <th scope='col'>Result</th>
                                <th scope='col'>Fantasy</th>
                                <th scope='col'>Comp</th>
                                <th scope='col'>Att</th>
                                <th scope='col'>Pass Yds</th>
                                <th scope='col'>Pass TDs</th>
                                <th scope='col'>QBR</th>
                                <th scope='col'>Ints</th>
                                <th scope='col'>Fumb</th>
                                <th scope='col'>FumL</th>
                                <th scope='col'>Rush Atts</th>
                                <th scope='col'>Rush Yds</th>
                                <th scope='col'>Rush TDs</th>
                                <th scope='col'>Sacks</th>
                                <th scope='col'>SackYds</th>
                            </tr>
                        </thead>
                        <tbody>{renderGameRows(games, data.position)}</tbody>
                    </table>
                );
            default:
                return null;
        }
    }, [data, renderGameRows]);

    return (
        <div className='container'>
            {data && (
                <div>
                    <h1>{data.name}</h1>
                    <div>
                        <img src={data.imageLink} alt={data.name} />
                    </div>

                    <div className='row my-2'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    Stats
                                </Card.Title>

                                <div className='table-responsive'>
                                    {renderStatsTable()}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='row my-2'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    Games
                                </Card.Title>

                                <div className='table-responsive'>
                                    {renderGamesTable()}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlayerViewPage;
