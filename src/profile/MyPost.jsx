import React from "react";
import useProfile from "../hooks/useProfile";
import PostList from "../posts/PostList";
import { getTimeDifference } from "../utils";

export default function MyPost() {
  const { state } = useProfile();
  const posts = state?.posts;
  console.log(posts);

  return (
    <div>
      <h4 class="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

      <PostList posts={posts}></PostList>
    </div>
  );
}
