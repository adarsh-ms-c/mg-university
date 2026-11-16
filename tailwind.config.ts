import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#030816', ocean: '#02163f', azure: '#0a3a8f', action: '#3b8bff' }, borderRadius: { glass: '28px' } } },
  plugins: [],
};
export default config;
