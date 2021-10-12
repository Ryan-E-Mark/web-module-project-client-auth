import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


import axiosWithAuth from '../Utility/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {

    const history = useHistory();

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

    const handleClick = () => {
        history.push('/friendform');
    }


    return (
        <div className="friends-list">
            <h2>All of your friends!</h2>
            <button onClick={handleClick}>Add More Friends!</button>
            {state.friends.map(friend => {
                return (<Friend friend={friend} key={friend.id} />);
            })}
        </div>
    )
}

export default FriendsList;