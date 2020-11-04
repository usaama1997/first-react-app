import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>{props.userName} How are you?</p>
        </div>
    );
};

export default userOutput;