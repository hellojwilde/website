require("dotenv").config({
  path: ".env",
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

const webFontConfig = {
  typekit: {
    id: process.env.TYPEKIT_ID,
  },
};

module.exports = {
  siteMetadata: {
    title: `Jonathan Wilde`,
    siteUrl: `https://jwilde.me`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: webFontConfig,
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-twitter",
    "gatsby-plugin-gatsby-cloud",
  ],
};
