import Nav from 'react-bootstrap/Nav';

function ApiSideBar() {
    return (
        <Nav defaultActiveKey='/home' className='flex-column'>
            <Nav.Link href='/home'>Active</Nav.Link>
            <Nav.Link eventKey='link-1'>Link</Nav.Link>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
            <Nav.Link eventKey='disabled' disabled>
                Disabled
            </Nav.Link>
        </Nav>
    );
}

export default ApiSideBar;

/* 

<div className='col-4 col-md-2'>
            <nav className='navbar bg-light'>
                <div className='navbar-brand'>
                    <ul className='navbar-nav ml-auto list-group'>
                        <li className='list-group-item nav-item'>
                            <a className='nav-link' href='#api-header'>
                                {' '}
                                Home{' '}
                            </a>
                        </li>
                        <li className='list-group-item nav-item'>
                            <a className='nav-link' href='#api-endpoints'>
                                {' '}
                                Endpoints{' '}
                            </a>

                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <a
                                        className='nav-link'
                                        href='#api-endpoints-get-players'
                                    >
                                        {' '}
                                        Get Players{' '}
                                    </a>
                                </li>
                                <li className='list-group-item'>
                                    <a
                                        className='nav-link'
                                        href='#api-endpoints-get-players'
                                    >
                                        {' '}
                                        Get Players{' '}
                                    </a>
                                </li>
                                <li className='list-group-item'>
                                    <a
                                        className='nav-link'
                                        href='#api-endpoints-get-players'
                                    >
                                        {' '}
                                        Get Players{' '}
                                    </a>
                                </li>
                                <li className='list-group-item'>
                                    <a
                                        className='nav-link'
                                        href='#api-endpoints-get-players'
                                    >
                                        {' '}
                                        Get Players{' '}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#api-fantasy-score'>
                                {' '}
                                Fantasy Score{' '}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>










<>
            <a
                href='/'
                className='d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom'
            >
                <span className='fs-5 fw-semibold'>Navigation</span>
            </a>
            <ul className='list-unstyled ps-0'>
                <li className='mb-1'>
                    <button
                        className='btn btn-toggle align-items-center rounded collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#home-collapse'
                        aria-expanded='false'
                    >
                        Home
                    </button>
                    <div className='collapse' id='home-collapse'>
                        <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Updates
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Reports
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='mb-1'>
                    <button
                        className='btn btn-toggle align-items-center rounded collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#dashboard-collapse'
                        aria-expanded='false'
                    >
                        Dashboard
                    </button>
                    <div className='collapse' id='dashboard-collapse'>
                        <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Weekly
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Monthly
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Annually
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='mb-1'>
                    <button
                        className='btn btn-toggle align-items-center rounded collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#orders-collapse'
                        aria-expanded='false'
                    >
                        Orders
                    </button>
                    <div className='collapse' id='orders-collapse'>
                        <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    New
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Processed
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Shipped
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Returned
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='border-top my-3'></li>
                <li className='mb-1'>
                    <button
                        className='btn btn-toggle align-items-center rounded collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#account-collapse'
                        aria-expanded='false'
                    >
                        Account
                    </button>
                    <div className='collapse' id='account-collapse'>
                        <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    New...
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href='#' className='link-dark rounded'>
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </> */
