import React, { useState, useEffect } from "react";
import Button from "./Button";
import RecepieCard from "./RecepieCard";

function PopularRecepies() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((response) => response.json())
      .then((data) => setPopularRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-[200px]">
      <div className="row w-full flex justify-between">
        <div className="title-box">
          <h2 className="text-[4.6rem] font-bold">Discover, Create, Share</h2>
          <span className="text-[2.4rem]">
            Check our most popular recipes of this week
          </span>
        </div>
        <Button text="See All" height={55} width={150} />
      </div>
      <div className="recepeis-container flex justify-between flex-wrap pt-[70px] w-full h-[254px]">
        {popularRecipes.map((food) => (
          <RecepieCard
            key={food.id}
            name={food.name}
            serving={food.servingNumber}
            id={food.id}
            time={food.cookingDuration}
            level={food.cookingLevel}
            image={food.image}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularRecepies;
