import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import ApiSideBar from '../components/ApiSideBar';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import { PATH_LOGIN } from '../utils/constants';
import {
    APID_ALL_PLAYER_QUERY,
    APID_ALL_PLAYER_QUERY_LIM,
    APID_PLAYER_AUTOCOMPLETE_FETCH,
    APID_PLAYER_AUTOCOMPLETE_QUERY,
    APID_PLAYER_AUTOCOMPLETE_RES,
    APID_PLAYER_ID_QUERY,
    APID_PLAYER_ID_RES,
    APID_PLAYER_LIMIT_3,
    APID_PLAYER_Q_FETCH,
    APID_PLAYER_Q_QUERY,
    APID_PLAYER_Q_RES,
} from '../utils/outputs';

function ApiDocsPage() {
    const userToken = localStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(userToken !== null);

    const CodeBox = ({ codeStr, centered, format }) => (
        <div className='card p-2'>
            <code className={centered ? 'text-center' : ''}>
                {format ? <pre>{codeStr}</pre> : <span>{codeStr}</span>}
            </code>
        </div>
    );

    const CodeAccordion = ({ codeStr, centered, format, title }) => (
        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <div className='card p-2'>
                        <code className={centered ? 'text-center' : ''}>
                            {format ? (
                                <pre>{codeStr}</pre>
                            ) : (
                                <span>{codeStr}</span>
                            )}
                        </code>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div
                    className='col-4 col-sm-3 '
                    style={{
                        backgroundColor: 'gold', //todo
                    }}
                >
                    <Nav variant='primary'>
                        <div
                            style={{
                                position: 'fixed',
                            }}
                        >
                            <Nav.Item>
                                <Nav.Link href='#api-get-started'>
                                    Getting Started
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                Endpoints
                                <Nav.Link href='#api-endpoints-players'>
                                    Players Data
                                </Nav.Link>
                                <Nav.Link href='#api-endpoints-dst'>
                                    DST Data
                                </Nav.Link>
                                <Nav.Link href='#api-endpoints-league'>
                                    League Averages
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                Notes
                                <Nav.Link href='#api-notes-fantasy'>
                                    Fantasy
                                </Nav.Link>
                            </Nav.Item>
                        </div>
                    </Nav>
                </div>
                <div className='col-8 col-sm-9'>
                    <div id='api-get-started' className='mb-5' />
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h3>API Documentation</h3>
                        </div>

                        <div className='card-body'>
                            <p>
                                In order to get access to the API, you will need
                                to register for an account and{' '}
                                <a href={PATH_LOGIN}>login</a>.
                            </p>
                            <p>
                                Below Is your Access Token('#token') that you'll
                                need to use to access the API.
                            </p>
                            <CodeBox codeStr={userToken} centered={true} />
                        </div>
                    </div>

                    <div id='api-endpoints' className='mt-3'></div>
                    <div className='card-header text-center'>
                        <h3>Endpoints</h3>
                    </div>

                    <div id='api-endpoints-players' className='mb-5'></div>
                    <div className='card-header text-center'>
                        <h5>Players Data</h5>
                    </div>
                    <div className='card-body'>
                        <h4 className='my-3'>All Players</h4>
                        <p>
                            To get data on all players, you can use the
                            endpoint:
                        </p>
                        <CodeBox codeStr={APID_ALL_PLAYER_QUERY} />

                        <p className='mt-2'>
                            You can also use the following query parameters to
                            filter the results:
                        </p>
                        <ul>
                            <li>
                                <b>limit</b> - The number of players you'd like
                                to retrieve.
                            </li>
                        </ul>

                        <h6 className='mt-2'>Example</h6>
                        <CodeBox codeStr={APID_ALL_PLAYER_QUERY_LIM} />
                        <CodeAccordion
                            codeStr={APID_PLAYER_LIMIT_3}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>Player By ID</h4>
                        <p className='my-3'>
                            To fetch player by ID, you can use the endpoint:
                        </p>
                        <CodeBox codeStr={APID_PLAYER_ID_QUERY} />
                        <CodeAccordion
                            codeStr={APID_PLAYER_ID_RES}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>Autocomplete</h4>
                        <p>
                            To get autocomplete suggestions for player names,
                            you can use the endpoint:
                        </p>
                        <CodeBox codeStr={APID_PLAYER_AUTOCOMPLETE_QUERY} />

                        <p className='mt-2'>
                            You can also use the following query parameters to
                            filter the results:
                        </p>
                        <ul>
                            <li>
                                <b>name</b> - string for searching player names
                            </li>
                            <li>
                                <b>position</b> - desired position for searching
                            </li>
                            <li>
                                <b>limit</b> - The number of players you'd like
                                to retrieve.
                            </li>
                        </ul>

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_PLAYER_AUTOCOMPLETE_FETCH} />
                        <CodeAccordion
                            codeStr={APID_PLAYER_AUTOCOMPLETE_RES}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>Query</h4>
                        <p>
                            To get get players using an extended query, you can
                            use the endpoint:
                        </p>
                        <CodeBox codeStr={APID_PLAYER_Q_QUERY} />

                        <p className='mt-2'>
                            You can also use the following query parameters to
                            filter the results:
                        </p>
                        <ul>
                            <li>
                                <b>name</b> - string for searching player names
                            </li>
                            <li>
                                <b>position</b> - player's position
                            </li>
                            <li>
                                <b>team</b> - player's team
                            </li>
                            <li>
                                <b>college</b> - the college where he played
                            </li>
                            <li>
                                <b>limit</b> - The number of players you'd like
                                to retrieve.
                            </li>
                            <li>
                                <b>sort</b> - sort by a specific field
                            </li>
                            <li>
                                <b>order</b> - order of the sort (asc or desc)
                            </li>
                        </ul>

                        <p className='mt-2'>
                            The following fields are available for sorting:
                        </p>
                        <ul>
                            <li>
                                <b>name</b> - player's name
                            </li>
                            <li>
                                <b>avgFantasy</b> - player's average fantasy
                                score
                            </li>
                            <li>
                                <b>avgPassYds</b> - player's average passing
                                yards(QB)
                            </li>
                            <li>
                                <b>avgRushYds</b> - player's average rushing
                                yards
                            </li>
                            <li>
                                <b>avgRecYds</b> - player's average receiving
                                yards
                            </li>
                            <li>
                                <b>avgPassTD</b> - player's average passing
                                touchdowns
                            </li>
                            <li>
                                <b>avgRushTD</b> - player's average rushing
                                touchdowns
                            </li>
                            <li>
                                <b>avgRecTD</b> - player's average receiving
                                touchdowns
                            </li>
                            <li>
                                <b>avgFumbles</b> - player's average fumbles
                            </li>
                            <li>
                                <b>totalFantasy</b> - player's total fantasy
                                score
                            </li>
                            <li>
                                <b>totalPassYds</b> - player's total passing
                                yards(QB)
                            </li>
                            <li>
                                <b>totalRushYds</b> - player's total rushing
                                yards
                            </li>
                            <li>
                                <b>totalRecYds</b> - player's total receiving
                                yards
                            </li>
                            <li>
                                <b>totalPassTD</b> - player's total passing
                                touchdowns
                            </li>
                            <li>
                                <b>totalRushTD</b> - player's total rushing
                                touchdowns
                            </li>
                            <li>
                                <b>totalRecTD</b> - player's total receiving
                                touchdowns
                            </li>
                            <li>
                                <b>totalFumbles</b> - player's total fumbles
                            </li>
                        </ul>

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_PLAYER_Q_FETCH} />
                        <CodeAccordion
                            codeStr={APID_PLAYER_Q_RES}
                            format={true}
                            title='Output'
                        />
                    </div>

                    <div id='api-endpoints-dst' className='mb-5'></div>
                    <div className='card-header text-center'>
                        <h5>Defense & Special Teams Data</h5>
                    </div>
                    <div className='card-body'>
                        <p>
                            In order to get access to the API, you will need to
                            register for an account and{' '}
                            <a href={PATH_LOGIN}>login</a>.
                        </p>
                        <p>
                            Below Is your Access Token('#token') that you'll
                            need to use to access the API.
                        </p>
                        <blockquote>
                            <code className='text-center'>
                                <span>{userToken}</span>
                            </code>
                        </blockquote>
                    </div>

                    <div id='api-endpoints-league' className='mb-5'></div>
                    <div className='card-header text-center'>
                        <h5>League Averages</h5>
                    </div>
                    <div className='card-body'>
                        <p>
                            In order to get access to the API, you will need to
                            register for an account and{' '}
                            <a href={PATH_LOGIN}>login</a>.
                        </p>
                        <p>
                            Below Is your Access Token('#token') that you'll
                            need to use to access the API.
                        </p>
                        <blockquote>
                            <code className='text-center'>
                                <span>{userToken}</span>
                            </code>
                        </blockquote>
                    </div>

                    <div id='api-notes'></div>
                    <div className='card-header text-center'>
                        <h3>Notes</h3>
                    </div>

                    <div id='api-notes-fantasy' className='mb-5'></div>
                    <div className='card-header text-center'>
                        <h5>Fantasy Scoring</h5>
                    </div>
                    <div className='card-body'>
                        <p>
                            In order to get access to the API, you will need to
                            register for an account and{' '}
                            <a href={PATH_LOGIN}>login</a>.
                        </p>
                        <p>
                            Below Is your Access Token('#token') that you'll
                            need to use to access the API.
                        </p>
                        <blockquote>
                            <code className='text-center'>
                                <span>{userToken}</span>
                            </code>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiDocsPage;
