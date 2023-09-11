<script>
	import AboutButton from "./AboutButton.svelte";
	import Export from "./Export.svelte";
	import SettingsButton from "./SettingsButton.svelte";
	import ThemeSelect from "./ThemeSelect.svelte";
</script>

<footer
	class="fixed bottom-0 h-auto w-screen text-xs px-1 flex justify-between"
>
	<div class="flex gap-1 bg-inherit text-inherit">
		<Export />
	</div>
	<div class="flex gap-1 bg-inherit text-inherit">
		<SettingsButton />
		<AboutButton />
		<ThemeSelect />
	</div>
</footer>
