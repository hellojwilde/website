import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactPlayer from "react-player";

import * as RichTextStyles from "./RichText.module.css";

const RichTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const target = node.data.target;

      switch (target.__typename) {
        case "ContentfulVideo":
          return (
            <div className="aspect-video">
              <ReactPlayer
                url={target.url}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          );
        case "ContentfulTweet":
          return (
            <div
              dangerouslySetInnerHTML={{ __html: target.blockquote.blockquote }}
            />
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
