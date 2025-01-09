import React from "react";
import CTAImage from "../assets/images/CTAImage.png";
import Button from "./Button";

function CTA() {
  return (
    <div className="w-full rounded-3xl px-24 mt-28 bg-primaryColor">
      <div className="relative text-white bg-Primary flex p-20 flex-col rounded-3xl justify-between h-[420px]">
        <p className="font-semibold w-9/12 text-[4.6rem]">
          Embrace the joy of cooking with get it on your iPhone or Android Your
          kitchen adventure begins now!
        </p>

        <div className="gap-10 flex">
          <Button text="App Store" size="w-[150px] h-[55px]" />
          <Button text="Google Play" size="w-[150px] h-[55px]" />
        </div>
        <img src={CTAImage} alt="" className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
}

export default CTA;
