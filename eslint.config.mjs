// Define the ESLint configuration array
const configArray = [
  "next/typescript",
  "standard",
  "plugin:tailwindcss/recommended",
  "prettier",
];

// Export the ESLint configuration as default
export default {
  configs: {
    recommended: configArray,
    all: [
      ...configArray,
      {
        rules: {
          "no-unused-vars": "off", // Example: Disable the "no-unused-vars" rule
          "no-console": "warn",   // Example: Warn on console.log usage
        },
      },
    ],
  },
};
