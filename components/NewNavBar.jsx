import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown } from "react-icons/fa";

import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const NewNavbar = () => {
  return (
    <>
      {/* <div>NewNavbar</div> */}
      <div className="navbar">
        <div className="top">
          <a href="" className="top-link">
            Store Finder
          </a>
          <a href="" className="top-link">
            Truck & Tool Rental
          </a>
          <a href="" className="top-link">
            For The Pro
          </a>
          <a href="" className="top-link">
            Gift Cards
          </a>
          <a href="" className="top-link">
            Credit Services
          </a>
          <a href="" className="top-link">
            Track Order
          </a>
          <a href="" className="top-link">
            Help
          </a>
        </div>
        <div className="mid">
          <div className="mid-left">
            <div className="shopping">
              <div className="shopping-icon">
                <img src={"/pics/logo.png"} width="65" height="65" />
              </div>
              <div>
                <p>You're shopping</p>
                <p className="wichita">
                  <strong>E Wichita</strong>
                  <FaAngleDown
                    className="dropdown-icon"
                    style={{ fontSize: "25px" }}
                  />
                </p>
                <p className="text-color">
                  <strong>OPEN</strong> until 10 pm
                </p>
              </div>
            </div>
            <div className="delivery">
              <p>
                Delivery to <strong>67220</strong>
                <FaAngleDown
                  className="dropdown-icon"
                  style={{ fontSize: "25px" }}
                />
              </p>
            </div>
          </div>
          <div className="mid-center">
            <input
              type="search"
              placeholder="What can we help you find today?"
              className="search-input"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="mid-right">
            <div>
              {/* <Link>My Account</Link> */}
              <a href="">My Account</a>
            </div>
            <FontAwesomeIcon
              icon={faUser}
              className="profile-icon"
              style={{ fontSize: "25px" }}
            />
            <div>
              {/* <Link>Lists</Link> */}
              <a href="">Lists</a>
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className="love-icon"
              style={{ fontSize: "25px" }}
            />
            <div className="cart">
              {/* <Link>Cart</Link> */}
              <a href="">Cart</a>
              <div>0 items</div>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="cart-icon"
                style={{ fontSize: "25px" }}
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <a href="" className="bottom-link">
            All Departments
          </a>
          <a href="" className="bottom-link">
            Home Decor, Furniture & Kitchenware
          </a>
          <a href="" className="bottom-link">
            DIY Projects & Ideas
          </a>
          <a href="" className="bottom-link">
            Project Calculatus
          </a>
          <a href="" className="bottom-link">
            Installation & Services
          </a>
          <a href="" className="bottom-link">
            Special & Offers
          </a>
          <a href="" className="bottom-link">
            Local Ad & Catalog
          </a>
        </div>

        {/* <div className="top">
                <Link className="top-link">Store Finder</Link>
                <Link className="top-link">Truck & Tool Rental</Link>
                <Link className="top-link">For The Pro</Link>
                <Link className="top-link">Gift Cards</Link>
                <Link className="top-link">Credit Services</Link>
                <Link className="top-link">Track Order</Link>
                <Link className="top-link">Help</Link>
            </div> */}
        {/* <div className="mid">
                <div className="mid-left">
                    <div className="shopping">
                        <div className="shopping-icon"></div>
                        <div>
                            <p>You're shopping</p>
                            <p className="wichita"><strong>E Wichita</strong>
                            <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" style={{ fontSize: '25px' }} />
                            </p>
                            <p className="text-color"><strong>OPEN</strong> until 10 pm</p>
                        </div>
                    </div>
                    <div className="delivery">
                        <p>Delivery to <strong>67220</strong>
                        <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" style={{ fontSize: '25px' }} />
                        </p>
                    </div>
                </div>
                <div className="mid-center">
                    <input type="search" placeholder="What can we help you find today?" className="search-input"/>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" style={{ fontSize: '40px' }} />
                </div>
                <div className="mid-right">
                    <div>
                        <Link>My Account</Link>
                    </div>
                    <FontAwesomeIcon icon={faUser} className="profile-icon" style={{ fontSize: '25px' }} />
                    <div>
                        <Link>Lists</Link>
                        
                    </div>
                    <FontAwesomeIcon icon={faHeart} className="love-icon" style={{ fontSize: '25px' }} />
                    <div className="cart">
                        <Link>Cart</Link>
                        <div>0 items
                        </div>
                        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" style={{ fontSize: '25px' }}/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Link className="bottom-link">All Departments</Link>
                <Link className="bottom-link">Home Decor, Furniture & Kitchenware</Link>
                <Link className="bottom-link">DIY Projects & Ideas</Link>
                <Link className="bottom-link">Project Calculatus</Link>
                <Link className="bottom-link">Installation & Services</Link>
                <Link className="bottom-link">Special & Offers</Link>
                <Link className="bottom-link">Local Ad & Catalog</Link>
            </div>*/}
      </div>
    </>
  );
};

export default NewNavbar;
