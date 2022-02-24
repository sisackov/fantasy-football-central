import {useEffect, useState} from 'react';
import {fetchPlayerById} from '../api/ffc-api';
import PlayerCard from '../components/PlayerCard';
import Row from 'react-bootstrap/Row';
import {PATH_SEARCH} from '../utils/constants';
import Loader from '../components/Loader';
import {useSelector} from "react-redux";

const selectFavorites = state => state.favorites;

function FavoritesPage() {
    const [players, setPlayers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const favorites = useSelector(selectFavorites);

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetchData', favorites);
            setIsLoading(true);
            try {
                const res = await Promise.all(
                    favorites.map((id) => fetchPlayerById(id))
                );

                setPlayers(res);
                setIsLoading(false);
            } catch (e) {
                setErrorMsg(e.message);
                setIsLoading(false);
            }
        };

        if (!players) {
            fetchData();
        }
    }, [favorites, players]);

    const renderPlayerCards = () => {
        if (isLoading) return <Loader/>;
        if (errorMsg)
            return <h6 className='text-center text-danger mt-5'>{errorMsg}</h6>;

        if (players && players.length) {
            return players.map((player) => {
                return <PlayerCard key={player._id} player={player}/>;
            });
        }
        return null;
    };

    return (
        <div className='container mx-auto'>
            <div className='header text-center my-2'>
                <h1>Favorites</h1>
                {players && !players.length && (
                    <h6>
                        You have no favorites. Select players in{' '}
                        <a href={PATH_SEARCH}>search list</a> and add them to
                        your favorites.
                    </h6>
                )}
            </div>

            <Row className='m-4 d-flex-md justify-content-center'>
                {renderPlayerCards()}
            </Row>
        </div>
    );
}

export default FavoritesPage;
