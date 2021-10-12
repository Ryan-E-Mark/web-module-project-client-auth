import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../Utility/axiosWithAuth';

const Logout = () => {

    const history = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .post('http://localhost:5000/api/logout')
            .then(resp => {
                localStorage.removeItem('token');
                history.push('/login');
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div></div>
    )
}

export default Logout;