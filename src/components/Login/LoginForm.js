"use client";
import React, { useEffect, useState } from "react";
import InputArea from "@/components/Login/InputArea";
import Button from "@/components/Login/Button";

function LoginForm() {
  // States
  const [EmailInput, setEmailInput] = useState("");
  const [passWordInput, setPassWordInput] = useState("");
  const [isDisabled, setisDisabled] = useState(true);
  const [EmailError, setEmailError] = useState(true);
  const [PasswordError, setPasswordError] = useState(true);
  const EmailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const PasswordRegex = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  //   handlers
  const EmailHandler = (value) => {
    setEmailInput(value);
    if (!EmailRegex.test(EmailInput) || EmailInput.length === 0) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    console.log(EmailRegex.test(EmailInput));
  };
  const PasswordHandler = (value) => {
    setPassWordInput(value);
    if (PasswordRegex.test(passWordInput) || passWordInput.length == 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  useEffect(() => {
    if (PasswordError == true || EmailError == true) {
      setisDisabled(true);
    } else {
      setisDisabled(false);
    }
  }, [PasswordError, EmailError]);
  return (
    <form className="flex flex-col">
      <div className="flex flex-col mb-5">
        <h2 className=" mb-4 text-white md:text-black">Sign-in</h2>
        <InputArea
          name="Email_input"
          onChange={EmailHandler}
          title="Email"
          type="text"
          placeHolder=""
        />
        {EmailError && (
          <span className=" text-red-600">*please enter email address</span>
        )}
        <InputArea
          onChange={PasswordHandler}
          name="Pasword_input"
          title="Password"
          type="password"
          placeHolder=""
        />
        {PasswordError && (
          <span className=" text-red-600">*please enter password</span>
        )}
      </div>
      <Button title="Sign in" disabled={isDisabled} />
    </form>
  );
}

export default LoginForm;
