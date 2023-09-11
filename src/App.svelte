<script lang="ts">
	import About from "./components/About.svelte";
	import Footer from "./components/Footer.svelte";
	import Settings from "./components/Settings.svelte";
	import Writer from "./components/Writer.svelte";
	import { settings } from "./utilities/SettingsStore";
	import Themes from "./utilities/Themes";
</script>

<main
	class={Themes.find((theme) => theme.label === $settings.Theme)?.class}
	style:font-family={$settings.FontFamily}
>
	<About />
	<Writer />
	<Settings />
	<Footer />
</main>
