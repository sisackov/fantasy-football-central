import TableCard from '../components/TableCard';
import {
    POSITION_PK,
    POSITION_QB,
    POSITION_RB,
    POSITION_TE,
    POSITION_WR,
} from '../utils/constants';

function HomePage() {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('');

    const renderPage = () => {
        // if (isLoading) return <div>Loading...</div>;
        // if (errorMsg) return <div className='error-message'>{errorMsg}</div>;

        return (
            <div className='container mt-3 md-2'>
                <div className='row row-cols-auto'>
                    <div className='col'>
                        <TableCard
                            position={POSITION_QB}
                            statsType='averages'
                        />
                    </div>
                    <div className='col'>
                        <TableCard
                            position={POSITION_WR}
                            statsType='averages'
                        />
                    </div>
                    <div className='col'>
                        <TableCard
                            position={POSITION_RB}
                            statsType='averages'
                        />
                    </div>
                    <div className='col'>
                        <TableCard
                            position={POSITION_TE}
                            statsType='averages'
                        />
                    </div>
                    <div className='col'>
                        <TableCard
                            position={POSITION_PK}
                            statsType='averages'
                        />
                    </div>
                </div>
            </div>
        );
    };

    return <>{renderPage()}</>;
}

export default HomePage;
