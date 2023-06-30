import React, { useEffect, useState } from "react";
import CreditCard from "./CreditCard.jsx";
import RecentView from "./RecentView.jsx";
import YourStore from "./TodaySpecial.jsx";
import Installation from "./Installation.jsx";


const Button = () => {
  const [forceRender, setForceRender] = useState(false);

  const grid2Button = () => {
    // Update the state to trigger a re-render
    setForceRender(!forceRender);
  }
}

const Grid2 = (props) => {
  return (
    <main className="g2-main">
    <div class="g2-card-group">
  <div class="g2-card-1">
    <img src="https://assets.thdstatic.com/images/v1/home-services/personalized-home-services/php_professionalInstallation_services.jpg" class="g2-card-img" alt="..."/>
   <p className="card1-subhead">Leave Your Next Project to Us</p>
    <h3 class="g2-card1-title">Professional Installation & Services</h3>
    <div class="g2-card1-body">
      <p className="g2-job-done">Get the job done right—The Home Depot adds peace of mind to all your projects</p>
      <ul>
        <li className="bullets">Save more with exclusive offers</li>
        <li>Track orders, save receipts</li>
        <li>Get 5% off subscription orders</li>
      </ul>
      <button className="g2-card1-button" onClick= {Button}
      >Learn More</button>
         </div>
  </div>
  <div class="g2-card-2">
  <h3 class="g2-card2-title">Home Depot Credit Card Offers</h3>
  <img src="https://assets.thdstatic.com/images/v1/plcc-credit-card.png" class="g2-card-2-img" alt="..."/>
    <div class="g2-card2-body">
      <h5>Get The Card, Get Up to $100 Off*</h5>
      <p>+6-months everyday financing on purchases over $299* on your qualifying purchase when you open a Home Depot Credit Card.</p>
      
      <button className="g2-card2-button"  onClick= {Button}
         >Apply Now</button>
         <p>See <a href="">Terms & Conditions</a> for offer details.</p>
         </div>
  </div>
  <div class="g2-card-3">  
         <h3 class="g2-card3-title">Your Store</h3> <a className="g2-change-store" href="">Change Store</a>
         <img src="https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/37.744181,-97.261249/10?mapSize=532,262&key=AoKTFnu3hdkRgVWl45fcxdz0WSDP6hroMDcPKXE4ZkQql3hPt3PtkCDwtNRCYgYA" class="g2-card-img" alt="..."/>
 <div class="card-body">
  <h5 class="g2-location-title">
    <a class="g2-location-title" href="">E Wichita #2204</a>
  </h5>
  <div class="g2-details-container">
    <div>
      <h6 class="g2-address-title">Address</h6>
      <p class="g2-address-text">3350 N Woodlawn</p>
      <p class="g2-address-text">Wichita, KS 67220</p>
      <h6 class="g2-store-number">Store</h6>
      <p class="g2-hours-time">
        <small class="text-body-secondary">
          <a class="g2-hours-time" href="">(316)681-0899</a>
        </small>
      </p>
    </div>
    <div>
      <h6 class="g2-hours-title">Hours</h6>
      <p class="g2-days">Mon-Sat:</p>
      <p class="g2-hours-1">
        <small class="text-body-secondary">6:00am - 10:00pm</small>
      </p>
      <p class="g2-days">Sun:</p>
      <p class="g2-hours-1">
        <small class="text-body-secondary">8:00am - 8:00pm</small>
      </p>
    </div>
  </div>
  <button className="g2-card3-button" onClick={Button}>
    Store Details
  </button>
</div>

  </div>
</div>
</main>
  );
};

export default Grid2;
