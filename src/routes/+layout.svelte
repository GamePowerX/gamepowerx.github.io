<script lang="ts">
	import "@fontsource/alfa-slab-one/latin-400.css";
	import "@fontsource/ibm-plex-mono/latin-400.css";
	import "../app.css";
	import Navbar from "../lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import { navigating } from "$app/stores";
	import PreloadingIndicator from "$lib/PreloadingIndicator.svelte";
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: 60px 30px;
		max-width: 800px;
		min-height: 80vh;
		margin: auto;
	}

	@media (min-width: 700px) {
		main {
			padding: 90px 30px;
		}
	}
</style>
