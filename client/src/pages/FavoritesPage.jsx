import { useEffect, useState } from 'react';
import { fetchPlayerById } from '../api/ffc-api';
import PlayerCard from '../components/PlayerCard';
import Row from 'react-bootstrap/Row';
import { LS_FAVORITES_KEY, PATH_SEARCH } from '../utils/constants';
import { useFavoritesProvider } from '../hooks/providers/SessionProvider';

function FavoritesPage() {
    //TODO - single call to get all players
    const [playerIDs, setPlayerIDs] = useState(null);
    const [players, setPlayers] = useState(null);
    const [favorites, setFavorites] = useFavoritesProvider();
    // const [isLoading, setIsLoading] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await Promise.all(
                favorites.map((id) => fetchPlayerById(id))
            );
            console.log('fetching players', res);

            setPlayers(res);
        };
        if (favorites.length && !players) {
            fetchData();
        }
    }, [favorites, players]);

    const renderPlayerCards = () => {
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
