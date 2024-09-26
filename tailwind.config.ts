import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#37425B",
        background: "#FFFFFF",
      },
      boxShadow: {
        "custom-navbar": "0px 4px 6px 0px #0000000",
      },
    },
  },
  plugins: [],
};
export default config;
