// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["./index.js", "kentcdodds/react", "kentcdodds/jsx-a11y"],

  rules: {
    // https://github.com/yannickcr/eslint-plugin-react
    "jsx-a11y/accessible-emoji": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        reservedFirst: ["key"],
      },
    ],
  },
};

module.exports = config;
