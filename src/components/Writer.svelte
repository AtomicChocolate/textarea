<script lang="ts">
  import { derived, writable } from "svelte/store";
    import { GetSave, MakeSave } from "../utilities/Save";

    let value = GetSave();

    const _internalStore = writable(value);

    // Whenever the internal value changes, update the writable store and save the data
    _internalStore.subscribe(newValue => {
        value = newValue;  // This might be redundant depending on your setup
        MakeSave(newValue);
    });

    // Create a derived store from the internal store for read-only purposes
    export const text = derived(_internalStore, $value => $value);
</script>

<textarea
  bind:value
  on:input={(e) => MakeSave(e.currentTarget.value)}
  class="w-full h-screen bg-inherit text-inherit border-none focus-visible:outline-none text-xl p-4"
/>
