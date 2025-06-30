import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,css}'  // <--- include css files here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;