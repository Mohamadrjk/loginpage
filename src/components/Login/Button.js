import React from "react";

function Button(props) {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <button
      className={`${props.className} rounded-lg py-2 min-w-full  flex justify-center items-center  max-w-80  min-w-56 bg-[#166fe1] hover:bg-[#1874ed]  text-white disabled:bg-[#e4e4e4]`}
      disabled={props.disabled}
      onClick={handleClick}
    >
      <span> {props.title}</span>
    </button>
  );
}

export default Button;
