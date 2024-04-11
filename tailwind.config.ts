/** @type {import('tailwindcss').Config} */

import { Brand } from "./utils/brand.utils"

const colors = {
  'light-bg': '#FAFAFA',
  'dark-bg': '#111111',
  ...Brand
}

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        ...colors
      },
    },
    fontFamily: {
      roobert: ['"Roobert", sans-serif'],
    },
  },
  plugins: [],
}