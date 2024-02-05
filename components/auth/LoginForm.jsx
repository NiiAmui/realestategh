import React, { useState } from "react";
import PasswordInput from "./inputs/PasswordInput";
import EmailInput from "./inputs/EmailInput";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useLoginMutation, useTryPingQuery } from "@/redux/features/auth/api";

import { setCredentials } from "@/redux/features/auth";

import { unwrapResult } from "@reduxjs/toolkit";
// import { login } from "@/redux/features/auth/api";

function LoginForm() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const [login] = useLoginMutation();
  const { data, isLoading } = useTryPingQuery();

  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({
      email,
      password,
    })
      .unwrap()
      .then((res) => {
        console.log("resssss", res);
        dispatch(setCredentials(res.token));
        localStorage.setItem("token", res?.token);
        return res.token;
      })
      .then((res) => {
        axios("http://localhost:8080/ping");
      });
  };

  return (
    <form>
      <EmailInput
        onChange={(e) => {
          setemail(e);
        }}
      />
      <PasswordInput className="mt-2" onChange={(e) => setpassword(e)} />

      {/* sign in */}
      <div className="signInBtn mt-8">
        <button
          className="w-full bg-primary text-white h-[45px] rounded-[5px]"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
