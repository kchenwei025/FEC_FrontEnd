import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Carousel from "./Carousel.jsx";
import Categories from "./Categories.jsx";
import Grid1 from "./Grid1.jsx";
import Grid4 from "./Grid4.jsx";
import Grid6 from "./Grid6.jsx";
import ShopByCategory from "./ShopByCategory.jsx";
import Grid2 from "./Grid2.jsx";
import Grid7 from "./Grid7.jsx";
import Recommendation from "./Recommendation.jsx";
import Grid3 from "./Grid3.jsx";
import Footer from "./Footer.jsx";
import NewNavbar from "./NewNavBar.jsx";


const App = () => {
  return (
    <main>
      <Header />
      <NewNavbar/>
      <div className="body-container">
        {" "}
        <Carousel />
        <Categories />
        <Grid1 />
        <Grid4/>
        <Grid6/>
        <ShopByCategory />
        <Grid2 />
        <Grid7/>
        <Recommendation />
        <Grid3 />
      </div>

      <Footer />
    </main>
  );
};

export default App;
