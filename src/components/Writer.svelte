<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { text } from "../utilities/TextStore";

	type TextareaInputEvent = {
		currentTarget: {
			value: string;
		};
	};

	function handleInput(e: TextareaInputEvent) {
		const updatedValue = e.currentTarget.value;
		text.set(updatedValue);
	}
</script>

<textarea
	bind:value={$text}
	on:input={handleInput}
	class={`w-full h-screen bg-inherit text-inherit border-none focus-visible:outline-none resize-none text-xl p-4 transition-all ${
		$panels.settings ? "show-settings" : ""
	}`}
/>
