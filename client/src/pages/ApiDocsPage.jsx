import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import ApiSideBar from '../components/ApiSideBar';

function ApiDocsPage() {
    // const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className='d-flex'>
            <div
                className='flex-shrink-0 p-3 bg-white'
                style={{ width: '200px' }}
            >
                <ApiSideBar />
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <h1>API Documentation</h1>
                                <p>This is the API documentation for the</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiDocsPage;
