import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...js.configs.recommended.languageOptions.globals,
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
]);
