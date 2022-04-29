import React from "react";
import profilePhoto from "./profilePhoto.jpg";

const Header = ({ setModalIsOpen }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Navbar
          </a>
          <div className="">
            <img
              width={80}
              src={profilePhoto}
              className="img-thumbnail"
              alt="..."
            ></img>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success ms-1" type="submit">
              Search
            </button>
            <button
              className="btn btn-outline-success ms-2 col-5"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setModalIsOpen(true);
              }}
            >
              create new product
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
