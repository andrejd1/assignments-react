import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    define: {
        "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    },
});

console.log(process.env.VITE_API_URL);
