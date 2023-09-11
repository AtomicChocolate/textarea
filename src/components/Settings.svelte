<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { settings } from "../utilities/SettingsStore";
</script>

<div class={`settings max-h-0 transition-all show-settings`}>
	<h1 class="text-4xl">Settings</h1>
	<input type="checkbox" title="wordwrap" name="wordwrap" />
	<label for="wordwrap">Word Wrap</label>
	<input type="checkbox" title="spellcheck" name="spellcheck" />
	<label for="spellcheck">Spell Check</label>
	<input type="text" title="fontfamily" name="fontfamily" />
	<label for="fontfamily">Font Family</label>
</div>
