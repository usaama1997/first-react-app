import React, { Component } from 'react';

const userInput = (props) =>{
    
    const inputStyles = {
        border:'2px solid red'
    };

    return <input type = "text"
            style={inputStyles}
            onChange = {props.changed}
            value = {props.currentName} />

};

export default userInput;