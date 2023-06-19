import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RichText from "../components/RichText";
import Seo from "../components/Seo";
import Author from "../components/Author";
import { StaticImage } from "gatsby-plugin-image";

function PageDefaultLayout(props) {
  const page = props.page;
  return (
    <main className="container mx-auto px-6 md:px-20">
      <header className="text-center">
        <h2 className="text-3xl font-bold">{page.title}</h2>
        {page.subtitle && (
          <p className="text-lg text-slate-500">{page.subtitle}</p>
        )}
      </header>
      <RichText value={page.body} className="text-xl mt-6" />
    </main>
  );
}

function PageAboutLayout(props) {
  const page = props.page;
  return (
    <main>
      <article className="container mx-auto px-6 md:px-20">
        <header className="text-center py-6 md:py-0">
          <StaticImage
            src="../../static/jwilde-headshot.jpg"
            className="max-w-[175px] md:max-w-[300px]"
            width={200}
            height={200}
            imgClassName="rounded-full"
          />
        </header>

        <RichText value={page.body} className="text-lg md:text-xl mt-6" />
      </article>
      <Author className="mt-12" />
    </main>
  );
}

function PageLayout(props) {
  const page = props.page;
  switch (page.layout) {
    case "about":
      return <PageAboutLayout page={page} />;
    default:
      return <PageDefaultLayout page={page} />;
  }
}

function PageTemplate(props) {
  const page = props.data.contentfulPage;
  const canonical = `/page/${page.slug}/`;

  return (
    <div>
      <Seo title={page.title} description={page.subtitle} path={canonical} />
      <Header />
      <PageLayout page={page} />
      <Footer />
    </div>
  );
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      subtitle
      layout
      body {
        raw
      }
    }
  }
`;
