import { useState, useEffect } from 'react';
import { LOGO_IMAGE_2, PATH_FAVORITES, PATH_SIGN_UP } from '../utils/constants';
import { loginUser } from '../api/ffc-server';
import { useHistory } from 'react-router-dom';
import {
    useFavoritesProvider,
    useTokenProvider,
} from '../hooks/providers/SessionProvider';

function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const history = useHistory();
    const { setToken } = useTokenProvider();
    const { setFavorites } = useFavoritesProvider();

    useEffect(() => {
        const sendServerRequest = async () => {
            const response = await loginUser(user);
            setUser(null);
            if (response.error) {
                setError(response.error);
            } else {
                setToken(response.token);
                setFavorites(response.user.favorites);
                history.push(PATH_FAVORITES);
            }
        };

        if (user) {
            console.log('sendLogin', user);
            sendServerRequest();
        }
    }, [user, history, setToken, setFavorites]);

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
        <div className='container-fluid'>
            <div className='row m-5 no-gutters shadow justify-content-center'>
                <div className='col col-md-7 col-lg-5 col-xl-4  bg-white p-5'>
                    <img
                        src={LOGO_IMAGE_2}
                        width='310'
                        height='35'
                        className='mb-4 img-fluid d-block mx-auto'
                        alt='FFC logo'
                    />
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
