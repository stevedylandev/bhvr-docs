import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'bhvr',
  description: 'A stack made for the open web',
  iconUrl: "/icon.svg",
  head({ path }) {
    const fcData = JSON.stringify({
      version: "next",
      imageUrl: "https://bhvr.dev/image.png",
      button: {
        title: "bhvr",
        action: {
          type: "launch_frame",
          name: "bhvr",
          url: `https://bhvr.dev/${path}`,
          splashImageUrl: "https://bhvr.dev/splash.png",
          splashBackgroundColor: "#ffffff"
        }
      }
    })
      return (
        <meta name='fc:frame' content={fcData} />
      )
    },
  logoUrl: "https://bhvr-docs.orbiter.website/icon-big.png",
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Why bhvr?',
      link: '/why-bhvr'
    },
    {
      text: 'Packages',
      collapsed: false,
      items: [
        {
          text: 'server',
          link: '/packages/server'
        },
        {
          text: 'client',
          link: '/packages/client'
        },
        {
          text: 'shared',
          link: '/packages/shared'
        },
      ]
    },
    {
      text: 'Deployment',
      collapsed: false,
      items: [
        {
          text: 'Client',
          collapsed: true,
          items: [
            {
              text: 'Orbiter',
              link: '/deployment/client/orbiter'
            },
            {
              text: 'Cloudflare Pages',
              link: '/deployment/client/cloudflare-pages'
            },
            {
              text: 'GitHub Pages',
              link: '/deployment/client/github-pages'
            }
          ]
        },
        {
          text: 'Server',
          collapsed: true,
          items: [
            {
              text: 'Cloudflare Workers',
              link: '/deployment/server/cloudflare-workers'
            },
          ]
        }

      ]
    }
  ],
})
