import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = ({product,productAddToCart}) => {
    const {name,seller,price,ratings,img} = product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <p className='name'>{name}</p>
           <h4>Price: ${price}</h4>
           <p>Seller: {seller}</p>
           <p>Rating: {ratings} start</p>
           </div>
           <button onClick={() => productAddToCart(product)} className='btn'>
           <h4 className='btn-cart'>Add to cart</h4>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
       </div>
           
       
      
    );
};

export default Products;