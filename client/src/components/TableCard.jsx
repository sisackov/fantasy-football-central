import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { POSITION_OPTIONS } from '../utils/constants';
import ReactBootstrapTableNext from './ReactBootstrapTableNext';
import TableRadioButtons from './TableRadioButtons';

function TableCard({ position }) {
    const [statsType, setStatsType] = useState('averages');

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
                    />
                </Card.Subtitle>

                <ReactBootstrapTableNext
                    position={position}
                    statsType={statsType}
                />
            </Card.Body>
        </Card>
    );
}

export default TableCard;
