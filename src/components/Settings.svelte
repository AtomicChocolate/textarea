<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { settings } from "../utilities/SettingsStore";

	function ChangeSetting(setting, valueType, e) {
		let newValue;
		switch (valueType) {
			case "string":
				newValue = e.currentTarget.value;
				break;
			case "boolean":
				newValue = e.target.checked;
				break;
			default:
				console.warn(
					"Tried to set a setting containing an unsupported data type"
				);
				return;
		}
		$settings = { ...$settings, [setting]: newValue };
	}
</script>

<div
	class={`settings invisible max-h-0 transition-all ${
		$panels.settings ? "show-settings" : ""
	}`}
>
	<h1 class="text-4xl">Settings</h1>
	<hr />
	{#each Object.entries($settings) as [setting, value] (setting)}
		<!-- <br><code>{setting} ({typeof value}) = {value}</code><br> -->
		{#if setting !== "Theme"}
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
					bind:checked={value}
					on:change={(e) => ChangeSetting(setting, typeof value, e)}
				/>
			{/if}
			<label for={setting}>{setting}</label>
			<br />
		{/if}
	{/each}
</div>
