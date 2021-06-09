module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
      "plugin:react/recommended",
      "plugin:tailwind/recommended",
      "standard",
      "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true,
          "tsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "prettier"
  ],
  "rules": {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
      "func-names": "off",
      "no-process-exit": "off",
      "object-shorthand": "off",
      "class-methods-use-this": "off",
      "semi": ["error", "never"],
  }
};