import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function Author(props) {
  const { large } = props;

  return (
    <div class="author">
      <div class="author-headshot">
        <StaticImage
          src="../../static/jwilde-headshot.jpg"
          class="author-headshot-img"
        />
      </div>
      <div class="author-main">
        <h3 class="author-name">Jonathan Wilde</h3>
        <p class="author-bio">
          Engineer thinking{" "}
          <a href="https://twitter.com/hellojwilde">and tweeting</a> about
          software, networks, and cities. Loves Caltrain more than Joe Biden
          loves Amtrak.{" "}
        </p>

        <form
          action="https://feedburner.google.com/fb/a/mailverify"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=Speedbreeze', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true"
          class="author-subscribe"
        >
          <input
            type="text"
            class="author-subscribe-input"
            name="email"
            placeholder="Enter your email..."
          />
          <input type="hidden" value="Speedbreeze" name="uri" />
          <input type="hidden" name="loc" value="en_US" />
          <input
            type="submit"
            class="author-subscribe-button"
            value="Subscribe"
          />
          <p class="author-subscribe-delivery">
            Delivered by{" "}
            <a href="https://feedburner.google.com" target="_blank">
              FeedBurner
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Author;
