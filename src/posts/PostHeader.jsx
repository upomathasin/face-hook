import React from "react";

import timeIcon from "../assets/icons/time.svg";
export default function PostHeader({ post }) {
  return (
    <header class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        {post.image && (
          <img
            class="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={post.image}
            alt="avatar"
          />
        )}
        <div>
          <h6 class="text-lg lg:text-xl">{post?.author?.name}</h6>
          <div class="flex items-center gap-1.5">
            <img src={timeIcon} alt="time" />
            <span class="text-sm text-gray-400 lg:text-base">
              {post?.createAt}
            </span>
          </div>
        </div>
      </div>

      <div class="relative">
        <button>
          <img src="./assets/icons/3dots.svg" alt="3dots of Action" />
        </button>

        <div class="action-modal-container">
          <button class="action-menu-item hover:text-lwsGreen">
            <img src="./assets/icons/edit.svg" alt="Edit" />
            Edit
          </button>
          <button class="action-menu-item hover:text-red-500">
            <img src="./assets/icons/delete.svg" alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </header>
  );
}
