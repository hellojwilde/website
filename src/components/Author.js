import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ConvertKit from "convertkit-react";

function Author(props) {
  return (
    <div className={`${props.className || ""} container mx-auto px-4`}>
      <aside class="flex flex-col md:flex-row shadow-[#006bc9_-10px_10px_0_-3px] border-4 border-jwilde-500 p-6 space-x-6 items-center">
        <StaticImage
          src="../../static/jwilde-headshot.jpg"
          class="rounded-full max-w-[250px]"
        />

        <div className="flex flex-col justify-center">
          <h3 class="text-2xl font-bold">Jonathan Wilde</h3>
          <p class="text-xl">
            Engineer thinking{" "}
            <a href="https://twitter.com/hellojwilde">and tweeting</a> about
            software, networks, and cities. Loves Caltrain more than Joe Biden
            loves Amtrak.{" "}
          </p>

          <ConvertKit
            formId={3332155}
            template="clare"
            hideName={true}
            className="mt-4 "
          />
        </div>
      </aside>
    </div>
  );
}

export default Author;
