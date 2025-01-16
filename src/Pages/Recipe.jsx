import React from "react";
import PopularRecepies from "../Components/PopularRecepies";

function Recipe() {
  return (
    <div className="pb-[380vh] mt-[-10vh]">
      <PopularRecepies limit={false} />
    </div>
  );
}

export default Recipe;
