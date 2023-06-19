import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Callout from "./Callout";

function Author(props) {
  return (
    <Callout
      className={props.className}
      innerClassName="flex flex-col md:flex-row p-6 md:space-x-6 items-center"
    >
      <StaticImage
        src="../../static/jwilde-headshot.jpg"
        className="max-w-[150px] md:max-w-[300px]"
        width={300}
        height={300}
        imgClassName="rounded-full"
      />

      <div className="mt-6 md:mt-0 flex flex-col justify-center text-center md:text-left">
        <h3 class="text-2xl font-bold">Need real world privacy strategies?</h3>
        <p className="md:text-xl mt-2">
          Jonathan Wilde makes data privacy attainable, practical, and valuable
          for fast-moving companies large and small. Don't miss a post.
        </p>
        <form
          action="https://app.convertkit.com/forms/3332155/subscriptions"
          method="post"
          target="_self"
          className="mt-4 flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0"
        >
          <input
            type="email"
            name="email_address"
            placeholder="Your email"
            aria-label="Email"
            id="ck-email"
            className="text-xl border-2 border-slate-300 rounded-lg p-1.5 flex-1"
          />
          <button
            type="submit"
            className="text-xl text-slate-800 bg-gradient-to-br from-sky-400 to-violet-400 text-center hover:brightness-75 active:brightness-50 transition-all font-bold rounded-lg py-3 px-5"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-slate-500 text-sm">
          Unsubscribe any any time. By submitting, you agree to our{" "}
          <Link className="underline" to="/page/terms-of-service/">
            Terms of Service
          </Link>{" "}
          &amp;{" "}
          <Link className="underline" to="/page/privacy-policy/">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </Callout>
  );
}

export default Author;
