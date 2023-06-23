import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import CurrPromotion from "./CurrPromotion.jsx";

const Header = (props) => {
  return (
    <main>
      <CurrPromotion />
      <Navbar />
    </main>
  );
};

export default Header;
