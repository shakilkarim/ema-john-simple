import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1 className='head'>Order Summary</h1>
            <p>Selected Item:{cart.length} </p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
        </div>
    );
};

export default Cart;