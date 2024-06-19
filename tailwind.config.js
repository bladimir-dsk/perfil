/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");


  module.exports = withMT({
    content: [
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
      'node_modules/flowbite-react/lib/esm/**/*.js',
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bladi': 'white'
        }
      },
    },
    darkMode: "class",
    plugins: [nextui(),
      require('flowbite/plugin')
    ]
  })



