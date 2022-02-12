function Loader() {
    return (
        <div
            style={{ overflowY: 'hidden', height: '60vh' }}
            class='d-flex flex-column  justify-content-center'
        >
            <div class='text-secondary text-center' role='status'>
                <div class='loader1'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h3 class='mt-3 '>Loading...</h3>
            </div>
        </div>
    );
}

export default Loader;
