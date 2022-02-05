import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchQueriedPlayers } from '../api/ffc-api';
import {
    QB_TABLE_HEADERS,
    TABLE_QUERIES,
    TABLE_TYPE_TOTAL,
} from '../utils/constants';
import BootstrapTable from './BootstrapTable';
import StatsTable from './StatsTable';

function TableCard({ position }) {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(true);
    //         try {
    //             const res = await fetchQueriedPlayers(TABLE_QUERIES[position]);
    //             setData(res);
    //         } catch (e) {
    //             setErrorMsg(e.message);
    //         }
    //         setIsLoading(false);
    //     };

    //     fetchData();
    // }, [position]);

    return (
        <Card>
            <Card.Body>
                <Card.Title className='text-align-center'>
                    Top {position}s
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                </Card.Subtitle>

                <BootstrapTable position={position} statsType='averages' />
            </Card.Body>
        </Card>
    );
}

export default TableCard;
