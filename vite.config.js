import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  
  const base = mode === "gh-pages" ? "/the-jason-store/" : "/";

  return {
    plugins: [react()],
    base: base,
    rollupOptions: {
      input: "index.html",
    },
  };
});
