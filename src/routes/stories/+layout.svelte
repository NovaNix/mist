<script>
	import StoryStyling from "$lib/styles/story-common.css?url"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={StoryStyling}>
</svelte:head>

<div id="story-wrapper">
	<article id="story">
		{@render children()}
	</article>
</div>


<style>

	#story-wrapper {
		padding: 0 40px;
	}

	#story {
		margin: 40px auto;
		max-width: 800px;

		line-height: 1.6;
		font-size: 18px;
	}
</style>

