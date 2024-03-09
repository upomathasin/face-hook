import React from "react";
import like from "../assets/icons/like.svg";
import comment from "../assets/icons/comment.svg";
import share from "../assets/icons/share.svg";
export default function PostAction({ postId, commentCount }) {
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={like} alt="Like" />
        <span>Like</span>
      </button>

      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={comment} alt="Comment" />
        <span>Comment({commentCount})</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={share} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}
