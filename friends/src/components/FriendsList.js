import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Friend from './Friend';

const FriendsList = () => {

    const initialState = {
        friends: []
    }

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                setState({
                    ...state,
                    friends: resp.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    return (
        <div>
            {state.friends.map(friend => {
                return (<Friend friend={friend} key={friend.id} />);
            })}
            <Link to='/friendform'>Add Another Friend!</Link>
        </div>
    )
}

export default FriendsList;