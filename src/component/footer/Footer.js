import { Component } from "react";
import express from "../../support/images/kartalar/AmericanExpress-light.png";
import cirrus from "../../support/images/kartalar/Cirrus-light.png";
import maestro from "../../support/images/kartalar/Maestro-light.png";
import masterCard from "../../support/images/kartalar/MasterCard-light.png";
import visa from "../../support/images/kartalar/Visa-light.png";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="footer_qism">
            <div className="footer_logo">
              <h1>LOGO 🍎🥝</h1>
              <p>Address: 60-49 Road 11378 New York</p>
              <p>Phone: +998 99 798-78-40 Email:</p>
              <p>hello@colorlib.com</p>
            </div>
            <div className="full_link">
              <ul>
                <h1>Useful link</h1>
                <li>About Us</li>
                <li>About Our Shop</li>
                <li>Delivery infomation</li>
                <li>Privacy Policy</li>
                <li>Our Sitemap</li>
              </ul>
            </div>
            <div className="footer_link">
              <ul>
                <li>home</li>
                <li>product</li>
                <li>contact</li>
                <li>stores</li>
              </ul>
            </div>
            <div className="download_app">
              <h1>Download App</h1>
              <div className="yuklash">
                <a href="#">
                  <BsApple className="_icon" />
                  <div className="app_store">
                    <p>Available on the</p>
                    <h1>App Store</h1>
                  </div>
                  <span></span>
                </a>
                <a href="#">
                  <FaGooglePlay className="_icon" />
                  <div className="play_market">
                    <p>GET IN ON</p>
                    <h1>google play</h1>
                  </div>
                </a>
              </div>
              <h1>Sign Up for Our Newsletter</h1>
              <form action="#">
                <input type="email" placeholder="enter email address" />
                <button type="button">SUBSCRIBE</button>
              </form>
              <h1>Payment Method</h1>
              <div className="company">
                <img src={visa} alt="вуц" />
                <img src={masterCard} alt="ауц" />
                <img src={maestro} alt="ауца" />
                <img src={cirrus} alt="ауцауц" />
                <img src={express} alt="ауцауц" />
              </div>
            </div>
          </div>
          <p>
            Copyright ©2021 All rights reserved | This template is made with 💚
            by LOGO
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
