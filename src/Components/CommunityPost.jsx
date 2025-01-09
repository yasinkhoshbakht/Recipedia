import React, { useState } from "react";
import Star from "../assets/svgs/Star.svg";
import Like from "../assets/svgs/Like.svg";
import Share from "../assets/svgs/Share.svg";

function CommunityPost({
  recepyName,
  recepyDescription,
  recepyImage,
  likes,
  username,
  userImage,
  stars,
  id,
}) {
  const [selectedStars, setSelectedStars] = useState(stars);

  const handleStarClick = (starIndex) => {
    setSelectedStars(starIndex);
  };

  const style = [
    { backgroundImage: `url("${userImage}")`, backgroundSize: "cover" },
    { backgroundImage: `url("${recepyImage}")`, backgroundSize: "cover" },
  ];

  return (
    <div
      className="shadow-md py-10 flex w-[575px] rounded-3xl h-[578px] px-8 justify-around flex-col mt-20"
      id={id}
    >
      <div className="gap-9 profile flex items-center">
        <div className="rounded-full h-20 w-20" style={style[0]}></div>
        <div>
          <h2 className="font-semibold text-[2.4rem]">{recepyName}</h2>
          <p className="font-light text-[#7F7D7D] text-[1.6rem]">{username}</p>
        </div>
      </div>

      <div className="recepy">
        <div className="gap-2 stars flex">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={Star}
              alt="star"
              className={`${
                index < selectedStars ? "opacity-100" : "opacity-50"
              } cursor-pointer`}
              onClick={() => handleStarClick(index + 1)}
            />
          ))}
        </div>
        <p className="pb-10 leading-6 text-[1.6rem] font-light pt-10">
          {recepyDescription}
        </p>
        <div
          className="rounded-xl h-[254px] w-full mt-5"
          style={style[1]}
        ></div>
      </div>

      <div className="gap-6 text-[2.4rem] flex">
        <div className="p-1 gap-2 flex items-center likes">
          <img src={Like} alt="" /> {likes}
        </div>

        <div className="flex p-1 gap-2 items-center share">
          <img src={Share} alt="" /> Share
        </div>
      </div>
    </div>
  );
}

export default CommunityPost;
