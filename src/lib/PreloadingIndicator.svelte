<!-- Sourced from https://github.com/sveltejs/sites/blob/master/packages/site-kit/src/lib/components/PreloadingIndicator.svelte -->
<script lang="ts">
	import { onMount } from "svelte";

	let p = 0;
	let visible = false;
	onMount(() => {
		function next() {
			visible = true;
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}
		setTimeout(next, 250);
	});
</script>

{#if visible}
	<div class="progress" style="width: {p * 100}%" />
{/if}

{#if p >= 0.4}
	<div class="fade" />
{/if}

<style>
	.progress {
		position: fixed;
		top: 0;
		left: 0;
		height: 2px;
		z-index: 999;
		background-color: #ffcc00;
		transition: width 0.4s;
	}
	.fade {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.3);
		pointer-events: none;
		z-index: 998;
		animation: fade 0.4s;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
