import React from "react";
import "../App.css";
import MainHeader from "../components/MainHeader";
import MainBody from "../components/MainBody";
import MainQuestion from "../components/MainQuestion";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <MainBody />
      <MainQuestion />
      <Footer />
    </div>
  );
};

export default MainPage;
