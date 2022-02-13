import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import ApiDocsPage from '../pages/ApiDocsPage';
import FavoritesPage from '../pages/FavoritesPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PlayerViewPage from '../pages/PlayerViewPage';
import RegistrationPage from '../pages/RegistrationPage';
import SearchPage from '../pages/SearchPage.jsx';

import {
    PATH_API,
    PATH_FAVORITES,
    PATH_HOME,
    PATH_LOGIN,
    PATH_PLAYER_PARAM,
    PATH_SEARCH,
    PATH_SIGN_UP,
} from '../utils/constants';

export const Component = ({ count, handleIncrement, handleDecrement }) => (
    <Router>
        <NavbarComponent
            redux={count}
            incRedux={handleIncrement}
            decRedux={handleDecrement}
        />
        <Switch>
            <Route exact path={PATH_HOME} component={HomePage} />
            <Route exact path={PATH_LOGIN} component={LoginPage} />
            <Route exact path={PATH_SIGN_UP} component={RegistrationPage} />
            <Route exact path={PATH_SEARCH} component={SearchPage} />
            <Route exact path={PATH_FAVORITES} component={FavoritesPage} />
            <Route exact path={PATH_API} component={ApiDocsPage} />
            <Route exact path={PATH_PLAYER_PARAM} component={PlayerViewPage} />
        </Switch>
    </Router>
);
