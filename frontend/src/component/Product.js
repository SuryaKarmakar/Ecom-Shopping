import React from 'react';
import RatingStar from './RatingStar'
const Product = (props) =>{
    const {product} = props;
    return(
        <div key={product.id} className="card">
            <a href={`/product/${product.id}`}>
                <img className="product-image" src={product.image} alt={product.name} />
            </a>           
            <div className="card-body">
                <a href={`/product/${product.id}`}><h2>{product.name}</h2></a>
                <RatingStar rating={product.rating} numRev={product.numRev}/>
                <div className="price">
                    <h3>${product.price}</h3>
                </div>
            </div>
        </div>
    );
}

export default Product;