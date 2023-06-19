import { Link } from "gatsby";
import React from "react";

function BlogPost(props) {
  const { post } = props;
  return (
    <div>
      <h2 className="text-2xl font-bold">
        <Link
          to={`/blog/${post.urlDate}/${post.slug}/`}
          className="text-slate-700 hover:text-slate-800 active:text-slate-900 transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-lg">{post.subtitle}</p>
      <p className="text-lg text-slate-500">{post.publishDate}</p>
    </div>
  );
}

export default BlogPost;
