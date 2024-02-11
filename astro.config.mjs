import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [icon(), react()],
  output: "hybrid",
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
});
