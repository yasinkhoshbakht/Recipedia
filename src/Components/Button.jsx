import React from "react";

function Button({ text, size, font }) {
  return (
    <button className={`bg-orange rounded-3xl ${size} ${font} text-white`}>
      {text}
    </button>
  );
}

export default Button;
