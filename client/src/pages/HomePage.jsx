import { useState, useEffect } from 'react';
// import { fetchPlayerById, fetchQueriedPlayers } from '../api/ffc-api';
// import TableCard from '../components/TableCard';
import TableCard2 from '../components/TableCard2';
import { POSITION_QB, POSITION_WR } from '../utils/constants';

function HomePage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(true);
    //         try {
    //             const res = await fetchQueriedPlayers(
    //                 'position=QB&limit=10&sort=avgFantasy&order=desc'
    //             );
    //             setData(res);
    //         } catch (e) {
    //             setErrorMsg(e.message);
    //         }
    //         setIsLoading(false);
    //     };

    //     fetchData();
    // }, []);

    const renderPage = () => {
        if (isLoading) return <div>Loading...</div>;
        if (errorMsg) return <div className='error-message'>{errorMsg}</div>;
        // return <TableCard position={POSITION_QB} />;
        return <TableCard2 position={POSITION_QB} />;
    };

    return <>{renderPage()}</>;
}

export default HomePage;
