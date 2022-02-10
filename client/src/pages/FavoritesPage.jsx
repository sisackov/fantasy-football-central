import { useEffect, useState } from 'react';
import { fetchPlayerById } from '../api/ffc-api';
import PlayerCard from '../components/PlayerCard';
import Row from 'react-bootstrap/Row';
import { PATH_SEARCH } from '../utils/constants';

function FavoritesPage() {
    //TODO - single call to get all players
    const [playerIDs, setPlayerIDs] = useState(null);
    const [players, setPlayers] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch('/api/favorites');
            // const json = await response.json();
            setPlayerIDs([
                '61ff8e14448b3c2d3ec1d555',
                '61ff8e15448b3c2d3ec1d567',
            ]);
        };
        if (!playerIDs) {
            fetchData();
        }
    }, [playerIDs]);

    useEffect(() => {
        const fetchData = async () => {
            // const res = await fetch('/api/favorites');
            const res = await Promise.all(
                playerIDs.map((id) => fetchPlayerById(id))
            );
            setPlayers(res);
        };
        if (playerIDs && playerIDs.length && !players) {
            fetchData();
        }
    }, [playerIDs, players]);

    const renderPlayerCards = () => {
        if (players && players.length) {
            // console.log('players', players);
            return players.map((player) => {
                return <PlayerCard key={player._id} player={player} />;
            });
        }
        return null;
    };

    const renderPage = () => {
        // if (isLoading) return <div>Loading...</div>;
        // if (errorMsg) return <div className='error-message'>{errorMsg}</div>;

        return (
            <div className='container mx-auto'>
                <div className='header text-center my-2'>
                    <h1>Favorites</h1>
                    {playerIDs && (
                        <p>
                            You have no favorites. Select players in{' '}
                            <a href={PATH_SEARCH}>search list</a> and add them
                            to your favorites.
                        </p>
                    )}
                </div>

                <Row className='m-4 d-flex-md justify-content-center'>
                    {renderPlayerCards()}
                </Row>
            </div>
        );
    };

    return <>{renderPage()}</>;
}

export default FavoritesPage;
