import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLeagueAvgByPosition, fetchQueriedPlayers } from '../api/ffc-api';
import Card from 'react-bootstrap/Card';
import PlayerStatsTable from '../components/PlayerStatsTable';
import PlayerGamesTable from '../components/PlayerGamesTable';
import PlayerCharts from '../components/PlayerCharts';

function PlayerViewPage() {
    let { playerName } = useParams();
    const [data, setData] = useState(null);
    const [leagueAvg, setLeagueAvg] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await fetchQueriedPlayers(`name=${playerName}`);
                const fetchPlayer = fetchQueriedPlayers(`name=${playerName}`);
                const fetchAvg = fetchLeagueAvgByPosition('QB'); //todo: make this dynamic
                let responses = await Promise.all([fetchPlayer, fetchAvg]);
                console.log('gggg', responses[1]);
                setData(responses[0][0]);
                setLeagueAvg(responses[1][0]);
            } catch (e) {
                // setErrorMsg(e.message);
                console.error(e.message);
            }
        };

        if (!data) {
            fetchData();
        }
    }, [playerName, data]);

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

                                <PlayerGamesTable
                                    position={data.position}
                                    games={data.stats[0].games}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h3>Vs. League Average</h3>
                        </div>
                        <PlayerCharts data={data} leagueAvg={leagueAvg} />
                    </div>
                </>
            )}
        </div>
    );
}

export default PlayerViewPage;
