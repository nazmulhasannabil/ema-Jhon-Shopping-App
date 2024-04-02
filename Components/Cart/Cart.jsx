// import React from 'react';
import './Cart.css'

const cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice+product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Price: {totalPrice}</p>
            <p>Shipping: {totalShipping}</p>
            <p>Tax: {tax} </p>
            <p>Total Amount: {grandTotal} </p>
        </div>
    );
};

export default cart; { cart }