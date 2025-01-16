import React, { createContext } from "react";
import useFoodData from "../Hooks/useFoodData";

export const FoodDataContext = createContext();

function FoodDataProvider({ children }) {
  const foodData = useFoodData("http://localhost:3000/foods");
  const commentData = useFoodData("http://localhost:3000/comments");

  return (
    <FoodDataContext.Provider value={{ foodData, commentData }}>
      {children}
    </FoodDataContext.Provider>
  );
}

export default FoodDataProvider;
