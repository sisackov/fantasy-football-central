import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    DROPDOWN_SIZE,
    POSITION_DEF,
    POSITION_PK,
    POSITION_QB,
    POSITION_RB,
    POSITION_TE,
    POSITION_WR,
} from '../utils/constants';
import { useEffect, useState } from 'react';
import { fetchAutoCompletePlayers } from '../api/ffc-api';
import {hashCode} from "../utils/utils";
const $ = document.querySelector.bind(document);

function SearchBar({ onSearch, initialTerm }) {
    const [term, setTerm] = useState(initialTerm);
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    const [position, setPosition] = useState('');

    //**Wait 1 sec before fetching autocomplete */
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            let query = `name=${debouncedTerm}`;
            if (position) {
                query += `&position=${position}`;
            }
            const data = await fetchAutoCompletePlayers(query);
            setResults(data);
        };

        if (debouncedTerm && initialTerm !== term) {
            search();
        }
    }, [debouncedTerm, position, initialTerm, term]);

    const handlePositionSelect = (eventKey) => {
        setPosition(eventKey);

        const dropdown = $('#dropdown-menu-align-right');
        if (eventKey) {
            dropdown.innerText = eventKey;
            dropdown.style.width = '95px';
        } else {
            dropdown.innerText = 'Position';
        }
    };

    const handleSearchInput = (e) => {
        setTerm(e.target.value);
        setResults([]);
    };

    const sendSearch = (pName) => {
        onSearch({ name: pName, position });
        setResults([]);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        sendSearch(term);
    };

    const handleDropdownSelect = (e) => {
        setTerm(e.target.innerText);
        sendSearch(e.target.innerText);
    };

    const renderAutocomplete = () => {
        console.log(results);
        if (!results.length) return null;

        return (
            <ul className='list-group dropdown-list-absolute'>
                {results.slice(0, DROPDOWN_SIZE).map((result) => {
                    return (
                        <li
                            className='list-group-item'
                            key={hashCode(result)}
                            onClick={handleDropdownSelect}
                        >
                            {result}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-6'>
                    <form onSubmit={handleSearch} className='position-relative'>
                        <div className='input-group'>
                            <input
                                type='search'
                                placeholder='Player Name'
                                aria-describedby='button-addon5'
                                className='form-control'
                                value={term}
                                onChange={handleSearchInput}
                            />
                        </div>
                        {/* <div className='ui celled list position-absolute'>
                            {renderedResults}
                        </div> */}
                        {renderAutocomplete()}
                    </form>
                </div>
                <div className='col'>
                    <DropdownButton
                        title='Position'
                        id='dropdown-menu-align-right'
                        onSelect={handlePositionSelect}
                        variant='success'
                    >
                        <Dropdown.Item eventKey=''>Not Selected</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey={POSITION_QB}>
                            {POSITION_QB}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={POSITION_WR}>
                            {POSITION_WR}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={POSITION_RB}>
                            {POSITION_RB}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={POSITION_TE}>
                            {POSITION_TE}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={POSITION_PK}>
                            {POSITION_PK}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={POSITION_DEF}>
                            {POSITION_DEF}
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='col-3'>
                    <button
                        id='button-addon5'
                        type='button'
                        className='btn btn-primary'
                        onClick={handleSearch}
                    >
                        Search <i className='bi bi-search'> </i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
