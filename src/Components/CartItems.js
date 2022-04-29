import Button from "./Button";
import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { IS_CART_OPEN, DELETE_PRODUCT } from "../Store/Actions/ActionTypes";
import { TiDelete } from "react-icons/ti";
import akmalAka1 from "../Components/akmalAka1.jpg";

Modal.setAppElement("#root");

const CartItems = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cart, IsCartOpen } = state;

  // console.log(cart);
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
  const deleteItem = (id) => {
    dispatch({ type: DELETE_PRODUCT, payload: { id } });
    // console.log(id);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={IsCartOpen}
        onRequestClose={() => dispatch({ type: IS_CART_OPEN })}
        style={customStyles}
      >
        <div style={{ width: "700px" }}>
          <h3>Shopping cart</h3>
          <div className="d-flex align-items-center justify-content-between my-4">
            <img width={150} src={akmalAka1} alt="no" />
            <h5>Akmal Jovliev</h5>
          </div>
          {cart.map((item) => {
            const { id, title, desc, img, price } = item;
            // console.log(item);
            return (
              <div
                onClick={() => deleteItem(id)}
                key={id}
                className="d-flex justify-content-between my-3"
              >
                <Button
                  type={`button`}
                  className={`btn`}
                  btnText={<TiDelete size={40} />}
                />
                <img width={120} src={img} alt="no" />
                <div className="">
                  <h4 className="">{title}</h4> <br />
                  <h6 className="ms-3">{price}</h6>
                  <hr />
                </div>
                <p className="ms-5">{desc}</p>
                <hr />
              </div>
            );
          })}
          <div className="d-grid gap-2">
            <Button
              type={`button`}
              className={`btn btn-warning`}
              disabled={cart.length <= 0}
              btnText={`buy now`}
            />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CartItems;
