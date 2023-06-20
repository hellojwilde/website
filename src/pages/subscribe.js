import React from "react";
import CTASubscribe from "../components/CTASubscribe";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import Logo from "../components/Logo";

const SubscribePage = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Subscribe" path="/" />
      <div className="py-6 md:py-12 flex justify-center">
        <Logo />
      </div>
      <main className="flex-1 flex items-center">
        <CTASubscribe />
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;
