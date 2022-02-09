import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
    PATH_API,
    PATH_HOME,
    PATH_LOGIN,
    PATH_PLAYER,
    PATH_SEARCH,
} from '../utils/constants';

function NavbarComponent() {
    return (
        <>
            <style type='text/css'>
                {`
                    .navbar-vikings {
                        background-color: rgba(79, 38, 131, 0.8);
                    }
                `}
            </style>

            <Navbar
                variant='dark'
                className='navbar-vikings'
                expand='md'
                sticky='top'
            >
                <Container>
                    <Navbar.Brand
                        style={{
                            color: 'snow',
                            fontWeight: '600',
                        }}
                        href={PATH_HOME}
                    >
                        FFC
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='justify-content-end flex-grow-1'>
                            <Nav.Link
                                style={{
                                    color: 'ivory',
                                    fontWeight: '500',
                                }}
                                href={PATH_PLAYER + 'josh allen'}
                            >
                                Test
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'ivory',
                                    fontWeight: '500',
                                }}
                                href={PATH_LOGIN}
                            >
                                Login
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'ivory',
                                    fontWeight: '500',
                                }}
                                href={PATH_SEARCH}
                            >
                                Search
                            </Nav.Link>
                            <Nav.Link
                                style={{
                                    color: 'ivory',
                                    fontWeight: '500',
                                }}
                                href={PATH_API}
                            >
                                API Documentation
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
