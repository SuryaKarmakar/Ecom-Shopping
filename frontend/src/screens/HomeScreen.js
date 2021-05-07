import React, { useEffect } from "react";
import Product from "../component/Product";
import LoadingBox from "../component/LoadingBox";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <div>efefef</div>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
