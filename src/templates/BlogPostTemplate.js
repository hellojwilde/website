import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RichText from "../components/RichText";
import Seo from "../components/Seo";
import Callout from "../components/Callout";

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
          <h2 className="text-4xl lg:text-6xl font-bold text-center mt-6 md:mt-12">
            <Link
              to={canonical}
              className="text-slate-700 hover:text-slate-800 active:text-slate-900 transition-colors"
            >
              {post.title}
            </Link>
          </h2>
          <h3 className="mt-2 text-center text-lg md:text-2xl text-slate-500">
            {post.subtitle}
          </h3>
          <p className="mt-4 md:text-lg flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <span className="flex items-center justify-center space-x-2">
              <StaticImage
                src="../../static/jwilde-headshot.jpg"
                imgClassName="rounded-full"
                width={32}
                height={32}
              />
              <Link
                to="/page/about/"
                className="underline text-jwilde-500 hover:text-jwilde-700 active:text-jwilde-800 transition-colors"
              >
                Jonathan Wilde
              </Link>
            </span>
            <span className="hidden md:inline">&middot;</span>
            <span>{post.publishDate}</span>
          </p>
        </div>

        {post.heroImage && (
          <Callout className="mt-6 md:mt-8">
            <GatsbyImage
              className="md:hidden"
              image={post.heroImage.smallGatsbyImageData}
              alt={post.title}
            />
            <GatsbyImage
              className="hidden md:block"
              image={post.heroImage.gatsbyImageData}
              alt={post.title}
            />
          </Callout>
        )}

        <div className="container mx-auto mt-8 px-6 md:px-12">
          <RichText
            value={post.body}
            className="text-lg md:text-xl mt-6 md:mt-12"
          />

          <div className="bg-slate-200 p-6">
            As always: This cannot and does not contain Legal advice.
            Accordingly, before taking any actions based upon such information,
            we encourage you to consult with the appropriate professionals. The
            use or reliance of any information contained on this site is solely
            at your own risk. See{" "}
            <Link className="underline" to="/page/disclaimer">
              Disclaimer
            </Link>{" "}
            for details.
          </div>
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
        resize(height: 600, width: 1200) {
          src
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 1280
          height: 480
        )
        smallGatsbyImageData: gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 720
          height: 320
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
