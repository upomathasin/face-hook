import React from "react";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import useProfile from "../hooks/useProfile";

export default function ProfileInfo() {
  const { state } = useProfile();

  console.log("Profile Info page ", state);
  return (
    <div class="flex flex-col items-center py-8 text-center">
      <ProfileImage></ProfileImage>

      <div>
        <h3 class="text-2xl font-semibold text-white lg:text-[28px]">
          {state.user.firstName}
        </h3>
        <p class="leading-[231%] lg:text-lg">{state.user.email}</p>
      </div>

      <div class="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
}
