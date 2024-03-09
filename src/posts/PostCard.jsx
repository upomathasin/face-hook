import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostAction from "./PostAction";
import PostComments from "./PostComments";

export default function ({ post }) {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post}></PostHeader>
      <PostBody></PostBody>
      <PostAction></PostAction>
      <PostComments></PostComments>
    </article>
  );
}
