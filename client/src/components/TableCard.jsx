import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { PATH_SEARCH, POSITION_OPTIONS } from '../utils/constants';
import ReactBootstrapTableNext from './ReactBootstrapTableNext';
import TableRadioButtons from './TableRadioButtons';

function TableCard({ position, players }) {
    const [statsType, setStatsType] = useState('averages');
    const history = useHistory();

    const handleLinkClick = () => {
        history.push(`${PATH_SEARCH}?position=${position}`);
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title className='text-center'>
                    Top {POSITION_OPTIONS[position].label}
                </Card.Title>
                <Card.Subtitle className='my-3 text-center'>
                    <TableRadioButtons
                        statsType={statsType}
                        setStatsType={setStatsType}
                        position={position}
                    />
                </Card.Subtitle>

                <ReactBootstrapTableNext
                    position={position}
                    statsType={statsType}
                    playersData={players}
                />

                <div
                    className='text-center text-primary'
                    role='button'
                    onClick={handleLinkClick}
                >
                    {' '}
                    See more players{' '}
                </div>
            </Card.Body>
        </Card>
    );
}

export default TableCard;
