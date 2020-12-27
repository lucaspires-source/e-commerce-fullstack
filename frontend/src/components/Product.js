import React from "react";
import Rating from './Rating'
const Product = (props) => {

    const {product} = props
  return (
    <div>
      <div key={product._id} className="card">
        <a href={`/product/${product}`}>
          <img src={product.image} alt={product.name} />
        </a>
        <div className="card-body">
          <a href={`/product/${product}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating/>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;