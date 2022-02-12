function Loader() {
    return (
        <div
            style={{ overflowY: 'hidden', height: '60vh' }}
            className='d-flex flex-column  justify-content-center'
        >
            <div className='text-secondary text-center' role='status'>
                <div className='loader1'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h3 className='mt-3 '>Loading...</h3>
            </div>
        </div>
    );
}

export default Loader;
