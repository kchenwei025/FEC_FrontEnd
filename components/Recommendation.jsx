
import React, { useEffect, useState } from "react";

const Recommendation = () => {
return (
  <div className="recommendations-section">
    <h3 className="recommendations-header">Today's Reccomendations for You</h3>
    <h5 className="recommendation-subheader">No Reccomendations Yet</h5>
    <p className="recommendation-text">We'll provide suggestions as you shop</p>
    <button className="today-special-button">Shop Today's Specials</button>
  </div>
);
};

export default Recommendation;