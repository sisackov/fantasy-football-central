import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import { PATH_LOGIN } from '../utils/constants';
import {
    APID_ALL_PLAYER_QUERY,
    APID_ALL_PLAYER_QUERY_LIM,
    APID_DST_ALL_QUERY,
    APID_DST_ALL_RES,
    APID_DST_ID_FETCH,
    APID_DST_ID_QUERY,
    APID_DST_ID_RES,
    APID_DST_Q_FETCH,
    APID_DST_Q_QUERY,
    APID_DST_Q_RES,
    APID_LG_AVG_ALL_FETCH,
    APID_LG_AVG_ALL_QUERY,
    APID_LG_AVG_ALL_RES,
    APID_LG_AVG_ID_FETCH,
    APID_LG_AVG_ID_QUERY,
    APID_LG_AVG_ID_RES,
    APID_LG_AVG_POS_FETCH,
    APID_LG_AVG_POS_QUERY,
    APID_LG_AVG_POS_RES,
    APID_PLAYER_AUTOCOMPLETE_FETCH,
    APID_PLAYER_AUTOCOMPLETE_QUERY,
    APID_PLAYER_AUTOCOMPLETE_RES,
    APID_PLAYER_ID_QUERY,
    APID_PLAYER_ID_RES,
    APID_PLAYER_LIMIT_3,
    APID_PLAYER_Q_FETCH,
    APID_PLAYER_Q_QUERY,
    APID_PLAYER_Q_RES,
} from '../utils/api-docs-consts';
import { useTokenProvider } from '../providers/SessionProvider';

