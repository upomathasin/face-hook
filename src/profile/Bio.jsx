import React from "react";

import edit from "../assets/icons/edit.svg";
import useProfile from "../hooks/useProfile";
export default function Bio() {
  const { state } = useProfile();
  console.log("Bio page", state);
  return (
    <div class="mt-4 flex items-start gap-2 lg:mt-6">
      <div class="flex-1">
        <p class="leading-[188%] text-gray-400 lg:text-lg">{state.user.bio}</p>
      </div>

      <button class="flex-center h-7 w-7 rounded-full">
        <img src={edit} alt="Edit" />
      </button>
    </div>
  );
}
