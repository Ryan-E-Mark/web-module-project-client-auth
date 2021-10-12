import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const FriendForm = () => {

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
        <div className="form-div">
            <h2>Add a new friend</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="input">
                    <label> Name:
                        <input
                            type = "text"
                            placeholder="Name"
                            name = "name"
                            value = {newFriend.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="input">
                <label> Age: 
                    <input
                        type = "text"
                        placeholder="Age"
                        name = "age"
                        value = {newFriend.age}
                        onChange={handleChange}
                    />
                </label>
                </div>
                <div className="input">
                <label> Email:
                    <input
                        type = "text"
                        placeholder="Email"
                        name = "email"
                        value = {newFriend.email}
                        onChange={handleChange}
                    />
                </label>
                </div>
                <button className="btn">Submit!</button>
            </form>
        </div>
    )
}

export default FriendForm;