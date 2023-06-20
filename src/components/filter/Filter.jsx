import React from "react";
import "./Filter.scss";
import Rating from "../rating/Rating";
import { CartState } from "../../contexts/Context";

const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();
  return (
    <div className="filter">
      <span className="filter-title">Filter Products</span>
      <span>
        <input
          type="radio"
          id={`inline-1`}
          name="group1"
          value="ascending"
          onChange={()=>productDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })}
          checked={sort === "lowToHigh" ? true : false}
        />
         <label htmlFor="ascending">Ascending</label> <br />
      </span>
      <span>
        <input
          type="radio"
          id={`inline-2 `}
          name="group1"
          value="descending"
          onChange={()=>productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          })}
          checked={sort === "highToLow" ? true : false}
        />
        <label htmlFor="descending">Descending</label>
      </span>
      <span>
        <input
          type="checkbox"
          id={`inline-3`}
          name="group1"
          onChange={()=>productDispatch({
            type: "FILTER_BY_STOCK",
          })}
          checked={byStock}
        />
        <label htmlFor="">Include out of stock</label>
      </span>
      <span>
        <input
          type="checkbox"
          id={`inline-4`}
          name="group1"
          onChange={()=>productDispatch({
            type: "FILTER_BY_DELIVERY",
          })}
          checked={byFastDelivery}
        />
        <label htmlFor=""> Fast delivery only</label>
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      <button
        onClick={() => {
          productDispatch({ type: "CLEAR_FILTERS" });
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
