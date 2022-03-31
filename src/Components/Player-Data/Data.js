import React from 'react';
import fakeData from "..//fakeData/fake-data.JSON"
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Cart from '../Player-Cart/Cart';
import './Data.css'


const Data = () => {
    const [player,setPlayer]=useState([]);
    const [cart,setCart]=useState([]);
  
useEffect(() => {
  fetch(fakeData)
  .then(res=>res.json())
  .then(data=>setPlayer(data));
},[]);
const addHandleButton = (player)=>{
  console.log('player added', player)
  const cart1 = [...cart,player];
  setCart(cart1);
}
    return (
    <div className='player-data'>
      <div className='player-container'>
      {
        player.map((player)=>(<Player addHandleButton={addHandleButton} player={player}></Player>))
      }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
   </div>
    );
};

export default Data;