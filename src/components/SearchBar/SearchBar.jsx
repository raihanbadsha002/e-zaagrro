import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import headerLogo from "../../images/header__logo.JPG";
import "./SearchBar.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <div className="search_bar py-4">
      <div className="container d-flex align-items-center justify-content-between custom-flex-column">
        <Link to="/" className="header__logo">
          <img src={headerLogo} className="img-fluid" alt="" />
        </Link>
        <div className="search__input">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search for product"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-danger" type="button" id="button-addon2">
              <FiSearch />
            </button>
          </div>
        </div>
        <div className="shop__icons d-flex">
          <div className="shop__icon1">
            <span>
              <BsBag />
            </span>
            <span className="product__count">0</span>
          </div>
          <div className="shop__icon2">
            <span>
              <FiHeart />
            </span>
            <span className="product__like">0</span>
          </div>
          <div className="shop__icon">
            <span>
              <FaRegUser />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
