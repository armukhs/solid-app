import solid from "solid-start/vite";
import { D1Database } from "@cloudflare/workers-types";
import { defineConfig } from "vite";
import cloudflare from "solid-start-cloudflare-pages";

export default defineConfig({
  plugins: [solid({ adapter: cloudflare({
    // COUNTRIES: D1Database,
    d1_databases: ['COUNTRIES'],
  }) })],
});