function ApiDocsPage() {
    const [token, __] = useTokenProvider();

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
                    <Nav
                        variant='success'
                        style={{ fontWeight: '600', fontSize: '1.05em' }}
                    >
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

                            {token && (
                                <>
                                    <p>
                                        Below Is your Access Token('#token')
                                        that you'll need to use to access the
                                        API.
                                    </p>
                                    <CodeBox codeStr={token} centered={true} />
                                </>
                            )}
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
                            To get players using an extended query, you can use
                            the endpoint:
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
                        <h4 className='my-3'>All Team data</h4>
                        <p>
                            To get data on all defense and special teams, you
                            can use the endpoint:
                        </p>

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_DST_ALL_QUERY} />
                        <CodeAccordion
                            codeStr={APID_DST_ALL_RES}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>Team By ID</h4>
                        <p className='my-3'>
                            To fetch data by team ID, you can use the endpoint:
                        </p>
                        <CodeBox codeStr={APID_DST_ID_QUERY} />

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_DST_ID_FETCH} />
                        <CodeAccordion
                            codeStr={APID_DST_ID_RES}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>Query</h4>
                        <p>
                            To get data using an extended query, you can use the
                            endpoint:
                        </p>
                        <CodeBox codeStr={APID_DST_Q_QUERY} />

                        <p className='mt-2'>
                            You can also use the following query parameters to
                            filter the results:
                        </p>
                        <ul>
                            <li>
                                <b>team</b> - team name
                            </li>
                            <li>
                                <b>limit</b> - The number of players you'd like
                                to retrieve.
                            </li>
                            <li>
                                <b>sort</b> - sort by a specific field
                            </li>
                        </ul>

                        <p className='mt-2'>
                            The following fields are available for sorting:
                        </p>
                        <ul>
                            <li>
                                <b>averageFantasyScore</b> - team's average
                                fantasy score. Should be set to 1 or -1 to sort
                                in ascending/descending order
                            </li>
                        </ul>

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_DST_Q_FETCH} />
                        <CodeAccordion
                            codeStr={APID_DST_Q_RES}
                            format={true}
                            title='Output'
                        />
                    </div>

                    <div id='api-endpoints-league' className='mb-5'></div>
                    <div className='card-header text-center'>
                        <h5>League Averages</h5>
                    </div>
                    <div className='card-body'>
                        <h4 className='my-3'>All League data</h4>
                        <p>
                            To get data on all league's averages, you can use
                            the endpoint:
                        </p>
                        <CodeBox codeStr={APID_LG_AVG_ALL_QUERY} />

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

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_LG_AVG_ALL_FETCH} />
                        <CodeAccordion
                            codeStr={APID_LG_AVG_ALL_RES}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>League Data By ID</h4>
                        <p className='my-3'>
                            To fetch data by position's ID, you can use the
                            endpoint:
                        </p>
                        <CodeBox codeStr={APID_LG_AVG_ID_QUERY} />

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_LG_AVG_ID_FETCH} />
                        <CodeAccordion
                            codeStr={APID_LG_AVG_ID_RES}
                            format={true}
                            title='Output'
                        />

                        <h4 className='my-3'>Position</h4>
                        <p>
                            To get data based on a position, you can use the
                            endpoint:
                        </p>
                        <CodeBox codeStr={APID_LG_AVG_POS_QUERY} />

                        <p className='mt-2'>
                            The list of positions is available below:
                        </p>
                        <ul>
                            <li>
                                <b>QB</b> - Quarterback
                            </li>
                            <li>
                                <b>RB</b> - Running Back
                            </li>
                            <li>
                                <b>WR</b> - Wide Receiver
                            </li>
                            <li>
                                <b>TE</b> - Tight End
                            </li>
                            <li>
                                <b>PK</b> - Kicker
                            </li>
                        </ul>

                        <h6 className='my-3'>Example</h6>
                        <CodeBox codeStr={APID_LG_AVG_POS_FETCH} />
                        <CodeAccordion
                            codeStr={APID_LG_AVG_POS_RES}
                            format={true}
                            title='Output'
                        />
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
                            There are many different ways to score fantasy and
                            set fantasy leagues. Below is the basic scoring
                            system for fantasy football.
                        </p>
                        <p>Each team consists of the following positions:</p>
                        <ul>
                            <li>
                                <b>QB</b> - Quarterback - (1)
                            </li>
                            <li>
                                <b>RB</b> - Running Back - (2)
                            </li>
                            <li>
                                <b>WR</b> - Wide Receiver - (2)
                            </li>
                            <li>
                                <b>TE</b> - Tight End - (1)
                            </li>
                            <li>
                                <b>W/R</b> - Wide Receiver or Running Back - (1)
                            </li>
                            <li>
                                <b>K</b> - Kicker - (1)
                            </li>
                            <li>
                                <b>DEF</b> - Defensive Player - (1)
                            </li>
                        </ul>

                        <h6 className='my-3'>Scoring System</h6>
                        <ul>
                            <li>
                                <b>Passing Yards</b> - (Passing Yards x 0.04)
                            </li>
                            <li>
                                <b>Rushing Yards</b> - (Rushing Yards x 0.1)
                            </li>
                            <li>
                                <b>Receiving Yards</b> - (Receiving Yards x 0.1)
                            </li>
                            <li>
                                <b>Passing Touchdowns</b> - (Passing Touchdowns
                                x 4)
                            </li>
                            <li>
                                <b>Rushing Touchdowns</b> - (Rushing Touchdowns
                                x 6)
                            </li>
                            <li>
                                <b>Receiving Touchdowns</b> - (Receiving
                                Touchdowns x 6)
                            </li>
                            <li>
                                <b>Receptions</b> - (Receptions x 0.5)
                            </li>
                            <li>
                                <b>Fumbles</b> - (Fumbles x -2)
                            </li>
                            <li>
                                <b>Interceptions</b> - (Interceptions x -1)
                            </li>
                            <li>
                                <b>Extra Points</b> - (Extra Points x 1)
                            </li>
                            <li>
                                <b>Field Goals under 39 Yards</b> - (Field Goals
                                x 3)
                            </li>
                            <li>
                                <b>Field Goals 39 - 49 Yards</b> - (Field Goals
                                x 4)
                            </li>
                            <li>
                                <b>Field Goals 50 Plus Yards</b> - (Field Goals
                                x 5)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiDocsPage;
