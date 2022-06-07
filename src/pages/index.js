import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <Author large />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
