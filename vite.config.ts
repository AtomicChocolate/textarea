import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			devOptions: {
				enabled: true,
			},
			manifest: {
				theme_color: "#1b1b1b",
				background_color: "#1b1b1b",
				display: "standalone",
				scope: "/textarea",
				start_url: "/textarea",
				description:
					"A persistent textbox that holds on to anything you write, without ads or trackers.",
				name: "textarea.site",
				short_name: "Textarea",
				icons: [
					{
						src: "/icon-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/icon-256x256.png",
						sizes: "256x256",
						type: "image/png",
					},
					{
						src: "/icon-384x384.png",
						sizes: "384x384",
						type: "image/png",
					},
					{
						src: "/icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
	base: "/textarea",
});
