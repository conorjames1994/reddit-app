import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: 'tests/setup.ts',
    alias: [
      {
        find: "react-redux/es/exports",
        replacement: path.resolve(__dirname, "./node_modules/react-redux/lib/exports"),
      },
    ],
  },
  plugins: [react()]
})