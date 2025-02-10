/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient: {
          gradientFe: {
            colorOne: "rgba(166,37,11,0.9)",
            colorSecond: "rgba(194,98,1,0.9)",
          },
          gradientBe: {
            colorOne: "rgba(12,66,145,0.9)",
            colorSecond: "rgba(1,99,136,0.9)",
          },
          gradientDs: {
            colorOne: "rgba(141,12,145,0.9)",
            colorSecond: "rgba(110,1,136,0.9)",
          },
        },
      },
    },
  },
  plugins: [],
};
