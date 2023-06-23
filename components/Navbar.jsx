import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Searchbar from "./Searchbar";
import Logo from "./Logo";
import Location from "./Location";
import MyAcct from "./MyAcct";
import Cart from "./Cart";
import Dropdowns from "./Dropdowns";

const Navbar = () => {
  return (
    <main>
      <div>
        <Toolbar />
      </div>
      <div>
        <Logo />
        <Location />
        <Searchbar />
        <MyAcct />
        <Cart />
      </div>
      <div>
        <Dropdowns />
      </div>
    </main>
  );
};

export default Navbar;
