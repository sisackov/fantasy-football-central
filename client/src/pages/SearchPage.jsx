// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchPageTable from '../components/SearchPageTable';
import TableRadioButtons from '../components/TableRadioButtons';
import Card from 'react-bootstrap/Card';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [statsType, setStatsType] = useState('averages');

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
    };

    return (
        <div className='container'>
            <div className='row border border-1 rounded my-2 pb-3 border-info'>
                <SearchBar onSearch={handleSearch} />
            </div>
            {query && (
                <div className='row'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                Searching for {query}
                                {/* TODO */}
                            </Card.Title>
                            <Card.Subtitle className='my-3 text-center'>
                                <TableRadioButtons
                                    statsType={statsType}
                                    setStatsType={setStatsType}
                                />
                            </Card.Subtitle>

                            <SearchPageTable
                                query={query}
                                statsType={statsType}
                            />
                        </Card.Body>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
