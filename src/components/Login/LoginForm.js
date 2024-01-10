"use client";
import React, { useEffect, useState } from "react";
import InputArea from "@/components/Login/InputArea";
import Button from "@/components/Login/Button";

function LoginForm() {
  // States
  const [EmailInput, setEmailInput] = useState("");
  const [passWordInput, setPassWordInput] = useState("");
  const [isDisabled, setisDisabled] = useState(true);

  //   handlers
  const EmailHandler = (value) => {
    setEmailInput(value);
  };
  const PasswordHandler = (value) => {
    setPassWordInput(value);
  };
  useEffect(() => {
    if (passWordInput.length == 0 || EmailInput.length == 0) {
      setisDisabled(true);
    } else {
      setisDisabled(false);
    }
  }, [passWordInput, EmailInput]);
  return (
    <form className="flex flex-col">
      <div className="flex flex-col mb-5">
        <h2 className=" mb-4 text-white md:text-black">Sign-in</h2>
        <InputArea
          name="Email_input"
          onChange={EmailHandler}
          title="Email"
          placeHolder=""
        />
        <InputArea
          onChange={PasswordHandler}
          name="Pasword_input"
          title="Password"
          placeHolder=""
        />
      </div>
      <Button title="Sign in" disabled={isDisabled} />
    </form>
  );
}

export default LoginForm;
