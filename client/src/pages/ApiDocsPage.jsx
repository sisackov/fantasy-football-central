import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import ApiSideBar from '../components/ApiSideBar';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { PATH_LOGIN } from '../utils/constants';

function ApiDocsPage() {
    const userToken = localStorage.getItem('token');
    console.log(userToken);
    return (
        <div className='container-fluid'>
            <Row>
                <Col
                    md={4}
                    lg={3}
                    style={{
                        backgroundColor: 'gold', //todo
                    }}
                >
                    <Nav variant='primary'>
                        <Col
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
                                    fghjk
                                </Nav.Link>
                                <Nav.Link href='#api-endpoints-dst'>
                                    fghjk
                                </Nav.Link>
                                <Nav.Link href='#api-endpoints-league'>
                                    fghjk
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                Notes
                                <Nav.Link href='#api-notes-fantasy'>
                                    Fantasy
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Nav>
                </Col>
                <Col sm={9}>
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
                            <blockquote>
                                <code className='text-center'>
                                    <span>{userToken}</span>
                                </code>
                            </blockquote>
                        </div>
                    </div>

                    <div id='api-endpoints'></div>
                    <div className='card-header text-center'>
                        <h3>Endpoints</h3>
                    </div>

                    <div id='api-endpoints-players' className='mb-5'></div>
                    <div className='card-header text-center'>
                        <h5>Players Data</h5>
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
                </Col>
            </Row>
        </div>
    );
}

export default ApiDocsPage;
