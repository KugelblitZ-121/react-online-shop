/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#191313", // Define your custom color
      },
      screens: {
        xs: "380px", // Define your custom "xs" breakpoint with a width of 320px
      },
    },
  },
  plugins: [import("daisyui")],
};
