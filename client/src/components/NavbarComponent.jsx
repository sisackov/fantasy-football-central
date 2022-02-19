import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
    LOGO_IMAGE,
    LS_TOKEN_KEY,
    PATH_API,
    PATH_FAVORITES,
    PATH_HOME,
    PATH_LOGIN,
    PATH_SEARCH,
} from '../utils/constants';
import { useTokenProvider } from '../hooks/providers/SessionProvider';
import { useHistory } from 'react-router-dom';

const styles = {
    navbar: {
        backgroundColor: 'rgb(79, 38, 131)',
    },
    navbarBrand: {
        backgroundImage: `url('../assets/6779723328_d65d1a8a.png')`,
        color: 'gold',
        fontWeight: '600',
    },
    navbarLink: {
        color: 'gold',
        fontWeight: '500',
    },
};

function NavbarComponent() {
    const { token, setToken } = useTokenProvider();
    const history = useHistory();

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem(LS_TOKEN_KEY);
        history.push(PATH_HOME);
    };

    const renderNavbar = () => {
        if (token) {
            return (
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end flex-grow-1'>
                        <Nav.Link style={styles.navbarLink} href={PATH_SEARCH}>
                            Search
                        </Nav.Link>
                        <Nav.Link
                            style={styles.navbarLink}
                            href={PATH_FAVORITES}
                        >
                            Favorites
                        </Nav.Link>
                        <Nav.Link style={styles.navbarLink} href={PATH_API}>
                            API Documentation
                        </Nav.Link>
                        <Nav.Item
                            style={styles.navbarLink}
                            className='align-self-sm-center'
                            onClick={handleLogout}
                            role='button'
                        >
                            Logout
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            );
        } else {
            return (
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end flex-grow-1'>
                        <Nav.Link style={styles.navbarLink} href={PATH_SEARCH}>
                            Search
                        </Nav.Link>
                        <Nav.Link style={styles.navbarLink} href={PATH_API}>
                            API Documentation
                        </Nav.Link>
                        <Nav.Link style={styles.navbarLink} href={PATH_LOGIN}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            );
        }
    };

    return (
        <Navbar
            variant='dark'
            className='navbar-vikings'
            expand='md'
            sticky='top'
            style={styles.navbar}
        >
            <Container>
                <Navbar.Brand style={styles.navbarBrand} href={PATH_HOME}>
                    <img
                        src={LOGO_IMAGE}
                        width='80'
                        height='35'
                        className='d-inline-block align-top img'
                        alt='FFC logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                {renderNavbar()}
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
