import React from "react";

function Button({ width, height, text }) {
  return (
    <button
      className={`w-[${width}px] bg-secondaryColor h-[${height}px] text-white font-medium rounded-3xl p-4 flex justify-center items-center text-[2rem]`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </button>
  );
}

export default Button;
