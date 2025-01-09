import React from "react";
import AboutUsImage from "../assets/images/AboutUs.jpg";
import Button from "./Button";

function AboutUs() {
  return (
    <div
      className="relative mt-[100vh] h-[567px] bg-cover bg-center"
      style={{
        backgroundImage: `url("${AboutUsImage}")`,
        marginLeft: "-100px",
        marginRight: "-100px",
      }}
    >
      <div className="bg-[#ffffff] w-[578px] h-[430px] rounded-3xl py-12 px-11 absolute right-[10%] top-[15%] flex flex-col justify-around shadow-lg">
        <h2 className="font-semibold text-[4.6rem]">About Us</h2>
        <p className="font-normal text-[2rem] leading-8">
          Our recipes are the heart and soul of our culinary community, and they
          reflect our commitment to providing you with memorable and delightful
          dining experiences.
        </p>
        <Button text="Learn More" size="w-[200px] h-[55px]" />
      </div>
      <div className="text-[1.5rem] font-medium text-primaryColor bg-[#ffffff] w-80 h-32 p-6 rounded-lg absolute bottom-[10%] left-[10%] shadow">
        50+ Quick Food Recipes That Easy To Do!
      </div>
    </div>
  );
}

export default AboutUs;
