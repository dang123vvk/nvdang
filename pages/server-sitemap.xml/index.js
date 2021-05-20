
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemap(ctx, [
    {
      loc: 'https://nvdang.dev',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://nvdang.dev/about',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ])
}

// Default export to prevent next.js errors
export default () => {}