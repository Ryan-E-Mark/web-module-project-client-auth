import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {


    const history = useHistory();

    const initialState = {
        credentials: {
            username: '',
            password: ''
        }
    }

    const [login, setLogin] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', login.credentials)
            .then(resp => {
                console.log(resp);
                localStorage.setItem('token', resp.data.payload);
                history.push('/friends');   
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setLogin({
            credentials: {
            ...login.credentials,
            [e.target.name] : e.target.value
            }
        })
    }

    return(
        <div className="login-div">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label> Username: 
                    <input
                        type = 'text'
                        name = 'username'
                        value = {login.credeusername}
                        onChange ={handleChange}
                    />
                </label>
                <label> Password: 
                    <input
                        type = 'password'
                        name = 'password'
                        value = {login.password}
                        onChange ={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;