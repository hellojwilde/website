import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

import * as RichTextStyles from "./RichText.module.css";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

function Video(props) {
  const { className, videoId, ...otherProps } = props;

  return (
    <a
      href={`https://youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noreferrer"
      className={`my-6 no-underline group aspect-video bg-cover bg-center flex items-center justify-center ${
        className || ""
      }`}
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/0.jpg)`,
      }}
      {...otherProps}
    >
      <span className="block no-underline bg-gradient-to-br from-[#0E55BF] to-[#A1177B] group-hover:brightness-75 group-active:brightness-50 transition-all text-white font-bold px-8 py-4 rounded-xl text-2xl shadow">
        <PlayCircleIcon className="h-7 w-7 inline" /> Play Video
      </span>
    </a>
  );
}

const RichTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const target = node.data.target;

      switch (target.__typename) {
        case "ContentfulVideo":
          return (
            <Video
              videoId={target.videoId}
              className="my-10 border-4 border-slate-600"
            />
          );
        case "ContentfulTweet":
          return (
            <div className="my-6 px-8 py-4 border-4 border-slate-600">
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
          return (
            <GatsbyImage
              image={target.gatsbyImageData}
              className="my-10 border-4 border-slate-600"
            />
          );
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
