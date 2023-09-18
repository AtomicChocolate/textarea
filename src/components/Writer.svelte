<script lang="ts">
	import { panels } from "../utilities/PanelStore";
	import { settings } from "../utilities/SettingsStore";
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
	spellcheck={$settings.SpellCheck}
	class={`w-full h-[calc(100vh-1.5em)] bg-inherit text-inherit border-none focus-visible:outline-none resize-none text-xl p-4 transition-all ${
		$panels.settings ? "show-settings" : ""
	} ${$settings.WordWrap ? "wordwrap" : ""}`}
/>

<style>
	.wordwrap {
		white-space: pre;
		overflow-wrap: normal;
		overflow-x: scroll;
	}
</style>
