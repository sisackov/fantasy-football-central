// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchPageTable from '../components/SearchPageTable';
import TableRadioButtons from '../components/TableRadioButtons';
import Card from 'react-bootstrap/Card';
import { useHistory, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { fetchQueriedPlayers } from '../api/ffc-api';
import { PATH_SEARCH } from '../utils/constants';
import useQueryParams from '../hooks/useQueryParams';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [statsType, setStatsType] = useState('averages');
    const location = useLocation();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const qParams = useQueryParams('name');

    useEffect(() => {
        const queryParams = location.search.slice(1);
        console.log(qParams.name);
        if (queryParams) {
            console.log('params', location.search.slice(1));
            setQuery(queryParams);
        } else {
            setQuery('sort=avgFantasy&order=desc&limit=100');
        }
    }, [location]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetchQueriedPlayers(query);
                setData(res);
                setIsLoading(false);
            } catch (e) {
                setErrorMsg(e.message);
                setIsLoading(false);
            }
        };

        if (query) {
            fetchData();
        }
    }, [query]);

    const handleSearch = ({ name, position }) => {
        let searchQuery = '';
        if (name && position) {
            searchQuery = `name=${name}&position=${position}`;
        } else if (position) {
            searchQuery = `position=${position}`;
        } else if (name) {
            searchQuery = `name=${name}`;
        }
        console.log(searchQuery);
        setQuery(searchQuery);
        history.push(`${PATH_SEARCH}?${searchQuery}`);
    };

    const renderTable = () => {
        if (isLoading) return <Loader />;
        if (errorMsg)
            return <h6 className='text-center text-danger mt-5'>{errorMsg}</h6>;
        if (!data.length)
            return <h6 className='text-center mt-5'>No players found</h6>;

        return (
            <Card>
                <Card.Body>
                    <Card.Title className='text-center'>
                        {/* {getTitle()} */}
                    </Card.Title>
                    <Card.Subtitle className='my-3 text-center'>
                        <TableRadioButtons
                            statsType={statsType}
                            setStatsType={setStatsType}
                        />
                    </Card.Subtitle>

                    <SearchPageTable playersData={data} statsType={statsType} />
                </Card.Body>
            </Card>
        );
    };

    return (
        <div className='container'>
            <div className='row border border-1 rounded my-2 pb-3 border-info'>
                <SearchBar
                    onSearch={handleSearch}
                    initialTerm={qParams.name || ''}
                />
            </div>
            {query && <div className='row'>{renderTable()}</div>}
        </div>
    );
}

export default SearchPage;
