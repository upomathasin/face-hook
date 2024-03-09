import React from "react";

import timeIcon from "../assets/icons/time.svg";
import { getTimeDifference } from "../utils";
import dots from "../assets/icons/3dots.svg";
export default function PostHeader({ post }) {
  console.log(post);
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${post.author.avatar}`}
          alt="avatar"
        />

        <div>
          <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={timeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {getTimeDifference(post?.createAt)}
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <button>
          <img src={dots} alt="3dots of Action" />
        </button>

        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src="./assets/icons/edit.svg" alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src="./assets/icons/delete.svg" alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </header>
  );
}
