module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "no-loops"
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
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    "no-console": 2,
    "no-loops/no-loops": 2
  }
}