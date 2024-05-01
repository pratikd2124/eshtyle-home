/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        border: "var(--border)",

        //Website
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        accent: "var(--accent)",

        textMain: "var(--text-main)",
        textAccent: "var(--text-accent)",
        morphLight: "var(--morph-light)",
        morphDark: "var(--morph-dark)",
      },
    },
  },
  plugins: [],
}

