import globals from "globals";
import pluginJs from "@eslint/js";
import { fixupConfigRules } from "@eslint/compat";

export default {
  overrides: [
    {
      files: ["**/*.js"],
      extends: [
        "eslint:recommended",
        "plugin:@eslint/recommended-recommended",
      ],
      parserOptions: {
        ecmaVersion: 2023,
      },
    },
    {
      files: ["**/*.jsx"],
      extends: [
        "eslint:recommended",
        "plugin:@eslint/recommended-recommended",
        "plugin:react/recommended",
      ],
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
      },
    },
  ],
  globals: globals.browser,
};
