import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/data/config";


// https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind(), sitemap(), robotsTxt()],
//   site: SITE_URL,
//   markdown: {
//     syntaxHighlight: "shiki",
//     shikiConfig: {
//       theme: "nord",
//       wrap: false
//     }
//   }
// });


const LIVE_URL = "https://portfolio-erick.github.io";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

const BASE_URL = "erick0711";

// if(isBuild){
//   BASE_URL = SITE_URL;
// }

export default defineConfig({
  site: LIVE_URL,
})