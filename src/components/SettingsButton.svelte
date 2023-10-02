<script lang="ts">
	import { panels } from "../utilities/PanelStore";

	function ShowSettings() {
		$panels.settings = !$panels.settings;
	}
</script>

<button
	type="button"
	on:click={ShowSettings}
	class={`bg-inherit text-inherit rounded border p-1 h-full ${
		$panels.settings ? "hover" : ""
	}`}
>
	Settings
</button>
