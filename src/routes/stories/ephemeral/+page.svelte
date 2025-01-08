<script lang="ts">
    import { renderStory } from "$lib/storybook";
	import text from "./ephemeral.smd?raw"
	import info from "./info.json"

</script>


{@html renderStory(text, info)}