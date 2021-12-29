// @ts-check

/** @type {string[]} */
const ignoredImportExtensions = [
  "bmp",
  "client",
  "css",
  "gif",
  "graphql",
  "ico",
  "jpeg",
  "jpg",
  "json",
  "png",
  "server",
  "svg",
  "webp",
  //
];

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["kentcdodds", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],

  rules: {
    // https://github.com/import-js/eslint-plugin-import
    "import/extensions": [
      "warn",
      "never",
      Object.fromEntries(ignoredImportExtensions.map((ext) => [ext, "ignorePackages"])),
    ],
    "import/newline-after-import": "warn",
    "import/order": "off",
    "sort-imports": "off",

    // https://github.com/lydell/eslint-plugin-simple-import-sort
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^.+\\.s?css$"],
          ["^\\u0000"],
          ["^react$", "^react-dom$"],
          ["^~", "^@/"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^https?://"],
        ],
      },
    ],

    "max-lines": "off",
    "max-lines-per-function": "off",
    "no-void": "off",
    "one-var": "off",
    "require-await": "off",
  },

  overrides: [
    {
      files: ["**/*.d.ts", "**/*.ts", "**/*.tsx"],
      extends: ["plugin:prettier/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-template-expressions": "warn",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
