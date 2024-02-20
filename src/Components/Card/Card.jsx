import React, { Component } from 'react';
import './Card.css';



class Card extends React.Component {
    render() {

        const profile = this.props;
        console.log(profile)

        return (
            <div className='user-profile'>
                <img className="profile-pic" src= {profile.avatar_url} />
                <div className='info'>
                    <div className='name'> <strong> {profile.name} </strong>  </div>
                    <div className='e-mail' style={{ color: profile.email ? 'white' : 'red'}}>
                          Mail: {profile.email || 'Not Available'} </div>
                    <div className='repos'> repos: {profile.public_repos} </div>    
                </div>    
            </div>
        );
    }
}
export default Card;