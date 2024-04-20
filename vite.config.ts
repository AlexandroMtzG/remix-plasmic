import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: { port: 3000 },
  ssr: {
    noExternal: [
      "@plasmicapp/loader-react",
      "@plasmicapp/data-sources-context",
      "@plasmicapp/loader-core",
      "@plasmicapp/loader-fetcher",
      "@plasmicapp/query",
      "@plasmicapp/loader-splits",
      "@plasmicapp/prepass",
    ],
  },
});
