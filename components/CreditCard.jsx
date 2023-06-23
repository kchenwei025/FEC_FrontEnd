import React, { useState } from 'react';

const Installation = () => {
  const [forceRender, setForceRender] = useState(false);

  const learnButton = () => {
    // Update the state to trigger a re-render
    setForceRender(!forceRender);
  }
}

const CreditCard = () => {
  return(
    <div className="grid2col">
    <a href="#" className="card grid2card">
      <h1 className="grid2card-header">Home Depot Credit Card Offers</h1>
      <img
        src="https://assets.thdstatic.com/images/v1/plcc-credit-card.png"
        className="grid2icon"
        alt="..."
      />
      <hr />
      <div className="grid2card-body">
        <h5 className="grid2card-title">Get The Card, Get Up to $100 Off*</h5>
        <p className="grid2card-text">
        +6-months everyday financing on purchases over $299* on your qualifying purchase when you open a Home Depot Credit Card.
        </p>
        
        <button onClick= {Installation}
        >Apply Now</button>
        <p>
        See Terms & Conditions for offer details.
        </p>
      </div>
    </a>
  </div>
  );
};

export default CreditCard;
