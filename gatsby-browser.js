import "./src/styles/Global.css";
import "posthog-js";

posthog.init("phc_FiE4M3UP7J2MU9sACzX46IZBLXNPVEfGQBK7g5Pitzb", {
  api_host: "https://app.posthog.com",
  persistence: "memory",
});
