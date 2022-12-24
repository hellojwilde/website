import { graphql, Link } from "gatsby";
import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";

const IndexPage = (props) => {
  const posts = props.data.allContentfulBlogPost.nodes;

  return (
    <div>
      <Seo path="/" />
      <Header />
      <main>
        <Author />

        <div className="container mx-auto px-6 md:px-12 mt-12 space-y-6 flex flex-col">
          {posts.map((post) => (
            <div>
              <h2 className="text-2xl font-bold">
                <Link
                  to={`/blog/${post.urlDate}/${post.slug}/`}
                  className="text-jwilde-500 hover:text-jwilde-700"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-lg">{post.subtitle}</p>
              <p className="text-lg text-slate-500">{post.publishDate}</p>
            </div>
          ))}
        </div>
      </main>

      <div className="mt-12 mx-auto px-4 container">
        <aside className="p-8 border-t-2 text-center">
          <p className="text-slate-500">
            I've been blogging since 2008, and archived some of my older posts.
          </p>
          <p className="mt-4">
            <Link
              className="rounded-lg border-2 border-slate-300 py-2.5 px-4 bg-slate-300 text-slate-800 hover:border-jwilde-500 hover:text-white hover:bg-jwilde-500"
              to="/archive/"
            >
              View the Archives
            </Link>
          </p>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlogPost(
      sort: { publishDate: DESC }
      filter: { isArchived: { eq: false } }
    ) {
      nodes {
        title
        subtitle
        slug
        urlDate: publishDate(formatString: "YYYY/MM/DD")
        publishDate(formatString: "dddd, MMMM D, YYYY")
      }
    }
  }
`;
