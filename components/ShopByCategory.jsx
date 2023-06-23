import React, { useEffect, useState } from "react";

const ShopByCategory = () => {
  return (
    <main>
      <p className="ShopByCategory-title">Shop By Category</p>
      <div className="ShopByCategory-container text-center">
        <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_fathersday.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Father's Day Savings
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_appliances.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Appliances</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_bath.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Bath & Faucets
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_building_materials.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Building materials
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_decor.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Decor & Furniture
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_doors.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Doors & Windows
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_electrical.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Electrical</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_flooring.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Flooring & Area Rugs
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_hardware.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Hardware</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_heating.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Heating & Cooling
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_kitchen.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Kitchen</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_lawn.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Lawn & Garden
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_lighting.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Lighting & Ceiling Fans
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_outdoor.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Outdoor Living
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_paint.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Paint</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_plumbing.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Plumbing</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_storage.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  Storage & Organization
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="category-container">
              <img
                src="./pics/icon_tools.png"
                alt="..."
                className="img-fluid rounded-float-left"
              />
              <div className="p-3">
                <a href="#" className="underline-on-hover">
                  <p className="oneline">Tools</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopByCategory;
