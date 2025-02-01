import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/quiz": {
        target: "https://api.jsonserve.com/Uw5CrX",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/quiz/, ""),
      },
    },
  },
});
