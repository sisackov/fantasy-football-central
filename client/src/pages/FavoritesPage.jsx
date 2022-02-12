import { useEffect, useState } from 'react';
import { fetchPlayerById } from '../api/ffc-api';
import PlayerCard from '../components/PlayerCard';
import Row from 'react-bootstrap/Row';
import { PATH_SEARCH } from '../utils/constants';
import { useFavoritesProvider } from '../hooks/providers/SessionProvider';
import Loader from '../components/Loader';

function FavoritesPage() {
    const [players, setPlayers] = useState(null);
    const { favorites } = useFavoritesProvider();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
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

        if (favorites.length && !players) {
            fetchData();
        }
    }, [favorites, players]);

    const renderPlayerCards = () => {
        if (isLoading) return <Loader />;
        if (errorMsg)
            return <h6 className='text-center text-danger mt-5'>{errorMsg}</h6>;

        if (players && players.length) {
            return players.map((player) => {
                return <PlayerCard key={player._id} player={player} />;
            });
        }
        return null;
    };

    return (
        <div className='container mx-auto'>
            <div className='header text-center my-2'>
                <h1>Favorites</h1>
                {!players && (
                    <p>
                        You have no favorites. Select players in{' '}
                        <a href={PATH_SEARCH}>search list</a> and add them to
                        your favorites.
                    </p>
                )}
            </div>

            <Row className='m-4 d-flex-md justify-content-center'>
                {renderPlayerCards()}
            </Row>
        </div>
    );
}

export default FavoritesPage;
