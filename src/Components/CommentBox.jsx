import React from "react";
import star from "../assets/icons/Star.svg";

function CommentBox({ commentText, userName, userImage, rating, top, left }) {
  const ratingStars = Array.from({ length: rating });

  return (
    <div
      className="absolute w-[220px] h-[216px] p-[8px] flex flex-col rounded-xl bg-white shadow-comment justify-between"
      style={{ left: left, top: top }}
    >
      <div className="rounded-xl bg-[#F1F3F7] p-[14px] w-full h-[143px] inner-box">
        <div className="flex rating">
          {ratingStars.map((_, index) => (
            <img className="h-4 w-4" key={index} src={star} alt="star" />
          ))}
        </div>
        <p className="text-[1.6rem]">{commentText}</p>
      </div>
      <div className="row flex items-center">
        <div className="profile flex items-center">
          <div
            className="overflow-hidden w-[30px] rounded-full h-[30px]"
            style={{
              backgroundImage: `url(${userImage})`,
              backgroundSize: "cover",
            }}
          ></div>
          <span className="text-[1.6rem] ml-2">{userName}</span>
        </div>
        <svg
          className="ml-auto"
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5063 18.3453L3.01888 10.6574C-1.59384 6.0447 5.18686 -2.81173 11.5063 4.35337C17.8257 -2.81173 24.5757 6.07545 19.9937 10.6574L11.5063 18.3453Z"
            stroke="black"
            strokeWidth="1.50225"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CommentBox;
