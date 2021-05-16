import React from "react";
import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <div key={product.id} className="card">
      <Link to={`/product/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>
        <RatingStar rating={product.rating} numRev={product.numRev} />
        <div className="price">
          <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
