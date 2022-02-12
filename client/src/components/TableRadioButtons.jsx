import { useCallback } from 'react';

function TableRadioButtons({ statsType, setStatsType, position }) {
    const getRadioButtonID = useCallback(
        (index) => {
            switch (position) {
                case 'QB':
                    return `btnRadio-${index}`;
                case 'RB':
                    return `btnRadio-${index + 2}`;
                case 'WR':
                    return `btnRadio-${index + 4}`;
                case 'TE':
                    return `btnRadio-${index + 6}`;
                case 'PK':
                    return `btnRadio-${index + 8}`;
                default:
                    return `btnRadio-${index + 10}`;
            }
        },
        [position]
    );

    return (
        <div className='btn-group' role='group' aria-label='Select Stats Type'>
            <input
                type='radio'
                className='btn-check'
                name='btnRadio'
                id={getRadioButtonID(0)}
                autoComplete='off'
                checked={statsType === 'averages'}
                onChange={() => setStatsType('averages')}
            />
            <label
                className='btn btn-outline-success'
                htmlFor={getRadioButtonID(0)}
            >
                Average
            </label>

            <input
                type='radio'
                className='btn-check'
                name='btnRadioTotal'
                id={getRadioButtonID(1)}
                autoComplete='off'
                checked={statsType === 'totals'}
                onChange={() => setStatsType('totals')}
            />
            <label
                className='btn btn-outline-success'
                htmlFor={getRadioButtonID(1)}
            >
                Total
            </label>
        </div>
    );
}

export default TableRadioButtons;
