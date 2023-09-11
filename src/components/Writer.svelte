<script lang="ts">
	import { text } from "../utilities/TextStore";
	import { saveText } from "../utilities/Save";

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
	class="w-full h-screen bg-inherit text-inherit border-none focus-visible:outline-none text-xl p-4"
/>
