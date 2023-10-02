<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { settings } from "../utilities/SettingsStore";
	import { resetSettings } from "../utilities/Save";
	import { allFonts } from "../utilities/GetFonts";

	function ChangeSetting(setting, valueType, e) {
		let newValue;
		switch (valueType) {
			case "string":
				newValue = e.currentTarget.value;
				break;
			case "boolean":
				newValue = !e.target.checked;
				break;
			default:
				console.warn(
					"Tried to set a setting containing an unsupported data type"
				);
				return;
		}
		$settings = { ...$settings, [setting]: newValue };
	}

	let thesettings = $settings;
</script>

<div
	class={`settings invisible max-h-0 transition-all ${
		$panels.settings ? "show-settings" : ""
	}`}
>
	<h1 class="text-4xl">Settings</h1>
	<hr />
	<!-- TODO: friendly name for settings -->
	<button on:click={resetSettings}>Reset Settings</button>
	{#each Object.entries($settings) as [setting, value] (setting)}
		{#if setting === "FontFamily"}
			<select name={setting} id={setting}
				>{#each allFonts as fontFamily}
					<option value={fontFamily}>{fontFamily}</option>
				{/each}
			</select>
		{:else if setting !== "Theme"}
			{#if typeof value === "string"}
				<input
					type="text"
					title={setting}
					name={setting}
					{value}
					on:change={(e) => ChangeSetting(setting, typeof value, e)}
				/>
			{:else if typeof value === "boolean"}
				<input
					type="checkbox"
					title={setting}
					name={setting}
					on:click={(e) => ChangeSetting(setting, typeof value, e)}
				/>
			{/if}
			<label for={setting}>{setting}</label>
			<br />
		{/if}
	{/each}
</div>
