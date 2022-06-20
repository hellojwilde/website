import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

import * as RichTextStyles from "./RichText.module.css";

const RichTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const target = node.data.target;

      switch (target.__typename) {
        case "ContentfulVideo":
          return (
            <a
              href={`https://youtube.com/watch?v=${target.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="no-underline group aspect-video bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${target.videoId}/0.jpg)`,
              }}
            >
              <span className="block no-underline bg-jwilde-500 group-hover:bg-jwilde-700 text-white font-bold px-8 py-4 rounded-xl text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                Play Video
              </span>
            </a>
          );
        case "ContentfulTweet":
          return (
            <div className="bg-jwilde-300 rounded-2xl px-8 py-4">
              <p className="font-bold">{target.author}</p>
              <RichText value={target.body} />
              <p>
                <a href={target.url} target="_blank" rel="noreferrer">
                  Read on Twitter
                </a>
              </p>
            </div>
          );
        default:
          throw new Error(`Invalid target ${target.__typename}`);
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const target = node.data.target;
      switch (target.__typename) {
        case "ContentfulAsset":
          return <GatsbyImage image={target.gatsbyImageData} />;
        default:
          throw new Error(`Invalid target ${target.__typename}`);
      }
    },
  },
};

function RichText(props) {
  const { className, value } = props;

  if (value == null) {
    return null;
  }

  return (
    <div className={`${RichTextStyles.wrapper} ${className || ""}`}>
      {renderRichText(value, RichTextOptions)}
    </div>
  );
}

export default RichText;
