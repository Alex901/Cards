import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

const testData = [
    {name: "Alex901", avatar_url: "https://avatars.githubusercontent.com/u/4184656?v=4",
    company: "none"}, 
    {name: "mojombo", avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    company: "none"}, 
];

const CardList = (props) => (

    <div className='card-list'>
        <Card {...testData[0]} />
        <Card {...testData[1]} />
    </div>
);


export default CardList;