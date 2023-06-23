import React, { useState } from "react";

const Categories = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (value) => {
    setActiveButton(value);
  };

  return (
    <>
      <div className="categories" style={{ border: "none", marginTop: "20px" }}>
        <div
          className="topBar"
          style={{ background: "rgb(249, 99, 2)", height: "8px" }}
        ></div>
        <h2 className="categories_title">4th of July Savings</h2>
      </div>
      <div className="tabWrapper">
        <button
          aria-controls="tabpanel-0"
          className={`button ${activeButton === 0 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(0)}
        >
          Top Picks
        </button>
        <button
          aria-controls="tabpanel-1"
          className={`button ${activeButton === 1 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(1)}
        >
          Appliances
        </button>

        <button
          aria-controls="tabpanel-2"
          className={`button ${activeButton === 2 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(2)}
        >
          Tools
        </button>
        <button
          aria-controls="tabpanel-3"
          className={`button ${activeButton === 3 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(3)}
        >
          Outdoor Power Equipment
        </button>
        <button
          aria-controls="tabpanel-4"
          className={`button ${activeButton === 4 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(4)}
        >
          Grills
        </button>
        <button
          aria-controls="tabpanel-5"
          className={`button ${activeButton === 5 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(5)}
        >
          Patio Furniture
        </button>
        <button
          aria-controls="tabpanel-6"
          className={`button ${activeButton === 6 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(6)}
        >
          Lawn &amp; Garden
        </button>
        <button
          aria-controls="tabpanel-7"
          className={`button ${activeButton === 7 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(7)}
        >
          Paint
        </button>
        <button
          aria-controls="tabpanel-8"
          className={`button ${activeButton === 8 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(8)}
        >
          Ceiling Fans
        </button>
        <button
          aria-controls="tabpanel-9"
          className={`button ${activeButton === 9 ? "clicked" : ""}`}
          type="button"
          onClick={() => handleClick(9)}
        >
          Cleaning
        </button>
      </div>
      <div>
        {" "}
        <img src="https://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Test_and_Target/UX_Assets/promotion.svg" />
        <img
          src="https://images.thdstatic.com/productImages/3b9bfd39-5c97-41e6-ba34-40932b14a2b6/svn/milwaukee-power-tool-batteries-48-59-1862s-64_300.jpg"
          alt="M18 18-Volt Lithium-Ion High Output Starter Kit with Two 6.0 Ah Battery and Charger"
          class="stretchy"
          title="M18 18-Volt Lithium-Ion High Output Starter Kit with Two 6.0 Ah Battery and Charger"
          height="150"
          width="150"
          loading="lazy"
          border="1px solid black"
        ></img>
        <img
          src="https://images.thdstatic.com/productImages/00b23abf-eec5-4bf5-a4e0-d8cabd365bd0/svn/ryobi-cordless-string-trimmers-ry40250-64_300.jpg"
          alt="40V Expand-It Cordless Battery Attachment Capable String Trimmer with 4.0 Ah Battery and Charger"
          class="stretchy"
          title="40V Expand-It Cordless Battery Attachment Capable String Trimmer with 4.0 Ah Battery and Charger"
          height="150"
          width="150"
          loading="lazy"
          border="1px solid black"
        ></img>
      </div>
      Shop All Top Picks
    </>
  );
};
//what?
export default Categories;
