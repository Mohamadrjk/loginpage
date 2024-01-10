"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

function InputArea(props) {
  // change event handler
  const handleChange = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  // password  show/hide toggler
  const [passwordType, setPaswordType] = useState("password");
  const handleShowPassword = () => {
    passwordType == "password"
      ? setPaswordType("text")
      : setPaswordType("password");
  };
  return (
    <div className=" flex flex-col text-white md:text-black gap-2">
      <label htmlFor={props.name}>{props.title}</label>
      <div className=" relative w-full flex ">
        <input
          type={props.type != "password" ? props.type : passwordType}
          id={props.name}
          className={`${props.className} pb-2  min-w-full mb-5 md:max-w-80  md:min-w-56  border-b md:placeholder:text-black placeholder:text-white bg-transparent  border-[#d0d1d2] focus-visible:ring-0 focus-visible:outline-none focus:ring-0`}
          disabled={props.disabled}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
        {props.type == "password" && (
          <span
            onClick={handleShowPassword}
            className="absolute right-0 top-0 cursor-pointer "
          >
            {passwordType == "text" ? (
              <Image width={25} height={25} src={"/assets/hide.png"} />
            ) : (
              <Image width={25} height={25} src={"/assets/show.png"} />
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputArea;
