import React, { useState } from "react";
import editIcon from "../assets/icons/edit.svg";
import delIcon from "../assets/icons/delete.svg";
import timeIcon from "../assets/icons/time.svg";
import { getTimeDifference } from "../utils";
import dots from "../assets/icons/3dots.svg";
import { useAvatar } from "../hooks/useAvatar";
export default function PostHeader({ post }) {
  const { avatarUrl } = useAvatar(post);

  const [showAction, setShowAction] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatarUrl}
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
        <button onClick={() => setShowAction(!showAction)}>
          <img src={dots} alt="3dots of Action" />
        </button>

        {showAction && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={editIcon} alt="Edit" />
              Edit
            </button>
            <button className="action-menu-item hover:text-red-500">
              <img src={delIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
