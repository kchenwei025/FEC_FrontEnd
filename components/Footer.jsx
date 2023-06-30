import React from "react";

const Footer = () => {
  return (
    <main>
      <div className="topline">
        <div className="alignleft">How doers get more done</div>
        <div className="alignright">Need Help? Please Call us at: 1-800-HOME-DEPOT</div>
      </div>
      <div className="customerService">
      <div className="column">
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            <li style={{ fontSize: "1.1rem" }}>Customer Service</li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Check Order Status</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Pay Your Credit Card</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Order Cancellation</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Returns</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Shipping & Delivery</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Product Recalls</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Help & FAQs</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Privacy & Security Center</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            <li style={{ fontSize: "1.1rem" }}>Resources</li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Specials & Offers</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Military Discount Benefit</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>DIY Projects & Ideas</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Truck & Tool Rental</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Installation & Services</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Moving Supplies & Rentals</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Protection Plans</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Rebate Center</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Gift Cards</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Catalog</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Subscriptions</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
            <li style={{ fontSize: "1.1rem" }}>About Us</li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Careers</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Corporate Information</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Digital Newsroom</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Home Depot Foundation</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Investor Relations</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Government Customers</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Suppliers & Providers</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Affiliate Program</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Eco Actions</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Corporate Responsibility</a>
            </li>
            <li>
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>Home Depot Licensing Information</a>
            </li>
          </ul>
        </div>
        <div className="financing">
          <div className="finance">
            <span className="financingbox">Financing</span>
            <p>
              Special Financing Available everyday*
              <br />
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>
                Pay &amp; Manage Your Card
              </a>
              <br />
              <a href="#" style={{ color: "black", textDecoration: "underline" }}>
                Credit Offers
              </a>
            </p>
          </div>
          <div className="email-signup">
            <p>Get $5 off when you sign up for emails with savings and tips.</p>
            <div>
              <input type="email" placeholder="Enter your email" />
              <button type="button">Go</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footerimage">
        <img src="./pics/footerImage.png" alt="Footer Image" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>

    </main>
  );
};

export default Footer;
