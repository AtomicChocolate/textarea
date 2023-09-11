<script lang="ts">
	import { panels } from "../utilities/PanelStore";

	function ShowAbout() {
		$panels.about = !$panels.about;
	}
</script>

<button
	type="button"
	on:click={ShowAbout}
	class={`bg-inherit text-inherit rounded border p-1 ${
		$panels.about ? "hover" : ""
	}`}
>
	About
</button>
