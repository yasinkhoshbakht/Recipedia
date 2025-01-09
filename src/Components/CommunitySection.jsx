import React from "react";
import { useState, useEffect } from "react";
import CommunityPost from "./CommunityPost";

function CommunitySection() {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => setCommunityData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-24 CommunitySection items-center px-24 flex flex-col">
      <h2 className="text-[4.6rem] font-semibold">From Our Community</h2>
      <div className="container flex justify-between flex-wrap w-full">
        {communityData.map((item) => (
          <CommunityPost
            recepyName={item.recepyName}
            recepyDescription={item.recepyDescription}
            recepyImage={item.recepyImage}
            likes={item.likes}
            username={item.username}
            userImage={item.userImage}
            stars={item.stars}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CommunitySection;
