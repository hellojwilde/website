import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RichText from "../components/RichText";
import Seo from "../components/Seo";

function BlogPostTemplate(props) {
  const post = props.data.contentfulBlogPost;
  const canonical = `/blog/${post.urlDate}/${post.slug}/`;

  return (
    <div>
      <Seo
        title={post.title}
        description={post.subtitle}
        path={canonical}
        image={post.heroImage ? post.heroImage.resize.src : null}
      />
      <Header />
      <main>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center md:mt-6">
            <Link
              to={canonical}
              className="text-jwilde-500 hover:text-jwilde-700"
            >
              {post.title}
            </Link>
          </h2>
          <h3 className="mt-2 text-center text-xl text-slate-500">
            {post.subtitle}
          </h3>
          <p className="mt-2 text-center text-xl"></p>
          <p className="text-xl flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <span className="flex items-center justify-center space-x-2">
              <StaticImage
                src="../../static/jwilde-headshot.jpg"
                imgClassName="rounded-full"
                width={32}
                height={32}
              />
              <Link
                to="/page/about/"
                className="underline text-jwilde-500 hover:text-jwilde-700"
              >
                Jonathan Wilde
              </Link>
            </span>
            <span className="hidden md:inline">&middot;</span>
            <span>{post.publishDate}</span>
          </p>
        </div>

        {post.heroImage && (
          <div className="container mx-auto mt-6 md:mt-8 pl-6 pr-4 md:px-4">
            <GatsbyImage
              className="shadow-[#006bc9_-10px_10px_0_-3px] border-4 border-jwilde-500"
              image={post.heroImage.gatsbyImageData}
              alt={post.title}
            />
          </div>
        )}

        <div className="container mx-auto mt-6 md:mt-8 px-6 md:px-12">
          <RichText value={post.body} className="text-xl mt-6 md:mt-12" />
        </div>
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
      subtitle
      urlDate: publishDate(formatString: "YYYY/MM/DD")
      publishDate(formatString: "dddd, MMMM D, YYYY")
      heroImage {
        resize(height: 630, width: 1200) {
          src
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 1280
          height: 480
        )
      }
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
            body {
              raw
            }
            author
            url
          }
          ... on ContentfulVideo {
            contentful_id
            __typename
            videoId
          }
        }
      }
    }
  }
`;
