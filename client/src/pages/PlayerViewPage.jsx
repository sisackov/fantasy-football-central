import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLeagueAvgData, fetchQueriedPlayers } from '../api/ffc-api';
import PlayerCharts from '../components/PlayerCharts';
import { LS_LEAGUE_AVG_KEY, LS_PLAYER_KEY } from '../utils/constants';
import usePlayerTable from '../hooks/usePlayerTable';

function PlayerViewPage() {
    let { playerName } = useParams();
    const [data, setData] = useState(null);
    const [leagueAvg, setLeagueAvg] = useState(null);
    const { renderPlayerStatsTable, renderPlayerGamesTable } = usePlayerTable();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await fetchQueriedPlayers(`name=${playerName}`);
                let player = localStorage.getItem(LS_PLAYER_KEY);
                if (!player) {
                    console.log('fetching player');
                    const fetchPlayer = await fetchQueriedPlayers(
                        `name=${playerName}`
                    );
                    player = fetchPlayer[0];
                } else {
                    player = JSON.parse(player);
                }
                console.log('playerPage', player);
                setData(player);
                let leagueAvgData = localStorage.getItem(LS_LEAGUE_AVG_KEY);
                if (!leagueAvgData) {
                    console.log('fetching league avg');
                    const fetchAvg = await fetchLeagueAvgData();
                    leagueAvgData = fetchAvg;
                    localStorage.setItem(
                        LS_LEAGUE_AVG_KEY,
                        JSON.stringify(fetchAvg)
                    );
                } else {
                    leagueAvgData = JSON.parse(leagueAvgData);
                }
                setLeagueAvg(
                    leagueAvgData.find((lv) => lv.position === player.position)
                );
                // const fetchPlayer = fetchQueriedPlayers(`name=${playerName}`);
                // const fetchAvg = fetchLeagueAvgByPosition('QB');
                // let responses = await Promise.all([fetchPlayer, fetchAvg]);
                // console.log('gggg', responses[1]);
                // setData(responses[0][0]);
                // setLeagueAvg(responses[1][0]);
            } catch (e) {
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

                        <div className='card-header text-center'>
                            <h3>Summary</h3>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                                {renderPlayerStatsTable(
                                    data.position,
                                    data.stats[0].totals,
                                    data.stats[0].averages
                                )}
                            </div>
                        </div>
                        <div className='card-header text-center'>
                            <h3>Game Log</h3>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                                {renderPlayerGamesTable(
                                    data.position,
                                    data.stats[0].games
                                )}
                            </div>
                        </div>
                        {leagueAvg && (
                            <div className='card'>
                                <div className='card-header text-center'>
                                    <h3>Vs. League Average</h3>
                                </div>
                                <PlayerCharts
                                    data={data}
                                    leagueAvg={leagueAvg}
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default PlayerViewPage;
