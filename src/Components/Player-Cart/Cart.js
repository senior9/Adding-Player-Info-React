import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const cart = (props.cart)
    // const {first_name,avatar,country,title,JersyNumber,key_skill}
    // console.log(cart.first_name);
    return (
        <div>
            <div>
                    {
                        <h1>Adding Player Cart : {cart.length}</h1>
                    }
            </div>
            <div>
                    <div>
                        {
                            cart.map((cartItem, index)=>{

                                return(
                                    <div className='cart' key={index}>
                                        <div>
                                        <img src={cartItem.avatar} alt="" srcset="" />
                                        </div>
                                        <div className='player-info'>
                                        <h1>
                                            Name : {cartItem.first_name}
                                        </h1>
                                        <h3>
                                            Country:{cartItem.country}
                                        </h3>
                                        <h2>
                                            Skill: {cartItem.key_skill}
                                        </h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </div>
    );
};

export default Cart;