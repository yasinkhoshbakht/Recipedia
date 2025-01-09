import React from "react";
import Button from "./Button";
import CommentBox from "./CommentBox";
import heroImage from "../assets/images/hero-image.png";
import tomato from "../assets/icons/Tomato.svg";
import garlic from "../assets/icons/Garlic.svg";
import broccoli from "../assets/icons/Broccoli.svg";
import userProfile from "../assets/images/user-profile.jpg";
import userProfile2 from "../assets/images/user-profile2.jpg";

function Header() {
  return (
    <header className="flex justify-between pt-44 items-center h-[70vh]">
      <div className="w-1/2 relative flex flex-col justify-around h-full left-part leading-[80px]">
        <h1 className="text-[6.4rem] font-bold">
          Cooking Made Fun and Easy: Unleash Your Inner Chef
        </h1>
        <p className="text-gray font-light text-[1.6rem] leading-[24px]">
          Discover more than{" "}
          <span className="text-secondaryColor text-[1.6rem]">
            10,000 recipes
          </span>{" "}
          in your hand with the <br /> best recipe. Help you to find the easiest
          way to cook.
        </p>
        <Button text="Explore Recipes" width={250} height={75} />
        <img src={garlic} alt="" className="absolute left-[55vh] top-[48vh]" />
      </div>
      <div className="relative flex flex-col right-part items-end w-1/2">
        <img src={tomato} alt="" className="self-start top-52 relative" />
        <img
          src={heroImage}
          alt=""
          className="relative z-0 max-w-[620px] right-0"
        />
        <div className="absolute flex w-[1000px] top-[30vh] h-[500px] gap-4 row">
          <CommentBox
            commentText='"The recipes here are not only delicious but also easy to follow."'
            userName="Sarah M."
            userImage={userProfile2}
            top="20vh"
            rating={5}
            left="42vh"
          />
          <CommentBox
            commentText='"I ve discovered a treasure trove of meatless recipes that have made my meals."'
            userName="Farellin J."
            userImage={userProfile}
            rating={5}
            top="6vh"
            left="70vh"
          />
        </div>
        <img src={broccoli} />
      </div>
    </header>
  );
}

export default Header;
