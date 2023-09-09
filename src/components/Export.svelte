<script lang="ts">
    import { text } from "./Writer.svelte";

    function exportText(input: string) {
        console.log($text);
        
        const element = document.createElement("a");
        const file = new Blob([input], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "textarea-exported.txt";
        element.click();
    }
</script>

<button on:click={(e) => exportText("hi")}>Export</button>