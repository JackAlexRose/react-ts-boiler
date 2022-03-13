module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "no-loops",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    "prettier"
  ],
  rules: {
    "no-console": 1,
    "no-loops/no-loops": 2,
    "prettier/prettier": 2
  }
}