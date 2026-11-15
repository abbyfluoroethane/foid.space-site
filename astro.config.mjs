import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://foid.space',
  trailingSlash: 'always',
  server: { port: 4324 },
});
