"use client";
import React, { useRef } from "react";

function InputArea(props) {
  const currentInput = useRef(null);
  const handleChange = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  const handleShowPassword = () => {
    console.log(currentInput.current?.type);
  };
  return (
    <div className=" flex flex-col text-white md:text-black gap-2">
      <label htmlFor={props.name}>{props.title}</label>
      <div className=" relative w-full flex ">
        <input
          type={props.type}
          id={props.name}
          ref={currentInput}
          className={`${props.className} pb-2  min-w-full mb-5 md:max-w-80  md:min-w-56  border-b md:placeholder:text-black placeholder:text-white bg-transparent  border-[#d0d1d2] focus-visible:ring-0 focus-visible:outline-none focus:ring-0`}
          disabled={props.disabled}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
        {props.type == "password" && <span onClick={handleShowPassword}></span>}
      </div>
    </div>
  );
}

export default InputArea;
