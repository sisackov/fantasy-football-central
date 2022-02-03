import { useState, useEffect } from 'react';
import { fetchPlayerById, fetchQueriedPlayers } from '../api/ffc-api';

function HomePage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // const res = await fetchPlayerById('61fa32ce566c968ff3449d74');
                const res = await fetchQueriedPlayers(
                    'position=QB&limit=10&sort=avgFantasy&order=desc'
                );
                setData(res);
            } catch (e) {
                setErrorMsg(e.message);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const renderPage = () => {
        if (isLoading) return <div>Loading...</div>;
        if (errorMsg) return <div className='error-message'>{errorMsg}</div>;
        if (data.length)
            return data.map((player, index) => {
                return (
                    <div key={index}>
                        <h3>{player.name}</h3>
                        <p>{player.position}</p>
                        <p>{player.team}</p>
                        <p>{player.number}</p>
                        <p>{player.height}</p>
                        <p>{player.weight}</p>
                        <p>{player.age}</p>
                        <p>{player.college}</p>
                    </div>
                );
            });
    };

    return <>{renderPage()}</>;
}

export default HomePage;
