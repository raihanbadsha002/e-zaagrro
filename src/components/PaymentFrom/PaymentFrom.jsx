import React, { useState } from "react";
import PaymentFromName from "./PaymentFromName";
import bKash from "../../images/BKash-bKash-Logo.wine.svg";
import nagad from "../../images/Nagad-Logo.wine.png";
import creditCard from "../../images/credit_card_PNG22.png";
import "./PaymentFrom.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";

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

export default function PaymentFrom() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  return (
    <div className="address__from my-5">
      <div className="container">
        <div className="mb-md-4">
          <PaymentFromName />
        </div>
        <div className="payment__card shadow-sm p-5 mb-5 bg-body rounded mt-4">
          <div className="payment__card__before"></div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <span>ORDER SUMMARY</span>
                </div>
                <div className="">
                  <span className="mr-md-5 mr-0">PRICE</span>
                  <span className="mr-md-5 mr-0">QTY</span>
                </div>
              </div>
              <hr />
              <div className="custom__border__right">
                <div className="amount__info py-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Subtotal</span>
                    <span>$145.84</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Delivery Charge</span>
                    <span>$145.84</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Order Total</span>
                    <span>$5.00</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Amount Paid</span>
                    <span>$5.00</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <span className="due">Due</span>
                  <span className="due">$254.84</span>
                </div>
                <div className="user__details text-center">
                  <div className="d-flex flex-column">
                    <span style={{ color: "gray" }}>Delivery Address</span>
                    <span className="text-bold">
                      House no: 32/A, Road: SEREBANGLA, MUJIBON MONJIL. jafrabad
                      Royle bazar cominuity center (Mohammadpur
                    </span>
                  </div>
                  <div className="d-flex flex-column mt-5">
                    <span style={{ color: "gray" }}>
                      Preferred Delivery Timings
                    </span>
                    <span className="text-bold">28 Jun</span>
                    <span className="text-bold">9:00 Pm - 10:00PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-mt-0 mt-3">
              <div className="">
                <div className="form-check ml-5 my-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label text-success"
                    for="flexRadioDefault1"
                  >
                    Mobile Banking
                  </label>
                </div>
                <div className="">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-10 bKash shadow bg-body rounded mr-md-3 mr-0 mb-md-0 mb-3">
                      <img src={bKash} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 col-10 nagad shadow bg-body rounded">
                      <img src={nagad} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="form-check ml-5 my-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label text-success"
                    for="flexRadioDefault2"
                  >
                    Credit Card / Debit Card
                  </label>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-md-4 col-10 ml-5">
                      <img src={creditCard} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <div className="form-check ml-5 my-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label text-success"
                    for="flexRadioDefault2"
                  >
                    Cash On Delivery
                  </label>
                </div>
              </div>
              <div className="px-5">
                <div className="mb-3">
                  <button
                    onClick={openModal}
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-success btn-lg px-5"
                  >
                    Order
                  </button>
                </div>
                <div className="">
                  <Link
                    to="/"
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-outline-danger btn-lg px-5"
                  >
                    Cancel Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          <h1 style={{ color: "goldenrod" }}>Congratulations</h1>
          <p>Order Placed Successfully!</p>
          <Link
            to="/"
            style={{ background: "goldenrod" }}
            className="btn btn-success text-uppercase mt-5 px-4"
          >
            Back To Shipping
          </Link>
        </div>
      </Modal>
    </div>
  );
}
