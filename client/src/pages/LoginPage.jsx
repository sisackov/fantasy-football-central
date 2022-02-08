import { useState, useEffect } from 'react';
import { PATH_SEARCH, PATH_SIGN_UP } from '../utils/constants';
import { loginUser } from '../api/ffc-server';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const sendServerRequest = async () => {
            const response = await loginUser(user);
            setUser(null);
            if (response.error) {
                setError(response.error);
            } else {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                history.push(PATH_SEARCH); //TODO: redirect to search page/team page/favorites page
            }
        };

        if (user) {
            console.log('sendLogin', user);
            sendServerRequest();
        }
    }, [user, history]);

    const handleLogin = (e) => {
        console.log('handleLogin');
        e.preventDefault();

        if (!name || !password) {
            setError('Please enter your email and password');
            return;
        }

        setError('');
        setUser({ name, password });
    };

    return (
        <div className='container'>
            <div className='row m-5 no-gutters shadow-lg'>
                <div className='col-md-6 d-none d-md-block'>
                    <img
                        src='https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                        className='img-fluid'
                        style={{ minHeight: '100%' }}
                        alt='login logo'
                    />
                </div>
                <div className='col-md-6 bg-white p-5'>
                    <h3 className='text-center pb-3 text-color-vikings'>
                        Fantasy Football Central
                    </h3>
                    <div className='form-style'>
                        <form onSubmit={handleLogin}>
                            <div className='form-group pb-3'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='form-control'
                                    aria-describedby='nameHelp'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group pb-3'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='form-control'
                                    aria-describedby='passwordHelp'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className='pb-2'>
                                <button
                                    type='submit'
                                    className='btn btn-success w-100 font-weight-bold mt-2 login-submit'
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className='pt-4 text-center'>
                            New to Fantasy Football Central?{' '}
                            <a href={PATH_SIGN_UP}>Sign Up</a>
                        </div>
                        {error && (
                            <div className='pt-4 text-center'>{error}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
