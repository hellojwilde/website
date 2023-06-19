import { Link } from "gatsby";
import React from "react";
import Author from "../components/Author";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import Logo from "../components/Logo";

const SubscribePage = (props) => {
  return (
    <div className="min-h-screen flex flex-col bg-jwilde-300">
      <Seo title="Subscribe" path="/" />
      <div className="pt-12 flex justify-center">
        <Logo />
      </div>
      <main className="flex-1 flex items-center">
        <Author />
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;
