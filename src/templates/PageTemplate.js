import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RichText from "../components/RichText";
import Seo from "../components/Seo";

function PageTemplate(props) {
  const page = props.data.contentfulPage;
  const canonical = `/page/${page.slug}/`;

  return (
    <div>
      <Seo title={page.title} description={page.subtitle} path={canonical} />
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-center">{page.title}</h2>
          {page.subtitle && (
            <p className="text-lg text-slate-500">{page.subtitle}</p>
          )}
        </header>
        <RichText value={page.body} className="text-xl mt-6" />
      </main>
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
      body {
        raw
      }
    }
  }
`;
