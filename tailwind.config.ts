import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(-- )",
        foreground: "var(--foreground)",
        primary:'#4896bd',
        secondary: '#94a3b8',
        dark: 'white',
      },
    },
  },
  plugins: [],
} satisfies Config;
