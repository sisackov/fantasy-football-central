function TableRadioButtons({ statsType, setStatsType }) {
    return (
        <div className='btn-group' role='group' aria-label='Select Stats Type'>
            <input
                type='radio'
                className='btn-check'
                name='btnRadio'
                id='btnRadio1'
                autoComplete='off'
                checked={statsType === 'averages'}
                onChange={() => setStatsType('averages')}
            />
            <label className='btn btn-outline-success' htmlFor='btnRadio1'>
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
            <label className='btn btn-outline-success' htmlFor='btnRadio2'>
                Total
            </label>
        </div>
    );
}

export default TableRadioButtons;
