/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /col-start-.+/ },
    { pattern: /row-start-.+/ },
    { pattern: /col-span-.+/ },
    { pattern: /bg-red.*/, variants: ["hover"] },
    { pattern: /bg-yellow.*/, variants: ["hover"] },
    { pattern: /bg-blue.*/, variants: ["hover"] },
    { pattern: /bg-black.*/, variants: ["hover"] },
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: {
        DEFAULT: "rgba(255, 255, 255, 1)",
        dimmed: "rgba(255, 255, 255, 0.6)",
        dark: "rgba(255, 255, 255, 0.4)",
      },
      black: {
        DEFAULT: "#05010d",
        100: "#101111",
        200: "#18191a",
        300: "#313133",
        400: "#494b4d",
        input: "#120e19",
      },
      fg: {
        DEFAULT: "#f4f4f6",
        200: "#c2c7ca",
        300: "#78787c",
        400: "#5e6366",
      },
      yellow: {
        DEFAULT: "#ffc533",
        transparent: "rgba(255,197,51,.15)",
      },
      red: {
        DEFAULT: "#ff6161",
        transparent: "rgba(255,97,97,.15)",
      },
      blue: {
        DEFAULT: "#57c1ff",
        transparent: "rgba(87,193,255,.15)",
      },
      green: {
        DEFAULT: "#59d499",
        transparent: "rgba(89,212,153,.15)",
      },
    },
    extend: {
      height: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        teaser: 'url("/images/teaser.jpg")',
        application: 'url("/images/application.jpeg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "half-radial":
          "radial-gradient(circle at top, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "highlight-5": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        "highlight-10": "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
  safelist: [
    "space-y-2",
    "text-blue",
    "hover:underline",
    "list",
    "list-inside",
    "list-disc",
    "mt-6",
    "list-inside",
    "list-decimal",
    "space-y-2",
    "text-white/80",
    "ml-2",
    "list-disc",
    "list-[lower-latin]",
    "list-[lower-roman]",
    "block",
    "text-2xl",
    "font-bold",
    "text-white",
    "font-medium",
    "mt-1",
    "block",
    "text-base",
    "bg-red/80",
    "bg-yellow/80",
    "bg-green/80",
    "bg-blue/80",
    "bg-red",
    "bg-yellow",
    "bg-green",
    "bg-blue",
  ],
};
