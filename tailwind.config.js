import flowbite from "flowbite-react/tailwind"; // Replace require with import
import daisyui from "daisyui"; // Replace require with import
import flowbitePlugin from "flowbite/plugin"; // Import flowbite plugin

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Alice", "serif"],
      },
    },
  },
  plugins: [daisyui, flowbitePlugin, flowbite.plugin()], // Use imported plugins
};
