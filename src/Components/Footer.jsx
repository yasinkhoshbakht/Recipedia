import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

function Footer() {
  return (
    <div className="flex justify-between py-24 px-24 w-full">
      <div className="w-1/2 justify-between flex flex-col">
        <Logo />
        <div className="pt-14 text-[2rem] flex font-medium justify-between container">
          <ul className="flex flex-col">
            <li className="font-semibold mb-4 text-[3rem]">Menu</li>
            <NavLink className="mb-2 text-[2.0rem]" to="/">
              Home
            </NavLink>
            <NavLink className="text-[2.0rem] mb-2" to="/Recipe">
              Recipe
            </NavLink>
            <NavLink className="mb-2 text-[2.0rem]" to="/Community">
              Community
            </NavLink>
            <NavLink className="mb-2 text-[2.0rem]" to="/About">
              About Us
            </NavLink>
          </ul>
          <ul>
            <li className="mb-4 text-[3rem] font-semibold">Categories</li>
            <li className="mb-2 text-[2.0rem]">Breakfast</li>
            <li className="text-[2.0rem] mb-2">Lunch</li>
            <li className="mb-2 text-[2.0rem]">Dinner</li>
            <li className="text-[2.0rem] mb-2">Dessert</li>
            <li className="mb-2 text-[2.0rem]">Drink</li>
          </ul>
          <ul>
            <li className="text-[3rem] mb-4 font-semibold">Social Media</li>
            <li className="mb-2 text-[2.0rem]">Instagram</li>
            <li className="text-[2.0rem] mb-2">Twitter</li>
            <li className="mb-2 text-[2.0rem]">Youtube</li>
            <li className="text-[2.0rem] mb-2">Facebook</li>
          </ul>
        </div>
      </div>
      <div className="justify-around flex flex-col pt-12">
        <h2 className="font-semibold mb-8 text-[3rem]">
          Sign up for our newsletter
        </h2>
        <form action="" className="relative w-[460px]">
          <input
            placeholder="Your Email Address"
            type="email"
            className="p-2 w-full text-[2.0rem] pr-[120px] border-b-2 border-[#7F7D7D]"
          />
          <button
            type="submit"
            className="absolute right-0 bg-secondaryColor text-white px-6 w-48 text-[2rem] h-20 rounded-3xl bottom-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
