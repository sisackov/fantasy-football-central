import TableCard from '../components/TableCard';
import {
    POSITION_PK,
    POSITION_QB,
    POSITION_RB,
    POSITION_TE,
    POSITION_WR,
} from '../utils/constants';

function HomePage() {
    //TODO - single call to get all players
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('');

    const renderPage = () => {
        // if (isLoading) return <div>Loading...</div>;
        // if (errorMsg) return <div className='error-message'>{errorMsg}</div>;

        return (
            <div className='container mx-auto'>
                <div className='row my-3 g-3'>
                    <div className='col'>
                        <TableCard position={POSITION_QB} />
                    </div>
                    <div className='col'>
                        <TableCard position={POSITION_WR} />
                    </div>
                    <div className='col'>
                        <TableCard position={POSITION_RB} />
                    </div>
                    <div className='col'>
                        <TableCard position={POSITION_TE} />
                    </div>
                    <div className='col'>
                        <TableCard position={POSITION_PK} />
                    </div>
                </div>
            </div>
        );
    };

    return <>{renderPage()}</>;
}

export default HomePage;
