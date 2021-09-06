import React from "react";
import AddressFrom from "../../components/AddressFrom/AddressFrom";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default function Shipping() {
  return (
    <>
      <TopNavBar />
      <SearchBar />
      <AddressFrom />
      <Footer />
    </>
  );
}
