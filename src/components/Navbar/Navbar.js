import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './Navbar.css'

const Navbar = (props) => {
    const {openModal, carts} = props
    return (
        <nav className='navbar'>
            <h1>Guns Store</h1>
            <div className='cart-counter' onClick={openModal}>
                <span>{carts.length}</span>
                <BsFillCartFill size='2em' className='icon' color='white'></BsFillCartFill>
            </div>
        </nav>
    );
};

export default Navbar;