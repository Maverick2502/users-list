import react from "@vitejs/plugin-react";
import { Features } from "lightningcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      include: Features.VendorPrefixes,
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
