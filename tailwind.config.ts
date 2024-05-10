import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        my: "#FF00FF",
        sec: "#ae0000",
      }
    },
  },
  plugins: [],
} satisfies Config

