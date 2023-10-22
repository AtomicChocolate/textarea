<script lang="ts">
	import { onMount } from "svelte";

	// sorry
	let deferredInstallEvent: any;

	onMount(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault();
			deferredInstallEvent = e;
		});
	});

	async function handleInstall() {
		deferredInstallEvent.prompt();
		let choice = await deferredInstallEvent.userChoice;
		if (choice.outcome === "accepted") {
			// User accepted to install the application
		} else {
			// User dismissed the prompt
		}
	}
</script>

{#if deferredInstallEvent}<button
		type="button"
		class="rounded border p-1"
		on:click={handleInstall}
	>
		Install textarea.site
	</button>
{/if}
