import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ApiDocsPage from './pages/ApiDocsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PlayerViewPage from './pages/PlayerViewPage';
import SignUpPage from './pages/SignUpPage';
import SearchPage from './pages/SearchPage.jsx';

import {
    PATH_API,
    PATH_HOME,
    PATH_LOGIN,
    PATH_PLAYER_PARAM,
    PATH_SEARCH,
    PATH_SIGN_UP,
} from './utils/constants';

function App() {
    return (
        <>
            <Router>
                <NavbarComponent />
                <Switch>
                    <Route exact path={PATH_HOME} component={HomePage} />
                    <Route exact path={PATH_LOGIN} component={LoginPage} />
                    <Route exact path={PATH_SIGN_UP} component={SignUpPage} />
                    <Route exact path={PATH_SEARCH} component={SearchPage} />
                    <Route exact path={PATH_API} component={ApiDocsPage} />
                    <Route
                        exact
                        path={PATH_PLAYER_PARAM}
                        component={PlayerViewPage}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default App;
