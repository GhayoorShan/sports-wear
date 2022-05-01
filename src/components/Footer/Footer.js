import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-col">
          <ul className="footer-categories">
            <li>Find a store</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>BECOME A MEMBER</li>
            <li>FEEDBACK</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul className="footer-categories">
            <li>GET HELP </li>
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul className="footer-categories">
            <li>ABOUT </li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul className="footer-categories">
            <li>APPS</li>
            <li>Run Club</li>
            <li>Training Club</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <span>© 2022 Copyright.</span>
        </div>
        <div className="privacy">
          <span>Guides</span>
          <span>Term of use</span>
          <span>Term of sale</span>
          <span>Privacy and cookies policy</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
