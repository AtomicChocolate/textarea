<script lang="ts">
	import { text } from "../utilities/TextStore";
	import { settings } from "../utilities/SettingsStore";

	function exportText(input: string) {
		const element = document.createElement("a");
		const file = new Blob([input], { type: "text/plain" });
		element.href = URL.createObjectURL(file);
		element.download = String($settings.ExportFileName);
		element.click();
	}
</script>

<button
	on:click={() => exportText($text)}
	class="bg-inherit text-inherit rounded border p-1 h-full">Export</button
>
