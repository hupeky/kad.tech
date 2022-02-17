module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended", "plugin:json/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  // plugins: ["prettier"],
  env: {
    browser: true,
  },

  rules,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
        extends: [
        "airbnb-typescript-prettier",
        "plugin:prettier/recommended",
        "prettier",
        "plugin:json/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["prettier"],
      parserOptions: {
        project: "tsconfig.json",
        // tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      rules,
    },
  ],
};
