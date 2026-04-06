/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        dark: {
          css: {
            color: '#E5E5E5', // light text for dark background
            a: { color: '#ffffff' }, // white links
            strong: { color: '#ffffff' },
            code: { color: '#ffffff' },
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
          "primary": "#ffffff",   // white accent
          "secondary": "#0a0a0a", // near-black
          "accent": "#d4d4d4",    // light gray for highlights
          "neutral": "#171717",   // dark gray for cards, etc.
          "base-100": "#0a0a0a",  // page background
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
