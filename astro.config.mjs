import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output:'server',

  integrations: [mdx(), sitemap(), tailwind({
      applyBaseStyles: false,
  }), react()],

  adapter: node({
    mode: 'standalone',
  }),
});