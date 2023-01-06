import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {image , name , timeRequired} = props.activity;
    const getTime = props.getTime;

    return (
         <div className='activity'>
        <img src={image} alt="" />   
        <h2>Name: {name}</h2>
        <h2>Time Required: {timeRequired}</h2>  
        <button onClick={()=>getTime(props.activity)} className='btn'>Add To List</button>       
        </div>
    );
};

export default Activity;