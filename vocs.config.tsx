import { defineConfig } from "vocs";

export default defineConfig({
	title: "bhvr",
	baseUrl: "https://bhvr.dev",
	description: "A stack made for the open web",
	iconUrl: "/icon.png",
	logoUrl: {
		dark: "/logo-dark.svg",
		light: "/logo-light.svg",
	},
	ogImageUrl: "/og.png",
	head({ path }) {
		const fcData = JSON.stringify({
			version: "next",
			imageUrl: "https://bhvr.dev/image.png",
			button: {
				title: "bhvr",
				action: {
					type: "launch_frame",
					name: "bhvr",
					url: `https://bhvr.dev${path}`,
					splashImageUrl: "https://bhvr.dev/splash.png",
					splashBackgroundColor: "#121113",
				},
			},
		});
		return <meta name="fc:frame" content={fcData} />;
	},
	socials: [
		{
			icon: "github",
			link: "https://github.com/stevedylandev/bhvr",
		},
	],
	markdown: {
		code: {
			themes: {
				light: "vitesse-light",
				dark: "vitesse-dark",
			},
		},
	},
	theme: {
		colorScheme: "dark",
		accentColor: "#BD976A",
	},
	editLink: {
		pattern:
			"https://github.com/stevedylandev/bhvr-docs/edit/main/docs/pages/:path",
		text: "Edit on GitHub",
	},
	topNav: [
		{
			text: "0.3.0",
			items: [
				{ text: "Contribute", link: "https://github.com/stevedylandev/bhvr" },
			],
		},
	],
	sidebar: [
		{
			text: "Getting Started",
			link: "/getting-started",
		},
		{
			text: "Why bhvr?",
			link: "/why-bhvr",
		},
		{
			text: "Packages",
			collapsed: false,
			items: [
				{
					text: "server",
					link: "/packages/server",
				},
				{
					text: "client",
					link: "/packages/client",
				},
				{
					text: "shared",
					link: "/packages/shared",
				},
			],
		},
		{
			text: "Deployment",
			collapsed: false,
			items: [
				{
					text: "Client",
					collapsed: true,
					items: [
						{
							text: "Orbiter",
							link: "/deployment/client/orbiter",
						},
						{
							text: "Cloudflare Pages",
							link: "/deployment/client/cloudflare-pages",
						},
						{
							text: "GitHub Pages",
							link: "/deployment/client/github-pages",
						},
						{
							text: "Netlify",
							link: "/deployment/client/netlify",
						},
					],
				},
				{
					text: "Server",
					collapsed: true,
					items: [
						{
							text: "Orbiter",
							link: "/deployment/server/orbiter",
						},
						{
							text: "Cloudflare Workers",
							link: "/deployment/server/cloudflare-workers",
						},
						{
							text: "Railway",
							link: "/deployment/server/railway",
						},
					],
				},
				{
					text: "Single Origin",
					link: "/deployment/single-origin",
				},
			],
		},
	],
});
