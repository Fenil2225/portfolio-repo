import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), tanstackStart(), nitro(), react(), tsconfigPaths()],
  base: "/",
  ssr: {
    noExternal: ["@tanstack/react-router"],
  },
  server: {
    port: 5173,
    host: "localhost",
  },
});
