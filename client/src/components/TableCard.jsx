import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { fetchQueriedPlayers } from '../api/ffc-api';
import {
    QB_TABLE_HEADERS,
    TABLE_QUERIES,
    TABLE_TYPE_TOTAL,
} from '../utils/constants';

function TableCard({ position }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // console.log('TableCard: position', position);
    // console.log(TABLE_QUERIES[position]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetchQueriedPlayers(TABLE_QUERIES[position]);
                setData(res);
            } catch (e) {
                setErrorMsg(e.message);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [position]);

    const renderHeader = () => {
        switch (position) {
            case 'QB':
                return QB_TABLE_HEADERS.map((header, index) => {
                    return <th key={`QB_TABLE_HEADERS_${index}`}>{header}</th>;
                });
            default:
                break;
        }
        return null;
    };

    const renderBody = () => {
        // if (isLoading) return <div>Loading...</div>;
        // if (errorMsg) return <div className='error-message'>{errorMsg}</div>;
        if (data.length) {
            switch (position) {
                case 'QB':
                    return data.map((player, index) => {
                        const stats = player.stats[0].averages;
                        return (
                            <tr key={`QB_TABLE_BODY_${player.name}`}>
                                <td>{player.name}</td>
                                <td>{stats.passingYardsAvg}</td>
                                <td>{stats.passingTouchdownsAvg}</td>
                                <td>{stats.interceptionsAvg}</td>
                                <td>{stats.fantasyScoreAvg}</td>
                            </tr>
                        );
                    });
                default:
                    break;
            }
        }
        return null;
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    Card Subtitle
                </Card.Subtitle>

                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>{renderBody()}</tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default TableCard;
