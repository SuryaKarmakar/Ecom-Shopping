import React, { useEffect } from "react";
import RatingStar from "../component/RatingStar";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../component/LoadingBox";
import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="row top">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
          </div>

          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <RatingStar rating={product.rating} numRev={product.numRev} />
              </li>
              <li>Price : ${product.price}</li>
              <li>
                Description <p>{product.description}</p>
              </li>
            </ul>
          </div>

          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status </div>
                    <div>
                      {product.stock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="error">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
