import React from "react";
import "./SingleProduct.scss";
import { CartState } from "../../contexts/Context";
const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <span>{product.name}</span>
        {product.fastDelivery ? (
          <span>Fast delivery</span>
        ) : (
          <span>4 days delivery</span>
        )}
        <span>{product.price}</span>
        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }}
            className="remove-cart"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
            }}
            className="add-cart"
            disabled={!product.inStock}
          >
            {!product.inStock ? "Out of Stock" : " Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
