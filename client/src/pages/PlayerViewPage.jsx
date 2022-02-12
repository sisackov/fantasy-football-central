import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLeagueAvgData, fetchQueriedPlayers } from '../api/ffc-api';
import PlayerCharts from '../components/PlayerCharts';
import usePlayerTable from '../hooks/usePlayerTable';
import { updateUserFavorites } from '../api/ffc-server';
import {
    useFavoritesProvider,
    useLeagueAvgProvider,
    useTokenProvider,
} from '../hooks/providers/SessionProvider';

function PlayerViewPage() {
    let { playerName } = useParams();
    const [data, setData] = useState(null);
    const { renderPlayerStatsTable, renderPlayerGamesTable } = usePlayerTable();

    const { token } = useTokenProvider();
    const { leagueAvg, setLeagueAvg } = useLeagueAvgProvider();
    const { favorites, setFavorites } = useFavoritesProvider();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchLeagueAvg = async () => {
            try {
                const fetchLgAvg = await fetchLeagueAvgData();
                setLeagueAvg(fetchLgAvg);
            } catch (e) {
                console.error(e.message);
            }
        };

        if (!leagueAvg.length) {
            fetchLeagueAvg();
        }
    }, [leagueAvg, setLeagueAvg]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchPlayer = await fetchQueriedPlayers(
                    `name=${playerName}`
                );
                setData(fetchPlayer[0]);
            } catch (e) {
                console.error(e.message);
            }
        };

        if (!data) {
            fetchData();
        }
    }, [playerName, data, leagueAvg]);

    useEffect(() => {
        if (data && favorites.length) {
            setIsFavorite(favorites.includes(data._id));
        }
    }, [data, favorites]);

    const handleFavoritesClick = async () => {
        const action = isFavorite ? 'remove' : 'add';
        const res = await updateUserFavorites(action, data._id);
        if (res) {
            setFavorites(res.favorites);
            setIsFavorite(!isFavorite);
        }
    };

    const renderFavoritesButton = () => {
        return (
            token && (
                <button
                    className={`btn shadow ${
                        isFavorite ? 'btn-warning' : 'btn-success'
                    } `}
                    onClick={handleFavoritesClick}
                >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            )
        );
    };

    const getTitleClassName = () => {
        return token
            ? 'header d-flex justify-content-around align-items-center py-3'
            : 'header d-flex justify-content-center align-items-center py-3';
    };

    return (
        <div className='container'>
            {data && (
                <>
                    <div className={getTitleClassName()}>
                        <img
                            // src={data.imageLink}
                            // src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png&w=350&h=254`}
                            src={`https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${data.espnId}.png&h=90&w=110&scale=crop`}
                            alt={data.name}
                        />
                        <h1 className={token ? '' : 'mx-5'}>{data.name}</h1>
                        {renderFavoritesButton()}
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
                        {leagueAvg.length && (
                            <div className='card'>
                                <div className='card-header text-center'>
                                    <h3>Vs. League Average</h3>
                                </div>
                                <PlayerCharts
                                    data={data}
                                    leagueAvg={leagueAvg.find(
                                        (lav) => lav.position === data.position
                                    )}
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
