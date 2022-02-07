import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ApiDocsPage from './pages/ApiDocsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage.jsx';
import SignupPage from './pages/SignupPage';
import {
    PATH_API,
    PATH_HOME,
    PATH_LOGIN,
    PATH_SEARCH,
    PATH_SIGNUP,
} from './utils/constants';

function App() {
    return (
        <>
            <Router>
                <NavbarComponent />
                <Switch>
                    <Route exact path={PATH_HOME} component={HomePage} />
                    <Route exact path={PATH_LOGIN} component={LoginPage} />
                    <Route exact path={PATH_SIGNUP} component={SignupPage} />
                    {/* <Route exact path={RESET_PASSWORD_PATH} component={Reset} /> */}
                    <Route exact path={PATH_SEARCH} component={SearchPage} />
                    <Route exact path={PATH_API} component={ApiDocsPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
