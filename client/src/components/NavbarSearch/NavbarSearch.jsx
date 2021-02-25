import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NavbarSearch = (props) => {
  const [formInput, setFormInput] = useState("Mathematics");
  const [apiString, setApiString] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleFormSubmit called:");
    console.log(e.target);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${formInput}&maxResults=10`
      )
      .then((response) => {
        console.log(response.data);
        {
          props.setAppState(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            GBSearch
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/search"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/saved">
                  Saved
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                name="query"
                onChange={handleInputChange}
                onSubmit={handleFormSubmit}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleButtonClick}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSearch;
