import { graphql, Link } from "gatsby";
import React from "react";
import CTASubscribe from "../components/CTASubscribe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";
import BlogPost from "../components/BlogPost";

const IndexPage = (props) => {
  const posts = props.data.allContentfulBlogPost.nodes;

  return (
    <div>
      <Seo path="/" />
      <Header />

      <CTASubscribe />

      <main>
        <div className="container mx-auto px-6 mt-12 space-y-6 flex flex-col">
          {posts.map((post) => (
            <BlogPost post={post} />
          ))}
        </div>
      </main>

      <div className="mt-8 mx-auto px-6 container">
        <aside className="px-8 pt-8 text-center border-t">
          <p className="text-slate-500">
            I've been blogging since 2008, and archived some of my older posts.
          </p>
          <p className="mt-4">
            <Link
              className="inline-block rounded-lg border-2 border-slate-300 py-2.5 px-4 bg-slate-300 text-slate-800 hover:border-slate-500 hover:text-white hover:bg-slate-500 active:bg-slate-600 active:border-slate-600 transition-colors"
              to="/archive/"
            >
              View the Archive
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
