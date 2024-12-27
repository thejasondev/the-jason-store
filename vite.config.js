import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/the-jason-store/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
});
