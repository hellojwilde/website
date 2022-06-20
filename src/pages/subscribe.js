import { graphql, Link } from "gatsby";
import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Seo from "../components/Seo";

const SubscribePage = (props) => {
  return (
    <div className="min-h-screen flex flex-col bg-jwilde-300">
      <Seo title="Subscribe" path="/" />
      <div className="pt-12 flex justify-center">
        <h1>
          <Link
            href="/"
            title="Jonathan Wilde"
            className="text-transparent bg-[url(/jwilde.svg)] bg-contain bg-no-repeat bg-center w-[100px] h-[36px] block overflow-hidden hover:brightness-75"
          >
            Jonathan Wilde
          </Link>
        </h1>
      </div>
      <main className="flex-1 flex items-center">
        <Author />
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;
