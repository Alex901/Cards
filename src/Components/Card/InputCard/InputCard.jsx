import React, { Component } from 'react';
import './InputCard.css';



class InputCard extends React.Component {
    render() {
        return (
            <div className="inputField">
                <form action="" className='inputForm'>
                    <input type="text" placeholder='GitHub username'/>  
                    <button> ok </button>
                </form>
            </div>
        );
    }
}

export default InputCard;

