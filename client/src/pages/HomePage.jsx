import { useEffect, useState } from 'react';
import { fetchQueriedPlayers } from '../api/ffc-api';
import Loader from '../components/Loader';
import TableCard from '../components/TableCard';
import {
    POSITION_PK,
    POSITION_QB,
    POSITION_RB,
    POSITION_TE,
    POSITION_WR,
} from '../utils/constants';

function HomePage() {
    //TODO - single call to get all players
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await Promise.all([
                    fetchQueriedPlayers(
                        `position=${POSITION_QB}&sort=avgFantasy&order=desc&limit=10`
                    ),
                    fetchQueriedPlayers(
                        `position=${POSITION_WR}&sort=avgFantasy&order=desc&limit=10`
                    ),
                    fetchQueriedPlayers(
                        `position=${POSITION_RB}&sort=avgFantasy&order=desc&limit=10`
                    ),
                    fetchQueriedPlayers(
                        `position=${POSITION_TE}&sort=avgFantasy&order=desc&limit=10`
                    ),
                    fetchQueriedPlayers(
                        `position=${POSITION_PK}&sort=avgFantasy&order=desc&limit=10`
                    ),
                ]);
                // console.log('fetching players', res);
                setData(res);
            } catch (err) {
                setErrorMsg(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (!data.length) {
            fetchData();
        }
    }, [data]);

    const renderPage = () => {
        if (isLoading) return <Loader />;
        if (errorMsg)
            return <h6 className='text-center text-danger mt-5'>{errorMsg}</h6>;

        return (
            data.length && (
                <div className='container mx-auto'>
                    <div className='row my-3 g-3'>
                        <div className='col'>
                            <TableCard
                                position={POSITION_QB}
                                players={data[0]}
                            />
                        </div>
                        <div className='col'>
                            <TableCard
                                position={POSITION_WR}
                                players={data[1]}
                            />
                        </div>
                        <div className='col'>
                            <TableCard
                                position={POSITION_RB}
                                players={data[2]}
                            />
                        </div>
                        <div className='col'>
                            <TableCard
                                position={POSITION_TE}
                                players={data[3]}
                            />
                        </div>
                        <div className='col'>
                            <TableCard
                                position={POSITION_PK}
                                players={data[4]}
                            />
                        </div>
                    </div>
                </div>
            )
        );
    };

    return (
        <div className='container-fluid mx-auto'>
            <header className='header text-center my-4 text-color-vikings'>
                <h2>Welcome to Fantasy Football Central</h2>
                <h5>Your one-stop-shop for all fantasy football stats</h5>
            </header>

            {renderPage()}
        </div>
    );
}

export default HomePage;
