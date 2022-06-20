import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Author(props) {
  return (
    <div
      className={`${props.className || ""} container mx-auto pl-6 pr-4 md:px-4`}
    >
      <aside class="flex flex-col bg-white md:flex-row shadow-[#006bc9_-10px_10px_0_-3px] border-4 border-jwilde-500 p-6 md:space-x-6 items-center">
        <StaticImage
          src="../../static/jwilde-headshot.jpg"
          className="max-w-[175px] md:max-w-[300px]"
          width={300}
          height={300}
          imgClassName="rounded-full"
        />

        <div className="mt-6 md:mt-0 flex flex-col justify-center text-center md:text-left">
          <h3 class="text-2xl font-bold">
            Need real-world privacy strategies?
          </h3>
          <p className="text-xl mt-2">
            Jonathan Wilde makes data privacy attainable, practical, and
            valuable for fast-moving companies large and small. Don't miss a
            post.
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
              className="text-xl border-2 border-jwilde-300 rounded-lg p-2 flex-1"
            />
            <button
              type="submit"
              className="text-xl border-2 border-jwilde-500 bg-jwilde-500 hover:border-jwilde-700 hover:bg-jwilde-700 text-white font-bold rounded-lg py-2 px-4"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-slate-500 text-sm">
            Unsubscribe any any time. By submitting, you agree to my{" "}
            <Link className="underline" to="/page/privacy-policy/">
              Privacy Policy
            </Link>{" "}
            &amp;{" "}
            <Link className="underline" to="/page/terms-of-service/">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Author;
