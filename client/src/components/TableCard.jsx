import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { POSITION_OPTIONS } from '../utils/constants';
import ReactBootstrapTableNext from './ReactBootstrapTableNext';

function TableCard({ position }) {
    const [statsType, setStatsType] = useState('averages');

    return (
        <Card>
            <Card.Body>
                <Card.Title className='text-center'>
                    Top {POSITION_OPTIONS[position].label}
                </Card.Title>
                <Card.Subtitle className='my-3 text-center'>
                    <div
                        className='btn-group'
                        role='group'
                        aria-label='Basic radio toggle button group'
                    >
                        <input
                            type='radio'
                            className='btn-check'
                            name='btnRadio'
                            id='btnRadio1'
                            autoComplete='off'
                            checked={statsType === 'averages'}
                            onChange={() => setStatsType('averages')}
                        />
                        <label
                            className='btn btn-outline-success'
                            htmlFor='btnRadio1'
                        >
                            Average
                        </label>

                        <input
                            type='radio'
                            className='btn-check'
                            name='btnRadioTotal'
                            id='btnRadio2'
                            autoComplete='off'
                            checked={statsType === 'totals'}
                            onChange={() => setStatsType('totals')}
                        />
                        <label
                            className='btn btn-outline-success'
                            htmlFor='btnRadio2'
                        >
                            Total
                        </label>
                    </div>
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
