import React, { Component } from 'react';
import './Card.css';



class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className='user-profile'>
                <img className="profile-pic" src= {profile.avatar_url} />
                <div className='info'>
                    <div className='name'> <strong> {profile.name} </strong>  </div>
                    <div className='company'> {profile.company} </div>    
                </div>    
            </div>
        );
    }
}
export default Card;