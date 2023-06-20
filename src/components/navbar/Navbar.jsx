import React from "react";
import "./Navbar.scss";
import shoppingCart from "../../images/shopping-cart.png";
import { useState } from "react";
import CartCard from "../cartCard/CartCard";
import { CartState } from "../../contexts/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div className="navbar">
      <div className="container">
        <Link className="links " to="/">
          <h1>Shopping Cart</h1>
        </Link>
        <input
          type="text"
          placeholder="Search your product here"
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />

        <div className="dropdown">
          <button onClick={() => setOpen(!open)}>
            <img src={shoppingCart} alt="cart" />
            <span>{cart.length}</span>
          </button>
          {open && (
            <CartCard
              cart={cart}
              dispatch={dispatch}
              setOpen={setOpen}
              open={open}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
