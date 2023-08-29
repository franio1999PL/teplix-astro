import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main'
      },
      collections: [
        {
          label: 'Posts',
          name: 'posts',
          slug: '{{postTitle}}',
          folder: 'src/pages/posts',
          create: true,
          delete: true,
          fields: [
            {
              label: 'Post Title',
              name: 'postTitle',
              widget: 'string',
            },
            {
              label: 'Post Description',
              name: 'postDescription',
              widget: 'string'
            },
            {
              label: 'Post URL',
              name: 'postUrl',
              widget: 'string'
            }
          ]
        }
      ]
    }
  })]
});