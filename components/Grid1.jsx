import React, { useEffect, useState } from "react";
import CreateAcct from "./CreateAcct.jsx";
import RecentViews from "./RecentView.jsx";
import TodaySpecial from "./TodaySpecial.jsx";

const Grid1 = (props) => {
  return (
    <div>
      <CreateAcct />
      <RecentViews />
      <TodaySpecial />
    </div>
  );
};

export default Grid1;
