import React, { useEffect, useState } from "react";
import CreateAcct from "./CreateAcct.jsx";
import RecentViews from "./RecentView.jsx";
import TodaySpecial from "./TodaySpecial.jsx";


const Button = () => {
  const [forceRender, setForceRender] = useState(false);

  const grid1Button = () => {
    // Update the state to trigger a re-render
    setForceRender(!forceRender);
  }
}

const Grid1 = (props) => {
  return (
    <main className="g1-main"> 
    <div class="g1-card-group">
  <div class="g1-card-1">
  <h3 class="card1-title">Benefits Down Every Aisle</h3> <a className="sign-in" href="#">Sign In</a> 
    <img src="https://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Test_and_Target/UX_Assets/Welcome-to-Home-Depot.jpg" class="card1-img" alt="..."/>
    <div class="card1-body">
      <ul>
        <li>Save more with exclusive offers</li>
        <li>Track orders, save receipts</li>
        <li>Get 5% off subscription orders</li>
      </ul>
      <button className="card1-button" onClick= {Button}
      >Create an Account</button>
         </div>
  </div>
  <div class="g1-card-2">
  <h3 class="card2-title">Recently Viewed</h3>
    <div class="card2-body">
      <h5 className="card2-header">Get Back to Shopping</h5>
      <p className="card2-text">Check out our weekly ad for the latest sales</p>
      <ul>
       
      </ul>
      <button className="card2-button" onClick= {Button}
         >Browse Weekly Ad</button>
         </div>
  </div>
  <div class="g1-card-3">
    <section>
      <div class="Card-3-top">
         <h3 class="card3-title">Up to 45% off Select Bathroom Vanities, Fixtures & Accents</h3> 
         {/* <div class="card3-logo">
          <img src="./pics/specialbuylogo.png" class="card3-right-logo" alt="special buy badge" />
         </div> */}
         <div>
         <p class="card3-sub-header">Today Only! Free Delivery</p>
         </div>
       </div>  
  </section>
   <div className="clock-text">
      Ends in 
      13hr 22min 41secs 
  </div>
  <div class="card3-body">
    <a href="">
      <div class="sink-item">
     <img src="https://images.thdstatic.com/productImages/a6a3defc-88b3-4cc4-9cff-548dacf62348/svn/home-decorators-collection-bathroom-vanities-with-tops-sonoma-72c-64_400.jpg" class="card3-img" alt="..."/>
     </div>
     <span class="image-caption">Vanities & Bathroom Sinks (28)</span>
     </a>
     <a href="bathroomsinks">
      <div class="sink-item">
     <img src="https://images.thdstatic.com/productImages/df77a076-e54c-4a9a-9cba-f722f877b022/svn/brushed-nickel-glacier-bay-widespread-bathroom-faucets-hd67111w-6004-64_400.jpg" class="card3-img" alt="..."/>
     </div>
     <span class="image-caption">Bathroom Faucets & Fixtures (28)</span>
     </a>
     <a href="bathroomsinks">
      <div class="sink-item">
     <img src="https://images.thdstatic.com/productImages/82e9be46-4a26-4309-bd67-e921f8e92f20/svn/heirloom-pine-lifeproof-vinyl-plank-flooring-i969104l-64_400.jpg" class="card3-img" alt="...">
     </img>
     </div>
     <span class="image-caption">Bathroom Flooring & Accents (28)</span>
     </a>
     </div>
     <div>
     <button className="card3-button" onClick= {Button}
      >Shop Today's Specials</button>
      </div>
  </div>
</div>
</main>
  );
};

export default Grid1;
