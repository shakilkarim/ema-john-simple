import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"
const Shop = () => {
    const [products,setproducts] = useState([]);
    const [cart,setcart] = useState([]);

        useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
        },[])
    
    const productAddToCart = (product) => {
        const newCart = [...cart,product];
        setcart(newCart);
    }
        
    return (
        <div className='shop-container'>
            <div className="prosucts-container">
               {
                products.map(product => <Products 
                    key={product.id}
                    product={product}
                    productAddToCart ={productAddToCart}
                ></Products>)
               }
            </div>
            <div className="cat-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;