import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostAction from "./PostAction";
import PostComments from "./PostComments";

export default function ({ post }) {
  console.log(post);
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post}></PostHeader>
      <PostBody poster={post?.image} content={post?.content}></PostBody>
      <PostAction
        postId={post?.id}
        commentCount={post?.comments.length}
      ></PostAction>
      <PostComments comments={post?.comments}></PostComments>
    </article>
  );
}
