import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage.jsx';
import { PATH_HOME, PATH_LOGIN, PATH_SEARCH } from './utils/constants';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path={PATH_HOME} component={HomePage} />
                    {/* <Route exact path={PATH_LOGIN} component={Login} /> */}
                    {/* <Route exact path={RESET_PASSWORD_PATH} component={Reset} /> */}
                    <Route exact path={PATH_SEARCH} component={SearchPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
