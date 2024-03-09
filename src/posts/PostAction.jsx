import React from "react";

export default function PostAction() {
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src="./assets/icons/like.svg" alt="Like" />
        <span>Like</span>
      </button>

      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src="./assets/icons/comment.svg" alt="Comment" />
        <span>Comment(2)</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src="./assets/icons/share.svg" alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}
