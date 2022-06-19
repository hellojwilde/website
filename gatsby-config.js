require("dotenv").config({
  path: ".env",
});

const SITE_URL = `https://jwilde.me`;
const NOINDEX_PATHS = [];

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

const sitemapConfig = {
  query: `
    {
      allSitePage {
        nodes {
          path,
          pageContext
        }
      }
      allContentfulEntry {
        nodes {
          contentful_id
          ... on ContentfulPage {
            updatedAt
          }
          ... on ContentfulBlogPost {
            updatedAt
          }
        }
      }
    }
  `,
  resolveSiteUrl: () => SITE_URL,
  resolvePages: ({
    allSitePage: { nodes: allPages },
    allContentfulEntry: { nodes: allEntries },
  }) => {
    const entryMap = allEntries.reduce((acc, node) => {
      const { contentful_id } = node;
      acc[contentful_id] = node;
      return acc;
    }, {});

    return allPages
      .filter((page) => !NOINDEX_PATHS.includes(page.path))
      .map((page) => {
        return { ...page, ...entryMap[page.pageContext.contentful_id] };
      });
  },
  serialize: ({ path, updatedAt }) => {
    return {
      url: path,
      lastmod: updatedAt,
    };
  },
};

module.exports = {
  siteMetadata: {
    title: `Jonathan Wilde`,
    description:
      "I help tech companies improve products by honoring privacy and keeping people safe.",
    siteUrl: SITE_URL,
    social: {
      twitter: "@hellojwilde",
    },
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
    { resolve: "gatsby-plugin-sitemap", options: sitemapConfig },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-twitter",
    "gatsby-plugin-gatsby-cloud",
  ],
};
