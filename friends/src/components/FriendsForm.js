import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const FriendForm = (props) => {

    const history = useHistory();

    const initialFriend = {
        age: '',
        email: '',
        id: Math.random(),
        name: '',

    }

    const [newFriend, setNewFriend] = useState(initialFriend);

    const handleChange = (e) => {
        // Setting newFriend to equal input values
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
            id: Math.random()
        })
    }

    const handleSubmit = (e) => {
        // Posting newFriend to axios
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/api/friends', newFriend, {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            history.push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label> Name
                <input
                    type = "text"
                    name = "name"
                    value = {newFriend.name}
                    onChange={handleChange}
                />
            </label>
            <label> Age
                <input
                    type = "text"
                    name = "age"
                    value = {newFriend.age}
                    onChange={handleChange}
                />
            </label>
            <label> Email
                <input
                    type = "text"
                    name = "email"
                    value = {newFriend.email}
                    onChange={handleChange}
                />
            </label>
            <button>Submit!</button>
        </form>
    )
}

export default FriendForm;