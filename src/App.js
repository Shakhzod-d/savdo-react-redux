import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import uuid from "react-uuid";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "react-modal";
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Card from "./Components/Card";

import SelectedItemModal from "./Components/SelectedItemModal";

import {
  ADD_PRODUCT,
  CLOSE_MODAL,
  IS_CART_OPEN,
} from "./Store/Actions/ActionTypes";
// import AddingProduct from "./Pages/addingProduct";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import CartItems from "./Components/CartItems";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [priceOfItem, setPriceOfItem] = useState();
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { IsSelectItemOpen, cart } = state;
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

  const newItem = {
    id: uuid(),
    img: imgUrl,
    title,
    price: priceOfItem,
    desc: description,
  };

  // console.log(2, seletedItem);
  const handleAddNewItem = (newItem) => {
    dispatch({ type: ADD_PRODUCT, payload: { newItem } });
    // console.log(1, newItem);
    setImgUrl("");
    setTitle("");
    setPriceOfItem("");
    setDescription("");
    setModalIsOpen(false);
  };
  const showCartItems = () => {
    dispatch({ type: IS_CART_OPEN });
  };

  return (
    <div className="App" style={{ backgroundColor: `#adb5bd` }}>
      <Header setModalIsOpen={setModalIsOpen} />

      <>
        <CartItems />
        <SelectedItemModal
          isOpen={IsSelectItemOpen}
          onRequestClose={() => dispatch({ type: CLOSE_MODAL })}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div style={{ width: "700px" }}>
            <label>Enter Item info below!</label> <br /> <br />
            <div>
              <input
                className="form-control"
                type={`text`}
                placeholder={`Enter item image url here`}
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type={`text`}
                placeholder={`Enter title`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <br />
              <input
                className="form-control"
                type={`number`}
                placeholder={`Enter price of item`}
                value={priceOfItem}
                onChange={(e) => setPriceOfItem(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type={`text`}
                placeholder={`Enter description`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br /> <br />
              <button
                onClick={() => handleAddNewItem(newItem)}
                className="btn btn-success m-3"
                type="submit"
              >
                submit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setModalIsOpen(false)}
              >
                close
              </button>
            </div>
          </div>
        </Modal>
        <div className="box d-flex justify-content-center align-items-center mt-5">
          <Card />
        </div>
        <div
          onClick={showCartItems}
          className="cart d-flex align-items-center justify-content-center"
        >
          <AiOutlineShoppingCart size={30} />
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
      </>
      <footer
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "black",
          color: "#FFF",
          borderTopRightRadius: "24px",
          borderTopLeftRadius: "24px",
        }}
        className="d-flex justify-content-around flex-wrap p-4"
      >
        <div>
          <p>Created by Jovliev Akmal</p>
          <p>Phone number: +998...</p>
          <p>About us</p>
        </div>
        <div>
          <p>
            <BsTelegram />
          </p>
          <p>
            {" "}
            <BsInstagram />{" "}
          </p>
          <p>
            <BsFacebook />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
