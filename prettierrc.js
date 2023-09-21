// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // Standard prettier options
  singleQuote: true,
  semi: true,
  printWidth: 120,
  trailingComma: "all",
  // Since prettier 3.0, manually specifying plugins is required
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  // This plugin's options
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^[./]"],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
