import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "0.0.0.0",
    hmr: {
      clientPort: 443,
    },
  },
  build: {
    target: "esnext",
  },
});
