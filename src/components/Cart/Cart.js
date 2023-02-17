import React from 'react';
import './Cart.css'
import { BsFillCartFill } from 'react-icons/bs';

const Cart = ({gun,func}) => {
    const {name,img,bullet,capacity,action,price} = gun
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-detail'>
                <h2>{name}</h2>
                <p>Bullet: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='cart-price'>
                <button onClick={()=> func(gun)}><BsFillCartFill size='2em' color='white'></BsFillCartFill></button>
                <h2>${price}</h2>
            </div>
        </div>
    );
};

export default Cart;