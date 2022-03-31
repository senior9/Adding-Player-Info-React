import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props);
    const {first_name,avatar,country,title,JersyNumber,key_skill}= props.player;
    const cart = props.addHandleButton;
    // console.log(cart);
    
    return (
        <div className="container">
            
            <div>
            <img src={avatar} alt="" srcset="" />
            </div>
            <div className='p'>
                <h1>Name: {first_name}</h1>
                <h2>Country:{country}</h2>
                <h3>TTitle: {title}</h3>
                <h4>Shirt:{JersyNumber}</h4>
                <h5 style={{color:'red'}}>Key Skill:{key_skill}</h5>
            <button onClick={()=>cart(props.player)}> Add Player</button>

            </div>
            <br /> <br />
        </div>
    
    );
};

export default Player;