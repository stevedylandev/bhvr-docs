import * as React from 'react'
import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'bhvr',
  description: 'A stack made for the open web',
  logoUrl: "/icon-big.png",
  iconUrl: "/icon.svg",
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
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
          collapsed: false,
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
          collapsed: false,
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
