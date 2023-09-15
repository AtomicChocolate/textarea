<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { settings } from "../utilities/SettingsStore";
</script>

<div
	class={`settings invisible max-h-0 transition-all ${
		$panels.settings ? "show-settings" : ""
	}`}
>
	<h1 class="text-4xl">Settings</h1>
	<input type="checkbox" title="wordwrap" name="wordwrap" />
	<label for="wordwrap">Word Wrap</label>
	<input type="checkbox" title="spellcheck" name="spellcheck" />
	<label for="spellcheck">Spell Check</label>
	<input type="text" title="fontfamily" name="fontfamily" />
	<label for="fontfamily">Font Family</label>
	<input type="text" title="exportfilename" name="exportfilename" />
	<label for="exportfilename">Export File Name</label>
	<hr />
	{#each Object.entries($settings) as [setting, value] (setting)}
		<!-- <br><code>{setting} ({typeof value}) = {value}</code><br> -->
		<input type={typeof value === "string" ? "text" : "checkbox"} title={setting} name={setting}>
		<label for={setting}>{setting}</label>
		<br>
	{/each}
</div>
