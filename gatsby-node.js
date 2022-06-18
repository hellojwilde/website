const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  const result = await graphql(
    `
      {
        allContentfulPage {
          nodes {
            slug
            redirects
          }
        }
        allContentfulBlogPost {
          nodes {
            slug
            publishDate(formatString: "YYYY/MM/DD")
            redirects
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const PageTemplate = path.resolve("./src/templates/PageTemplate.js");
  for (let page of result.data.allContentfulPage.nodes) {
    createPage({
      path: `/page/${page.slug}/`,
      component: PageTemplate,
      context: {
        slug: page.slug,
      },
    });
    for (let redirect of page.redirects || []) {
      createRedirect({
        isPermanent: true,
        fromPath: redirect,
        toPath: `/page/${page.slug}/`,
      });
    }
  }

  const BlogPostTemplate = path.resolve("./src/templates/BlogPostTemplate.js");
  for (let post of result.data.allContentfulBlogPost.nodes) {
    createPage({
      path: `/blog/${post.publishDate}/${post.slug}/`,
      component: BlogPostTemplate,
      context: {
        slug: post.slug,
      },
    });
    for (let redirect of post.redirects || []) {
      createRedirect({
        isPermanent: true,
        fromPath: redirect,
        toPath: `/blog/${post.publishDate}/${post.slug}/`,
      });
    }
  }
};
