import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLeagueAvgData, fetchQueriedPlayers } from '../api/ffc-api';
import PlayerCharts from '../components/PlayerCharts';
import { LS_FAVORITES_KEY, LS_LEAGUE_AVG_KEY } from '../utils/constants';
import usePlayerTable from '../hooks/usePlayerTable';
import { updateUserFavorites } from '../api/ffc-server';

function PlayerViewPage() {
    let { playerName } = useParams();
    const [data, setData] = useState(null);
    const [leagueAvg, setLeagueAvg] = useState(null);
    const { renderPlayerStatsTable, renderPlayerGamesTable } = usePlayerTable();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // localStorage.setItem(LS_FAVORITES_KEY, [
                //     '61ff8e14448b3c2d3ec1d555',
                //     '61ff8e15448b3c2d3ec1d567',
                // ]);
                // const res = await fetchQueriedPlayers(`name=${playerName}`);
                let favs = localStorage.getItem(LS_FAVORITES_KEY) || [];
                console.log('favs', favs);

                console.log('fetching player');
                const fetchPlayer = await fetchQueriedPlayers(
                    `name=${playerName}`
                );
                const player = fetchPlayer[0];
                setData(player);

                console.log(player._id);
                setIsFavorite(favs.includes(player._id));

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
            } catch (e) {
                console.error(e.message);
            }
        };

        if (!data) {
            fetchData();
        }
    }, [playerName, data]);

    const handleFavoritesClick = async () => {
        const res = await updateUserFavorites(!isFavorite);
        if (res) {
            setIsFavorite(!isFavorite);
        }
    };

    return (
        <div className='container'>
            {data && (
                <>
                    <div className='header d-flex justify-content-around align-items-center py-3'>
                        <img
                            // src={data.imageLink}
                            // src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png&w=350&h=254`}
                            src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${data.espnId}.png&h=80&w=110&scale=crop`}
                            alt={data.name}
                        />
                        <h1>{data.name}</h1>
                        <button
                            className={`btn shadow ${
                                isFavorite ? 'btn-warning' : 'btn-success'
                            } `}
                            onClick={() => handleFavoritesClick}
                        >
                            {isFavorite
                                ? 'Remove from Favorites'
                                : 'Add to Favorites'}
                        </button>
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
                                    {`${data.experience} ${
                                        isNaN(data.experience) ? '' : 'years'
                                    }`}
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
