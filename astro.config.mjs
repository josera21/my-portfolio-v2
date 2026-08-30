// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// Apex origin: www.jochidev.com currently fails TLS (handshake error),
// which is why Play Console marked the privacy URL as inactive.
export default defineConfig({
  site: 'https://jochidev.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
