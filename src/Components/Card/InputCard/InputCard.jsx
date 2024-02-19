import React, { Component } from 'react';
import './InputCard.css';
import axios from 'axios';



class InputCard extends React.Component {
    state = { userName: '' };

    handleSubmit = async (event) => {
        event.preventDefault(); //Prevent default action: refresh page
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: ''});
    }

    render() {
        return (
            <div className="inputField">
                <form onSubmit={this.handleSubmit} className='inputForm'>
                    <input
                        type="text"
                        placeholder='GitHub username'
                        value={this.state.userName}
                        onChange={event => this.setState({ userName: event.target.value})}
                    />
                    <button> ok </button>
                </form>
            </div>
        );
    }
}

export default InputCard;

