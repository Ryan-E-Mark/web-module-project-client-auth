import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import axiosWithAuth from '../Utility/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {

    const initialState = {
        friends: []
    }

    const [state, setState] = useState(initialState);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
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
        <div className="friends-list">
            <h2>All of your friends!</h2>
            {state.friends.map(friend => {
                return (<Friend friend={friend} key={friend.id} />);
            })}
            <Link to='/friendform'>Add Another Friend!</Link>
        </div>
    )
}

export default FriendsList;