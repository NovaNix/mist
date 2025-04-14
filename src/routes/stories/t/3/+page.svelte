<script lang="ts">
	import { renderStory } from "$lib/storybook";
	import text from "./act3.md?raw"
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

		.story-text {
			color: #F0F0ED;
			opacity: 0.90;
			font-style: italic;
		}
		
		.dialogue {
			/* font-style: italic; */
			margin-left: 2em;
			font-style: normal;
		}

		.speaker-angela {
			color: #B8797D;
			
			opacity: 0.9;

			/* text-shadow: 0 0 2px #F0F0ED; */
		}

		.speaker-faron {
			color: #7ab889;
		}
	</style>
</div>