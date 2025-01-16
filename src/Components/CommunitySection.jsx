import React, { useContext } from "react";
import CommunityPost from "./CommunityPost";
import { FoodDataContext } from "../Contexts/foodDataContext";

function CommunitySection({ limit = true }) {
  const { commentData } = useContext(FoodDataContext);

  // بررسی داده‌ها و ایجاد ساختار مناسب
  const commentsToRender = commentData.data.map((item) => ({
    recepyName: item.recepyName || null,
    recepyDescription: item.recepyDescription || item.body || "",
    recepyImage: item.recepyImage || "",
    likes: item.likes || 0,
    username: item.username || item.userName || "Anonymous",
    userImage: item.userImage || "",
    stars: item.stars || 0,
    id: item.id,
  }));

  const limitedComments = limit
    ? commentsToRender.slice(0, 4)
    : commentsToRender;

  return (
    <div className="mt-24 CommunitySection items-center px-24 flex flex-col">
      <h2 className="text-[4.6rem] font-semibold">From Our Community</h2>
      <div className="container flex justify-between flex-wrap w-full">
        {limitedComments.map((item) => (
          <CommunityPost
            key={item.id}
            recepyName={item.recepyName}
            recepyDescription={item.recepyDescription}
            recepyImage={item.recepyImage}
            likes={item.likes}
            username={item.username}
            userImage={item.userImage}
            stars={item.stars}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CommunitySection;
