import React from "react";
import { AiFillInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-3 flex lg:flex-row flex-col font-urbanist">
      {/* TRENDYMARK */}
      <div className="lg:w-1/3 w-full flex flex-col p-3 lg:mx-5">
        <h5 className="font-bold text-2xl">TRENDYMARK</h5>
        <p className="w-full my-5">
          TrendyMark is your ultimate destination for fashion-forward shopping.
          With a wide range of trendy and stylish clothing, accessories, and
          more, we strive to bring you the latest fashion trends at affordable
          prices. Whether you're looking for the perfect outfit for a special
          occasion or simply want to update your everyday wardrobe, we've got
          you covered. Shop with confidence and stay ahead of the fashion curve
          with TrendyMark.
        </p>
        <div className="flex items-center lg:justify-start justify-evenly">
          <a href="https://www.instagram.com/anzcyent/" target="_blank">
            <AiFillInstagram className="text-[#da4854] text-4xl mx-2" />
          </a>
          <a href="https://github.com/Anzcyent" target="_blank">
            <FaGithubSquare className="text-4xl mx-2" />
          </a>
          <a href="https://twitter.com/Anzcyent" target="_blank">
            <FaTwitter className="text-4xl mx-2 text-[#1d9bf0]" />
          </a>
        </div>
      </div>

      {/* LINKS */}
      <div className="lg:w-1/3 w-full flex flex-col lg:mx-5 p-3">
        <h5 className="font-bold text-2xl">Links</h5>

        <div className="flex">
          <ul className="my-3 lg:w-1/2 w-full">
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Home
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Man Fashion
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Accessories
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Order Tracking
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Wishlist
            </li>
          </ul>

          <ul className="my-3 lg:w-1/2 w-full">
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Cart
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Woman Fashion
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              My Account
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Wishlist
            </li>
            <li className="my-3 mr-5 cursor-pointer font-semibold hover:opacity-70 active:slace-95">
              Terms
            </li>
          </ul>
        </div>
      </div>

      {/* CONTACT */}
      <div className="lg:w-1/3 w-full lg:mx-5 p-3">
        <h5 className="font-bold text-2xl">Contact</h5>

        <div className="my-5">
          <span className="flex items-center">
            <AiFillPhone className="text-2xl mr-3" />
            +90 546 717 74 21
          </span>
          <span className="flex items-center">
            <AiOutlineMail className="text-2xl mr-3 my-3" />
            ozcancihan714@gmail.com
          </span>
        </div>

        <div className="flex justify-start items-center">
          <img
            src="/assets/payments/mastercard.png"
            alt="mastercard"
            className="w-10 mr-3 cursor-pointer"
          />
          <img
            src="/assets/payments/visa.png"
            alt="mastercard"
            className="w-10 mr-3 cursor-pointer"
          />
          <img
            src="/assets/payments/paypal.png"
            alt="mastercard"
            className="w-10 mr-3 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
