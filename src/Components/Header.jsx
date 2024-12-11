import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="flex justify-between items-center h-[600px]  font-Inter">
      <div className="leftSection flex flex-col justify-between text-left h-[450px]">
        <h2 className="font-bold text-7xl w-[700px]">
          Cooking Made Fun and Easy: Unleash Your Inner Chef
        </h2>
        <p className="w-[400px] text-gray-500 font-light pb-10">
          Discover more than <span className="text-orange">10,000 recipes</span>{" "}
          in your hand with the best recipe. Help you to find the easiest way to
          cook.
        </p>
        <Button
          text="Explore Recipes"
          size="w-[250px] h-[75px]"
          font="font-medium text-xl"
        />
      </div>
      <div className="rightSection"></div>
    </div>
  );
}

export default Header;
