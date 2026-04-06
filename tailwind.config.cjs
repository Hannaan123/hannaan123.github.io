/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        dark: {
          css: {
            color: '#E5E5E5', // light text for dark background
            a: { color: '#a3e635' }, // lime links
            strong: { color: '#ffffff' },
            code: { color: '#a3e635' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        blacklime: {
          "primary": "#a3e635",   // lime accent
          "secondary": "#121212", // slightly lighter black
          "accent": "#bef264",    // lighter lime for highlights
          "neutral": "#1e1e1e",   // dark gray for cards, etc.
          "base-100": "#121212",  // page background
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#ef4444",
          // add this line to make inputs and textareas dark
          "--input-bg": "#1e1e1e",
        },
      },
    ],
    darkTheme: "blacklime",
  },
  darkMode: "class",
};
