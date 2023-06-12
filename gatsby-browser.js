import "./src/styles/Global.css";
import posthog from "posthog-js";

const shouldRunAnalytics =
  process.env.NODE_ENV === "production" &&
  !navigator.userAgent.includes("Chrome-Lighthouse") &&
  !navigator.doNotTrack &&
  !document.cookie.includes("is_own_device");

if (shouldRunAnalytics) {
  posthog.init("phc_52rwKAIVnTES7bZwGbOI7lUn2qHzG7PBfo9vKWGIj60", {
    api_host: "https://realworldprivacy.com/e",
    persistence: "memory",
    disable_persistence: true,
  });
}
