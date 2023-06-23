import React, { useEffect, useState } from "react";
import MobileApp from "./MobileApp.jsx";
import ToolRental from "./ToolRental.jsx";
import Curbside from "./Curbside.jsx";
import FreeDelivery from "./FreeDelivery.jsx";
// Comment.apply

const Grid3 = (props) => {
  return (
    <main className="grid3-main">
      <div className="grid3 row row-cols-1 row-cols-md-4 g-4">
        <MobileApp />
        <ToolRental />
        <Curbside />
        <FreeDelivery />
      </div>
    </main>
  );
};

export default Grid3;
