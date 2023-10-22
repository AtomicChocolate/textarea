<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { settings, settingsNames } from "../utilities/SettingsStore";
	import { allFonts } from "../utilities/GetFonts";

	function ChangeSetting(setting: string, newValue: any) {
		$settings = { ...$settings, [setting]: newValue };
	}
</script>

<div
	class={`settings invisible relative top-[500px] max-h-40 transition-all overflow-y-auto pb-4 ${
		$panels.settings ? "show-settings" : ""
	}`}
>
	<h1 class="text-4xl">Settings</h1>
	<hr />
	{#each Object.entries($settings) as [setting, value] (setting)}
		{#if setting === "FontFamily"}
			<select
				name={setting}
				id={setting}
				{value}
				on:change={(e) => ChangeSetting(setting, e.currentTarget.value)}
				>{#each allFonts as fontFamily}
					<option value={fontFamily}>{fontFamily}</option>
				{/each}
			</select>
			<label for={setting}>{settingsNames[setting]}</label>
			<br />
		{:else if setting !== "Theme"}
			{#if typeof value === "string"}
				<input
					type="text"
					title={setting}
					name={setting}
					{value}
					on:change={(e) =>
						ChangeSetting(setting, e.currentTarget.value)}
				/>
			{:else if typeof value === "boolean"}
				<input
					type="checkbox"
					title={setting}
					name={setting}
					bind:checked={value}
					on:change={(e) =>
						ChangeSetting(setting, e.currentTarget.checked)}
				/>
			{/if}
			<label for={setting}>{settingsNames[setting]}</label>
			<br />
		{/if}
	{/each}
</div>
