import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="f-wrapper">
      <div class="paddings innerWidth flexCenter f-container">
        <div class="flexColStart f-left">
          <img src="./logo2.png" alt="" width="120" />
          <span class="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div class="flexColStart f-right">
          <span class="primaryText">Information</span>
          <span class="secondaryText">Your Location</span>
          <div class="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
