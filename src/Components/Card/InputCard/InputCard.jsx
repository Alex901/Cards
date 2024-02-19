import React, { Component } from 'react';
import './InputCard.css';



class InputCard extends React.Component {
    render() {
        return (
            <div className="inputField">
                <div className='inputTools'>
                    <input type="text" placeholder='Username'/>  
                    <button> ok </button>
                </div>
            </div>
        );
    }
}

export default InputCard;

