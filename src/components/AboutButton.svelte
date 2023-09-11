<script lang="ts">
	import { panels } from "../utilities/PanelStore";

	function ShowAbout() {
		$panels.settings = !$panels.settings;
	}
</script>

<button
	type="button"
	on:click={ShowAbout}
	class="bg-inherit text-inherit rounded border p-1"
>
	About
</button>
