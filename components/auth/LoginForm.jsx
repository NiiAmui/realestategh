import React, { useState } from "react";
import PasswordInput from "./inputs/PasswordInput";
import EmailInput from "./inputs/EmailInput";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useLoginMutation, useTryPingQuery } from "@/redux/features/auth/api";

import {
  currentUser,
  setCredentials,
  setUserDetails,
} from "@/redux/features/auth";

import { useSelector } from "react-redux";

import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
// import { login } from "@/redux/features/auth/api";

function LoginForm() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const [login] = useLoginMutation();

  const router = useRouter();

  const dispatch = useDispatch();

  const newUser = useSelector((state) => state.auth.user);
  // const newUser = currentUser()

  const handleLogin = async (e) => {
    e.preventDefault();
    login({
      email,
      password,
    })
      .unwrap()
      .then((res) => {
        dispatch(setCredentials(res.token));
        dispatch(setUserDetails(res.user));
        // localStorage.setItem("token", res?.token);
        return res;
      })
      .then((res) => {
        console.log("new user", newUser);
        if (newUser?.role?.name == "TENANT") {
          router.push("rentals");
        } else if (newUser?.role?.name == "LANDLORD") {
          router.push("landlord");
        } else {
          // handleLogin(e);
        }
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
