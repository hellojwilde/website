import React from "react";
import Callout from "./Callout";
import { Link } from "gatsby";

function CTABookCall(props) {
  return (
    <Callout innerClassName="p-6" className={props.className}>
      <h2 className="text-center text-3xl font-bold">Get started now.</h2>
      <p className="text-center text-lg">
        I'll send you more information, and schedule your free discovery call.
      </p>
      <p className="text-center mt-4">
        <Link
          className="inline-block text-2xl text-white rounded-lg py-2.5 md:py-3.5 px-5 font-bold bg-gradient-to-br from-[#0E55BF] to-[#A1177B] text-center hover:brightness-75 active:brightness-50 transition-all"
          to="https://forms.realworldprivacy.com/t/tBWMvUPe8Bus"
        >
          Get Started →
        </Link>
      </p>
    </Callout>
  );
}

export default CTABookCall;
