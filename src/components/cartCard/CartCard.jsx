import React from "react";
import "./CartCard.scss";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartCard = ({cart, dispatch ,setOpen ,open}) => {
  return (
    <div className="cartPage">
      <div className="container">
        {cart.length > 0 ? (
          // {console.log(cart.length)}
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-body">
                  <span>{item.name}</span>
                  <span>₹{item.price.split("0")[0]}</span>
                </div>
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
              </div>
            ))}
         <Link to='/cart' className="links">
         <button onClick={()=>setOpen(!open)}>Go to Cart</button>
         </Link>
          </>
        ) : (
          "cart is empty  "
        )}
      </div>
    </div>
  );
};

export default CartCard;
