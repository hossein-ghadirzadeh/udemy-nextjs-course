import React from "react";
import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();

  console.log(router.query);

  // URL: blog/2020/12

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default BlogPostsPage;
