<script lang="ts">
  import "@fontsource/alfa-slab-one";
  import "@fontsource-variable/jetbrains-mono";
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
    max-width: 600px;
    min-height: 80vh;
    margin: auto;
  }
</style>
