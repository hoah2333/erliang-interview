/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
  tailwindFunctions: ["clsx"],
  trailingComma: "all",
  experimentalTernaries: true,
  quoteProps: "consistent",
  objectWrap: "collapse",
};

export default config;
