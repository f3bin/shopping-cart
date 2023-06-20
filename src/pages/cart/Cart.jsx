import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { CartState } from "../../contexts/Context";
import "../../components/filter/Filter.scss";
import Rating from "../../components/rating/Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart">
      <div className="product-container">
        <table>
          <tr>
            <th>Image </th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Qty</th>
            <th>Remove</th>
          </tr>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Rating rating={item.ratings} />
              </td>
              <td>
                <select
                  value={item.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: item.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(item.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </td>
              <td>
                <AiFillDelete
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    });
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="filter summary">
        <span className="summary-title">Subtotal ({cart.length}) items</span>
        <span className="summary-total">Total ₹ {total}</span>
        <button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
