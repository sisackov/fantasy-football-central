import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    POSITION_DEF,
    POSITION_PK,
    POSITION_QB,
    POSITION_RB,
    POSITION_TE,
    POSITION_WR,
} from '../utils/constants';

function SearchPage() {
    const handlePositionSelect = (eventKey) => {
        console.log(eventKey);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching...');
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center mt-3'>
                <div className='col-md-4'>
                    <div className='search-form'>
                        {' '}
                        <i className='bi bi-search' onClick={handleSearch}></i>
                        <input
                            type='text'
                            className='form-control search-form-input'
                            placeholder='Search Name...'
                        />{' '}
                    </div>
                </div>
                <div className='col-md-4'>
                    <DropdownButton
                        title='Position'
                        id='dropdown-menu-align-right'
                        onSelect={handlePositionSelect}
                        variant='success'
                    >
                        <Dropdown.Item eventKey='none'>
                            Not Selected
                        </Dropdown.Item>
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
            </div>
        </div>
    );
}

export default SearchPage;
