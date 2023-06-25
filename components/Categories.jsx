import React, { useState } from "react";

const Categories = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (value) => {
    setActiveButton(value);
  };



  const renderContent = () => {
    switch (activeButton) {
      case 0:
        return (
          <a href="https://www.homedepot.com/p/Milwaukee-M18-18-Volt-Lithium-Ion-High-Output-Starter-Kit-with-Two-6-0-Ah-Battery-and-Charger-48-59-1862S/315426486">
            <img src="./pics/Top picks.png" alt="Top Picks" />
          </a>
        );
      case 1:
        return (
          <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
            <img src="./pics/Appliances.png" alt="..." />
          </a>
        );
      case 2:
        return  (
          <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
            <img src="./pics/Tools.png" alt="..." />
          </a>
        );
      case 3:
      return (
        <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
        <img src="./pics/Outdoor.png" alt="..." />
      </a>
        );
        case 4:
          return (
            <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
            <img src="./pics/Grills.png" alt="..." />
          </a>
          );
          case 5:
            return (
              <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
                  <img src="./pics/Patio.png" alt="..." />
                </a>
            );
            case 6:
              return (
                <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
                    <img src="./pics/Lawn.png" alt="..." />
                  </a>
              );
              case 7:
                return (
                  <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
                  <img src="./pics/Paint.png" alt="..." />
                </a>
                );
            
                   case 8:
                return (
                  <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
                      <img src="./pics/Ceiling.png" alt="..." />
                    </a>
                );
                case 9:
                  return (
                    <a href="https://www.homedepot.com/p/GE-Profile-Profile-27-9-cu-ft-Smart-4-Door-French-Door-Refrigerator-with-Door-in-Door-in-Fingerprint-Resistant-Stainless-Steel-PVD28BYNFS/311411352">
                      <img src="./pics/Cleaning.png" alt="..." />
                    </a>
                  );
              
      default:
        return null;
    }
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
      <div className="ctab">{renderContent()}</div>

  
    </>
  );
};
//what?
export default Categories;
