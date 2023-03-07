import React from 'react';
import "./Product.css";

// <<----------------------------------------->>
// destructure directly without using props
// const Product =(product, handleAddToCart)()=>{
    // const {handleAddToCart} = props;
    // const {name, img, seller, price, ratings} = product;
// }
// <<----------------------------------------->>

const Product = (props) => {
    // const {handleAddToCart} = props;
     const {name, img, seller, price, ratings} = props.product;
    

    return (
        <div className = "product">
            
            <img src={img} alt="" />
            <div className = "product-info">
                <p className = "product-name">{name}</p>
                <p>price: ${price}</p>   
                <p><small>seller: {seller}</small></p> 
                <p><small>ratings: {ratings} stars</small></p>

            </div>              
            {/* <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                <p>Add To Cart</p>
            </button> */}
            <button onClick={()=>props.handleAddToCart(props.product)} className="btn-cart">
                <p>Add To Cart</p>
            </button>
            
                      
        </div>
    );
};

export default Product;