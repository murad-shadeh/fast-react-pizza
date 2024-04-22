/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // overwrite everything exist into the new styles configuration
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    // adding new styles to existing styles configuration
    extend: {
      colors: {
        pizza: "#123456",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
