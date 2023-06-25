import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
  };
});
