"use client";

import React from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { useSelector,useDispatch } from "react-redux";
import { currentUser } from "@/redux/features/auth";
import { logout } from "@/redux/features/auth";

import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const LandlordProfile = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(currentUser)

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    // Perform logout logic here
    dispatch(logout())
      router.push('/auth')
  };

  const handleShowProfile = () => {
    // Perform profile click logic here
    setShowProfile(true);
  };

  const handleCloseProfile = (e) => {
    // Perform profile click logic here
    if (e.target == e.currentTarget) {
      // Clicked on the overlay, close the modal
      e.preventDefault();
      e.stopPropagation();
        setShowProfile(false);
    }
  };

  const handleProfileRoute = ()=>{
    if(user?.role?.name=="TENANT"){
      router.push('/rentals/profile')
    }else{
      router.push('/landlord/profile')
    }
  }

  return (
    <div className="cursor-pointer relative">
      <UserCircleIcon className="w-6" onClick={toggleProfile} />

      {/* control modal */}
      {showProfile && (
        <div
          className="controlModal bg-transparent z-10 fixed top-0 left-0 min-h-screen min-w-full"
          onClick={(e) => {
            handleCloseProfile(e);
          }}
        >          
        </div>
      )}

      {/* Profile Card */}
      {showProfile && (
        <div className="absolute top-8 right-0 bg-white shadow rounded p-4 z-10">
          {/* image and details*/}
          <div className="imageNDetails flex gap-2">
            {/* image */}
            <div className="image w-6 h-6 rounded overflow-hidden">
              {/* unavailable image */}
              <UserCircleIcon className="w-6" />
            </div>

            {/* other details like name and user type */}
            <div className="details flex flex-col gap-1">
              {/* name */}
              <p className="font-medium">{`${user?.first_name} ${user?.last_name}`}</p>
              {/* email address */}
              <p className="italic text-xs">{user?.email}</p>
              {/* userType */}
              <div className="bg-green-200 px-2 py-1 max-w-fit rounded">
                <p className="text-xs text-green-800">{user?.role?.name}</p>
              </div>
            </div>
          </div>

          {/* go to profile and logout buttons */}
          <div className="mt-6 flex flex-col gap-2">
            {/* profile */}
            <div className="flex gap-1 text-xs hover:text-green-600" onClick={()=>{handleProfileRoute()}}>
              <UserIcon className="w-4" />
              <p>Profile </p>
            </div>
            {/* logout */}
            <div className="flex gap-1 text-xs hover:text-green-600" onClick={()=>{handleLogout()}}>
              <ArrowLeftOnRectangleIcon className="w-4" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandlordProfile;
