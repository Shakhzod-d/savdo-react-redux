import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
} from "../Store/Actions/ActionTypes";
import Button from "./Button";

Modal.setAppElement("#root");

const SelectedItemModal = ({ isOpen, onRequestClose }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { seletedItem, counter, total } = state;
  const { id, title, desc, img, price } = seletedItem;
  let numberPrice = parseInt(price);

  const handleAddItemToCart = () => {
    // console.log(1);
    dispatch({ type: ADD_TO_CART, payload: seletedItem });
  };

  //   console.log(5, numberPrice);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div style={{ width: "700px" }}>
        <img width={300} src={img} alt="no" />
        <hr />
        <h3 className="my-3">{title}</h3>
        <hr />
        <p className="my-3">{desc}</p>
        <hr />
        <div className="d-flex justify-content-between my-4">
          <div>
            <button
              onClick={() =>
                dispatch({ type: DECREMENT, payload: { numberPrice } })
              }
              className="btn btn-light"
            >
              -
            </button>
            <button
              onClick={() =>
                dispatch({ type: INCREMENT, payload: { numberPrice } })
              }
              className="btn btn btn-warning mx-2"
            >
              +
            </button>
            count:<b> {counter}</b>
          </div>

          <div className="d-flex align-items-center">total: {total} so'm</div>
        </div>
        <div className="d-grid gap-2">
          <Button
            type={`button`}
            className={`btn btn-warning`}
            onClick={handleAddItemToCart}
            btnText={`add to cart`}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SelectedItemModal;
