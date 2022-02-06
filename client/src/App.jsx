import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage.jsx';
import SignupPage from './pages/SignupPage';
import { PATH_HOME, PATH_LOGIN, PATH_SEARCH } from './utils/constants';

function App() {
    return (
        <>
            <Router>
                <NavbarComponent />
                <Switch>
                    {/* <Route exact path={PATH_HOME} component={HomePage} /> */}
                    <Route exact path={PATH_LOGIN} component={LoginPage} />
                    <Route exact path={PATH_HOME} component={SignupPage} />
                    {/* <Route exact path={RESET_PASSWORD_PATH} component={Reset} /> */}
                    <Route exact path={PATH_SEARCH} component={SearchPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
