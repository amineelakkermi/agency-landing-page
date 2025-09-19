/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Active le mode sombre basé sur les classes
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}", // si tu utilises l’App Router
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          DEFAULT: "#4e6bff",
          50: "#f0f3ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#4e6bff",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        orange: {
          50: "#FF894F",
        },
        green: "#67C090",
        pink: "#FF0066",
        dark: "#041e3c",
        customText: "#777",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
