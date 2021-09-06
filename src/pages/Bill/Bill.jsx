import React from "react";
import BillFrom from "../../components/BillFrom/BillFrom";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default function Bill() {
  return (
    <div>
      <TopNavBar />
      <SearchBar />
      <BillFrom />
      <Footer />
    </div>
  );
}
