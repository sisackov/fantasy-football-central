import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQueriedPlayers } from '../api/ffc-api';
import Card from 'react-bootstrap/Card';
import C3Chart from '../components/C3Chart';
import PlayerStatsTable from '../components/PlayerStatsTable';

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
                <>
                    <div className='header d-flex justify-content-center align-items-center py-3'>
                        <img
                            // src={data.imageLink}
                            // src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png&w=350&h=254`}
                            src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${data.espnId}.png&h=80&w=110&scale=crop`}
                            alt={data.name}
                        />
                        <h1>{data.name}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h3>General Info</h3>
                        </div>
                        <div className='card-body'>
                            <dl className='row'>
                                <dt className='col-3'>Position:</dt>
                                <dd className='col-3'>{data.position}</dd>
                                <dt className='col-3'>Team:</dt>
                                <dd className='col-3'>{data.team}</dd>
                                <dt className='col-3'>Age:</dt>
                                <dd className='col-3'>{data.age}</dd>
                                <dt className='col-3'>Experience:</dt>
                                <dd className='col-3'>
                                    {data.experience} years
                                </dd>
                                <dt className='col-3'>Height:</dt>
                                <dd className='col-3'>{data.height}</dd>
                                <dt className='col-3'>Weight:</dt>
                                <dd className='col-3'>{data.weight}</dd>
                                <dt className='col-3'>College:</dt>
                                <dd className='col-3'>{data.college}</dd>
                                <dt className='col-3'>Games Played:</dt>
                                <dd className='col-3'>
                                    {data.stats[0].games.length}
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div className='row my-2'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'>
                                    Stats
                                </Card.Title>

                                <PlayerStatsTable
                                    position={data.position}
                                    totals={data.stats[0].totals}
                                    averages={data.stats[0].averages}
                                />
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
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h3>Vs. League Average</h3>
                        </div>
                        <div className='card-body'>
                            <div className='col'>
                                <h3 className='text-center my-2'>Total</h3>
                                <C3Chart
                                    playerName={data.name}
                                    stats={data.stats[0].totals}
                                    chartType='total'
                                    chartId={data.espnId}
                                />
                            </div>
                            <div className='col'>
                                <h3 className='text-center my-3'>Average</h3>
                                <C3Chart
                                    playerName={data.name}
                                    stats={data.stats[0].averages}
                                    chartType='average'
                                    chartId={data.espnId}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default PlayerViewPage;
