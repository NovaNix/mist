<script lang="ts">
	import { renderStory } from "$lib/storybook";
	import text from "./story.smd?raw"
	import info from "./info.json"
</script>

<svelte:head>
	<title>{info.title}</title>
</svelte:head>

{@html renderStory(text, info)}

<div>
	<style>

		body {
			background-color: #000401;
		}
		
		.dialogue {
			font-style: italic;
		}

		.speaker-death {
			color: #F0F0ED;
			opacity: 0.5;

			text-shadow: 0 0 2px #F0F0ED;
		}

		.speaker-lammchen {
			color: #7ab889;
		}
	</style>
</div>