import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

/* const testData = [
    {name: "Alex901", avatar_url: "https://avatars.githubusercontent.com/u/4184656?v=4",
    company: "Oddbits"}, 
    {name: "mojombo", avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    company: "Facebook"}, 
    {name: "defunkt", avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    company: "NASA"}, 
    {name: "pjhyett", avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    company: "Google"}, 
]; */

const CardList = (props) => (
    <div className='card-list'>
        {props.profiles.map(profile => <Card {...profile}/>)}

    </div>
);


export default CardList;