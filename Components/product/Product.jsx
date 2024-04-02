// import React from 'react';
import "./Product.css"

const Product = (props) => {
    
    const { img, name, price, shipping, seller } = props.product;

    const handleAddToCart= props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <p><strong>{name}</strong></p>
                <p>Price: {price}</p>
                <p>Manufacture: {seller}</p>
                <p>Shipping: {shipping}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='crt-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;