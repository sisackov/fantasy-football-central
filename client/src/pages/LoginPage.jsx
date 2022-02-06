import { PATH_SIGNUP } from '../utils/constants';

function LoginPage(_ref) {
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
                        <form>
                            <div className='form-group pb-3'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                />
                            </div>
                            <div className='form-group pb-3'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                            <div className='pb-2'>
                                <button
                                    type='submit'
                                    className='btn btn-success w-100 font-weight-bold mt-2 login-submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className='pt-4 text-center'>
                            New to Fantasy Football Central?{' '}
                            <a href={PATH_SIGNUP}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
