import { graphql, Link } from "gatsby";
import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RichText from "../components/RichText";
import Seo from "../components/Seo";

function BlogPostTemplate(props) {
  const post = props.data.contentfulBlogPost;

  return (
    <div>
      <Seo title={post.title} description={post.subtitle} />
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mt-6">
          <Link
            to={`/blog/${post.urlDate}/${post.slug}/`}
            className="text-jwilde-500 hover:text-jwilde-700"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-center text-xl text-slate-500">{post.publishDate}</p>
        <RichText value={post.body} className="text-xl mt-12" />
      </main>
      <Author className="mt-12" />
      <Footer />
    </div>
  );
}

export default BlogPostTemplate;

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      urlDate: publishDate(formatString: "YYYY/MM/DD")
      publishDate(formatString: "dddd, MMMM D, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1280
            )
          }
          ... on ContentfulTweet {
            contentful_id
            __typename
            blockquote {
              blockquote
            }
          }
          ... on ContentfulVideo {
            contentful_id
            __typename
            url
          }
        }
      }
    }
  }
`;
