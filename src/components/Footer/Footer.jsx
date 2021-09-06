import React from "react";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerLogo from "../../images/footer__logo.JPG";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer py-3">
      <div className="container d-flex align-items-center justify-content-between custom-flex-column">
        <Link to="/" className="footer__logo">
          <img src={footerLogo} className="img-fluid" alt="" />
        </Link>
        <div className="product__list mt-3">
          <ul class="d-flex align-items-center">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                All Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Offer Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Honey
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Organic Food
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Oil
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Ghee
              </Link>
            </li>
          </ul>
        </div>
        <div className="social__icons d-flex align-items-center">
          <div className="social__icon">
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
