import React, { useState } from "react";
import "./BillFrom.css";
import BillFromName from "./BillFromName";
import Switch from "react-switch";
import { MdLocationOn, MdWatchLater } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { Link } from "react-router-dom";

export default function BillFrom() {
  const [selectedDay, setSelectedDay] = useState(null);

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const [onChecked, setonChecked] = useState(true);
  const onHandleChange = (nextChecked) => {
    setonChecked(nextChecked);
  };

  return (
    <div className="address__from my-5">
      <div className="container">
        <div className="mb-md-4">
          <BillFromName />
        </div>
        <div className="bill__card shadow-sm p-5 mb-5 bg-body rounded mt-4">
          <div className="bill__card__before"></div>
          <div className="delivery__address row mb-lg-5">
            <div className="col-md-3 col-12">
              <span className="bill__icon">
                <MdLocationOn />
              </span>
              <span className="custom_delivery_title">Delivery Address</span>
            </div>
            <div className="col-md-5 col-12">
              <span className="custom__text__color">
                House no: 32/A, Road: SEREBANGLA, MUJIBON MONJIL. jafrabad Royle
                bazar cominuity center (Mohammadpur)
              </span>
            </div>
            <div className="col-md-4 col-12 text-end mt-2">
              <button className="btn btn-danger px-4 mr-lg-3 mr-0 mb-lg-0 mr-2 mb-2">Change</button>
              <button className="btn btn-outline-success px-4">Add New</button>
            </div>
          </div>
          <div className="delivery__time row  my-4 my-lg-5">
            <div className="col-md-3 col-12">
              <span className="bill__icon">
                <MdWatchLater />
              </span>
              <span className="custom_delivery_title">Delivery Time</span>
            </div>
            <div className="col-md-5 col-12">
              <span className="custom__text__color">
                When Would Like Your Express Delivery?
              </span>
              <div className="">
                <DatePicker
                  value={selectedDay}
                  onChange={setSelectedDay}
                  inputPlaceholder="Select a day ↓"
                  inputClassName="my-custom-input"
                  shouldHighlightWeekends
                />
              </div>
            </div>
          </div>
          <div className="payment__option row">
            <div className="col-md-5 col-12">
              <div className="">
                <span className="bill__icon">
                  <FaShoppingBag />
                </span>
                <span className="custom__text__color">
                  Add Reusable Bags?
                </span>
                <span className="alert__icon">
                  <FiAlertCircle />
                </span>
              </div>
              <div className="d-flex flex-column">
                <span className="custom__text__color">
                  Payment Options available On Next Page
                </span>
                <span className="text-success">
                  By Clicking/ Tapping Proceed. I agree To Buniyad's Terms Of
                  Services
                </span>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="d-flex my-md-0 my-2">
                <div className="">
                  <Switch
                    onChange={handleChange}
                    checked={checked}
                    onColor="#dc3545"
                    onHandleColor="#840915"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    offHandleColor="#dc3545"
                  />
                </div>
                <div className="form-check form-switch">
                  <Switch
                    onChange={onHandleChange}
                    checked={onChecked}
                    onColor="#0cb332"
                    onHandleColor="#1ad846"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    offHandleColor="#0cb332"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 text-end">
              <div className="d-flex flex-column">
                <p className="custom__text__color">Delivery Charge Included</p>
                <div className="">
                  <Link
                    to="/payment"
                    type="button"
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                    className="btn btn-success px-4"
                  >
                    Proceed
                  </Link>
                  <Link
                    to="/payment"
                    type="button"
                    style={{ borderRadius: "0px 5px 5px 0px" }}
                    className="btn btn-outline-success px-4"
                  >
                    $254.84
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
