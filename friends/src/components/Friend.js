import React from "react";

const Friend = (props) => {
    const {friend} = props;

    return(
        <div>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
    )
}

export default Friend;