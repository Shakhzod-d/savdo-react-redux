import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SELECT_A_PRODUCT } from "../Store/Actions/ActionTypes";

const Card = () => {
  const state = useSelector((state) => state);
  const { fruitsArr, showFruitsArr, seletedItem } = state;
  const dispatch = useDispatch();
  // console.log(state);

  const selectAnItem = (id) => {
    dispatch({ type: SELECT_A_PRODUCT, payload: { id } });
    // console.log(id);
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {showFruitsArr.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <div
            key={id}
            className="box-container card m-2"
            style={{ width: "18rem" }}
            onClick={() => selectAnItem(id)}
          >
            <img src={img} className="card-img-top" alt="productImage" />
            <div className="card-body">
              <div className="d-flex justify-content-between aling-items-center">
                <h5 className="card-title">{title}</h5>
                <h5>{`${price} so'm`}</h5>
              </div>
              <p className="card-text">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
