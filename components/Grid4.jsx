import React, { useEffect, useState } from "react";


 
const Button = () => {
    const [forceRender, setForceRender] = useState(false);
  
    const grid4Button = () => {
      // Update the state to trigger a re-render
      setForceRender(!forceRender);
    }
};

const Grid4 = (props) => {
    return(
        <main>
            <h2 className="July-title" >Do 4th of July up Big</h2>
        <div class="G4-container">
        <div class="row row-cols-3 g-4">
          <div class="G4-col">
            <div class="G4-card">
              <img src="https://images.ctfassets.net/7rldri896b2a/6Xo8fTbtNykboYuzyvdhJ3/4db10ff05c50901a5d516f5d16caa692/spotlight1-rwb__1_.png" class="G4-card-img-top" alt="..."/>
              <div class="G4-card-body">
                <h5 class="G4-card-title" >UP TO 35% OFF</h5>
                <p class="g4-card-text">Select Appliances</p>
                <div>
                    <a href="">
                <button className="G4-shop-button" onClick= {Button}
                   >Shop Now</button>
                   </a>
                </div>
              </div>
            </div>
          </div>
          <div class="G4-col">
            <div class="G4-card">
              <img src="https://images.ctfassets.net/7rldri896b2a/wo04kYGsHUXgr4DYoxIX0/997a44c6d912ea85776f47f0826bf250/tools-rwb-spotlight.png" class="G4-card-img-top" alt="..."/>
              <div class="G4-card-body">
                <h5 class="G4-card-title">UP TO $120 OFF</h5>
                <p class="g4-card-text">Select Power Tools & Outdoor Power Equipment</p>
                <div>
                    <a href="">
                <button className="G4-shop-button" onClick= {Button}
                   >Shop Now</button>
                   </a>
                </div>
              </div>
            </div>
          </div>
          <div class="G4-col">
            <div class="G4-card">
              <img src="https://images.ctfassets.net/7rldri896b2a/6kGeow34jv7UnEF2Bf6RY1/6454a5a9da39f5aa09036de122622eca/grill.png" class="G4-card-img-top" alt="..."/>
              <div class="G4-card-body">
                <h5 class="G4-card-title">FREE DELIVERY</h5>
                <p class="g4-card-text">Grills $399 or More</p>
                <div>
                    <a href="">
                <button className="G4-shop-button" onClick= {Button}
                   >Shop Now</button>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row row-cols-3 g-4">
          <div class="G4-col">
            <div class="G4-card">
              <img src="https://images.ctfassets.net/7rldri896b2a/4bdzMc2okOAGcZkcE4yKWc/5189ae69c39079a3e08f544b52d5c424/RWBpatio.png" class="G4-card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="G4-card-title">UP TO 60% OFF</h5>
                <p class="g4-card-text">Select Patio Furniture</p>
                <div>
                    <a href="">
                <button className="G4-shop-button" onClick= {Button}
                   >Shop Now</button>
                   </a>
                </div>
              </div>
            </div>
          </div>
          <div class="G4-col">
            <div class="G4-card">
              <img src="https://images.ctfassets.net/7rldri896b2a/24to0GJz6wl6CScSkZU0Bu/6fe112e5d274ff77440319c0d9f13407/livegoods__1_.png" class="G4-card-img-top" alt="..."/>
              <div class="G4-card-body">
                <h5 class="G4-card-title">THRIVE IN THE HEAT</h5>
                <p class="g4-card-text">Lawn & Garden Must-Haves</p>
                <div>
                    <a href="">
                <button className="G4-shop-button" onClick= {Button}
                   >Shop Now</button>
                   </a>
                </div>
              </div>
            </div>
          </div>
          <div class="G4-col">
            <div class="G4-card">
              <img src="https://images.ctfassets.net/7rldri896b2a/2vqydaVv755GY9Ty4RyZN2/6abd78eab5049d175299d65a23d5fd7c/Paint_6-22__2___1___1_.jpg" class="G4-card-img-top" alt="..."/>
              <div class="G4-card-body">
                <h5 class="G4-card-title">REFRESH YOUR SPACE</h5>
                <p class="g4-card-text">Paints & Supplies for Summer updates</p>
                <div>
                    <a href="">
                <button className="G4-shop-button" onClick= {Button}
                   >Shop Now</button>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    );
};


export default Grid4;