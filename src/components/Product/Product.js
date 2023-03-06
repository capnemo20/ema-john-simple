import React from 'react';
import "./Product.css";

const Product = (props) => {
    
     const {name, img, seller, price, ratings} = props.product
       
    return (
        <div className = "product">
            
            <img src={img} alt="" />
            <p className = "product-name">{name}</p>   
            {/* <p>seller: {seller}</p> 
            <p>price: {price}</p>
            <p>ratings: {ratings}</p> */}

                      
        </div>
    );
};

export default Product;