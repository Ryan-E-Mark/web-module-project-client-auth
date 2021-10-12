import React from 'react';

const Login = () => {
    return(
        <div>
            <form>
                <label> Username
                    <input
                        type = 'text'
                        name = 'username'
                    />
                </label>
                <label> Password
                    <input
                        type = 'password'
                        name = 'password'
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;