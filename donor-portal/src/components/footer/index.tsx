import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-black">
        <div className="footer-black-top">
          <img
            src="/assets/images/about-us/sl-red-cross-logo.jpg"
            alt="SL Red Cross Logo"
          />
          <div className="icons">
            <p>FOLLOW</p>
            <a href="https://www.facebook.com/pages/Sri-Lanka-Red-Cross-Society/133902706641597">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://twitter.com/SLRedCross">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com/slredcross?igshid=YmMyMTA2M2Y=">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.youtube.com/user/srilankanredcross">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-black-bottom">
          <Link to="/about-us" className="text-link">
            About
          </Link>
          <Link to="/donors" className="text-link">
            Donors
          </Link>
          <Link to="/suppliers" className="text-link">
            Hospital & Suppliers
          </Link>
          <Link to="/news-room" className="text-link">
            Newsroom
          </Link>
          <Link to="/login" className="text-link">
            Login
          </Link>
        </div>
      </div>
      <div className="footer-gray">
        <p>
          Copyright © <a href="www.elixir.redcross.lk">elixir.redcross.lk </a>|
          All rights reserved
        </p>
        <div className="nav">
          <a href="/">Privacy</a>
          <span className="dot">&nbsp;</span>
          <a href="/">Terms</a>
          <span className="dot">&nbsp;</span>
          <a href="/">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
