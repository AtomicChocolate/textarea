<script lang="ts">
	import type { SettingsType } from "../utilities/Save";
	import { settings } from "../utilities/SettingsStore";
	import Themes from "../utilities/Themes";

	const categories = Array.from(
		new Set(Themes.map((theme) => theme.category))
	);

	function ChangeTheme(e: { currentTarget: { value: string } }) {
		$settings.Theme = e.currentTarget.value;
		$settings = $settings;
	}
</script>

<select
	aria-label="ui theme selection"
	bind:value={$settings.Theme}
	class="bg-inherit text-inherit rounded border p-1 self-end h-full"
>
	{#each categories as category}
		<optgroup label={category}>
			{#each Themes.filter((theme) => theme.category === category) as theme}
				<option value={theme.label}>{theme.label}</option>
			{/each}
		</optgroup>
	{/each}
</select>
