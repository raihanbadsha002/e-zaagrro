import React from "react";
import Footer from "../../components/Footer/Footer";
import PaymentFrom from "../../components/PaymentFrom/PaymentFrom";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default function Payment() {
  return (
    <>
      <TopNavBar />
      <SearchBar />
      <PaymentFrom />
      <Footer />
    </>
  );
}
