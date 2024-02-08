"use client";

import React from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { currentUser } from "@/redux/features/auth";

import { useUpdateuserMutation } from "@/redux/features/auth/api";

const page = () => {
  const user = useSelector(currentUser);
  const [updateUser, { isLoading, error }] = useUpdateuserMutation();

  const [firstname, setfirstname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [about, setabout] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    await updateUser({
      userDetails: {
        birthdate: birthdate,
        email: email,
        facebook: facebook,
        firstName: about,
        instagram: instagram,
        lastName: lastName,
        twitter: twitter,
      },
      id: user?.id,
    });
  };

  useEffect(() => {
    if (user) {
      setfirstname(user.first_name);
      setlastName(user.last_name);
      setEmail(user.email);
      setFacebook(user?.facebook)
      setabout(user.about)
      setBirthdate(user?.birthdate)
      setInstagram(user.instagram)
      setTwitter(user.twitter)
    }
  }, [user]);

  return (
    <div className="grid grid-cols-2 m-4 gap-8 mb-14">
      {/* left section */}
      <section className="flex flex-col gap-8">
        {/* profile Image */}
        <div className="profileImage border bg-white rounded p-4">
          {/* image Container */}
          <div className="imageContainer bg-gray-300 rounded h-24 relative">
            {/* image */}
            <div className="imageContainer absolute -bottom-8 w-full flex justify-center">
              <img
                alt="profile Image"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720"
                className="w-20 h-20 rounded-full "
              />
            </div>
          </div>

          {/* Name and Role type */}
          <div className="mt-8 text-center mb-2">
            <p className="text-sm font-semibold">{`${user.first_name} ${user.last_name}`}</p>
            <p>
              <span className="text-xs text-gray-400">Account type:</span>{" "}
              <span className="text-xs font-medium">{user?.role?.name}</span>
            </p>
          </div>
        </div>

        {/* Account Settings */}
        <div className="profileImage border bg-white rounded p-4 h-full">
          {/* Account settings */}
          <p className="font-medium">Account Settings</p>
          {/* description */}
          <p className="text-xs text-gray-400">
            Here you can change your account information
          </p>

          {/* USER DETAILS */}
          <div className="userDetails grid grid-cols-2 gap-4 text-sm">
            {/* First Name */}
            <div className="mt-4 text-gray-600">
              <label className="text-sm">Firstname</label>
              <input
                type="text"
                placeholder="Schiller Villa of Atlantis"
                className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </div>
            {/* Last Name */}
            <div className="mt-4 text-gray-600">
              <label className="text-sm">Lastname</label>
              <input
                type="text"
                placeholder="Schiller Villa of Atlantis"
                className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            {/* Email */}
            <div className="text-gray-600">
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="Schiller Villa of Atlantis"
                className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Birthdate */}
            <div className="text-gray-600">
              <label className="text-sm">Birthdate</label>
              <input
                type="date"
                className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            {/* about Me */}
            <div className="text-gray-600 col-span-2 text-sm">
              <label className="text-sm">About</label>
              <textarea
                rows={4}
                className="border w-full rounded px-2 py-1 mt-1"
                value={about}
                onChange={(e) => setabout(e.target.value)}
              />
            </div>
          </div>

          {/* update button */}
          <div className="mt-4 text-sm">
            <button className="bg-orange-500 text-white px-8 py-2 rounded" onClick={(e)=>{handleUpdateUser(e)}}>
              Save changes
            </button>
          </div>
        </div>
      </section>

      {/* right section */}
      <section className="flex flex-col gap-8 h-full">
        {/* Social Profiles */}
        <div className="border bg-white rounded p-4 h-full text-sm">
          {/* Social Profiles */}
          <p className="font-medium">Social Profiles</p>
          {/* description */}
          <p className="text-xs text-gray-400">
            Here you can change your social profiles
          </p>

          {/* Twitter username */}
          <div className="text-gray-600 mt-4">
            <label className="text-sm">Twitter Username</label>
            <input
              type="text"
              placeholder=""
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          {/* facebook username */}
          <div className="text-gray-600 mt-2">
            <label className="text-sm">Facebook Username</label>
            <input
              type="text"
              placeholder=""
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          {/* Instagram username */}
          <div className="text-gray-600 mt-2">
            <label className="text-sm">Instagram Username</label>
            <input
              type="text"
              placeholder=""
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>

          {/* update button */}
          <div className="mt-4 text-sm">
            <button className="bg-orange-500 text-white px-8 py-2 rounded" onClick={(e)=>{handleUpdateUser(e)}}>
              Save changes
            </button>
          </div>
        </div>

        {/* Change Password */}
        <div className="border bg-white rounded p-4 h-full">
          {/* passwprd change */}
          <p className="font-medium">Change Password</p>
          {/* description */}
          <p className="text-xs text-gray-400">
            Here you can set your new password
          </p>

          {/* Old Password */}
          <div className="text-gray-600 mt-4">
            <label className="text-sm">Old Password</label>
            <input
              type="text"
              placeholder=""
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* New Password */}
          <div className="text-gray-600 mt-2">
            <label className="text-sm">New Password</label>
            <input
              type="password"
              placeholder=""
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>
          {/* New Password confirmation */}
          <div className="text-gray-600 mt-2">
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder=""
              className="border w-full rounded px-2 py-1 mt-1  h-[35px]"
            />
          </div>

          {/* update button */}
          <div className="mt-4 text-sm">
            <button className="bg-orange-500 text-white px-8 py-2 rounded">
              Change Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
