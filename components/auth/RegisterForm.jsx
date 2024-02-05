import React from "react";
import TextInput from "./inputs/TextInput";
import DateInput from "./inputs/DateInput";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";

import { useState } from "react";
import { useDispatch } from "react-redux";

import DropDown from "./inputs/DropDown";

import { useRegisterMutation } from "@/redux/features/auth/api";

const userTypes = [
  { description: "Tenant", value: "TENANT" },
  { description: "LandLord", value: "LANDLORD" },
];

function RegisterForm() {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [birthDate, setBirthday] = useState(null);
  const [userType, setUserType] = useState(null);

  const dispatch = useDispatch();
  const [register] = useRegisterMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    await register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: userType,
    }).unwrap();
  };
  return (
    <form>
      {/* user type - tenant or landlord */}
      <DropDown
        label={`Register as`}
        list={userTypes}
        value={userType}
        setState={setUserType}
        state={userType}
      />

      <TextInput
        label="First name"
        value={firstName}
        onChange={(e) => {
          setfirstName(e);
        }}
        className="mt-4"
      />
      <TextInput
        className="mt-2"
        label="Last Name"
        value={lastName}
        onChange={(e) => {
          setlastName(e);
        }}
      />
      <DateInput
        className="mt-2"
        label="Date of Birth"
        value={birthDate}
        onChange={(e) => {
          setBirthday(e);
        }}
      />
      <EmailInput
        className="mt-2"
        label="Date of Birth"
        value={email}
        onChange={(e) => {
          setemail(e);
        }}
      />
      <PasswordInput
        className="mt-2"
        label="Password"
        value={password}
        onChange={(e) => {
          setpassword(e);
        }}
      />

      {/* sign in */}
      <div className="signInBtn mt-8">
        <button
          className="w-full bg-primary text-white h-[45px] rounded-[5px]"
          onClick={handleRegister}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
