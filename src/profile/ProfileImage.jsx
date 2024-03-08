import React from "react";
import useProfile from "../hooks/useProfile";
import edit from "../assets/icons/edit.svg";
export default function ProfileImage() {
  const { state } = useProfile();
  console.log("ProfileImg ", state);
  return (
    <div class="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        class="max-w-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state.user.avatar}`}
        alt="pic"
      />

      <button class="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">
        <img src={edit} alt="Edit" />
      </button>
    </div>
  );
}
