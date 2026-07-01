import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Nikitaa2333333.github.io',
  base: '/management-pro-landing',
  vite: {
    plugins: [tailwindcss()],
  },
});
