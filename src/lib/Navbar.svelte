<script lang="ts">
	import { page } from "$app/stores";

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<nav class:detach={scrollY > 0}>
	<div>
		<a href="/" class="logo">
			<img src="/gamepowerx_logo.svg" alt="Logo" />
		</a>

		<a class:active={$page.url.pathname === "/"} href="/">About</a>
		<a class:active={$page.url.pathname === "/join/"} href="/join">Join</a>
		<a class:active={$page.url.pathname === "/downloads/"} href="/downloads">Downloads</a>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		width: 100%;
		height: 50px;
		z-index: 100;
		background: black;
		border-bottom: 1px solid transparent;
	}

	nav.detach {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	div {
		height: 100%;
		max-width: 800px;
		margin: auto;
		display: flex;
		align-items: center;
		column-gap: 10px;
		padding: 2px 20px;
	}

	nav img {
		height: 36px;
		width: 36px;
	}

	nav .logo {
		height: 36px;
		flex: 1;
	}

	nav a {
		color: #aa8800;
		text-decoration: none;
	}

	nav a.active,
	nav a:hover {
		color: #ffcc00;
	}
</style>
