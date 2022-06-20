import "./src/styles/Global.css";
import posthog from "posthog-js";

const shouldRunAnalytics =
  process.env.NODE_ENV === "production" &&
  !navigator.userAgent.includes("Chrome-Lighthouse") &&
  !navigator.doNotTrack &&
  !document.cookie.includes("is_own_device");

if (shouldRunAnalytics) {
  posthog.init("phc_FiE4M3UP7J2MU9sACzX46IZBLXNPVEfGQBK7g5Pitzb", {
    api_host: "https://app.posthog.com",
    persistence: "memory",
    disable_persistence: true,
  });
}
