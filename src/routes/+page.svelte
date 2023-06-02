<script lang="ts">
	import Typer from "$lib/Typer.svelte";

	const words = ["Artists", "Developers", "Students", "Creative People", "Machinists", "Designers"];

	function some() {}
	some();

	const projects = [
		{
			name: "gamepowerx.com",
			license: "MIT",
			description: ["This website and its brand resources are opensource"],
			links: [
				{
					url: "https://github.com/GamePowerX/gamepowerx.github.io",
					name: "github",
				},
			],
		},
		{
			name: "kekupload",
			license: "MIT",
			description: ["KekUpload is a HTTP application", "for uploading and sharing files easily."],
			links: [
				{
					url: "https://github.com/GamePowerX/kekupload-server",
					name: "kekupload_server",
				},
				{
					url: "https://github.com/GamePowerX/kekupload-client",
					name: "kekupload_client",
				},
				{
					url: "https://github.com/GamePowerX/kekupload-lib-ts",
					name: "kekupload_lib_ts",
				},
				{
					url: "https://upload.gamepowerx.com",
					name: "demo",
				},
			],
		},
		{
			name: "svelte-ogl",
			license: "MIT",
			description: ["SvelteOGL is a typed port of OGL", "(Open Graphics Library) to svelte"],
			links: [
				{
					url: "https://github.com/GamePowerX/svelte-ogl",
					name: "github",
				},
				{
					url: "https://gamepowerx.com/svelte-ogl/",
					name: "demo",
				},
			],
		},
		{
			name: "pipe-to-release",
			license: "MIT",
			description: [
				"pipe-to-release is a github action for",
				"uploading artifacts and managing releases",
			],
			links: [
				{
					url: "https://github.com/marketplace/actions/pipe-to-release",
					name: "marketplace",
				},
				{
					url: "https://github.com/GamePowerX/pipe-to-release",
					name: "github",
				},
			],
		},
		{
			name: "IDirekt",
			license: "MIT",
			description: [
				"IDirekt is a utility to forward emails from",
				"IServ via an external SMTP server",
			],
			links: [
				{
					url: "https://github.com/GamePowerX/IDirekt",
					name: "github",
				},
			],
		},
		{
			name: "KeloCAM",
			license: "MIT",
			description: ["KeloCAM will be an opensource simple-to-use", "CAM software for hobbyists"],
			links: [
				{
					url: "#",
					name: "soon_tm",
				},
			],
		},
	];

	const lines = 4 + projects.reduce((p, v) => p + 3 + v.description.length + v.links.length, 0);
</script>

<svelte:head>
	<title>GamePowerX | About</title>
</svelte:head>

<h1>GamePowerX</h1>
<p>Because Opensource is the Future of Tech.</p>

<br />

<p>
	We are a Github Organisation focusing on opensource software for

	<Typer {words} />
</p>

<br />

<a href="/join">
	<button>join_us()</button>
</a>

<hr />

<div class="projects">
	<ul>
		{#each new Array(lines) as _, i}
			<li>{i + 1}</li>
		{/each}
	</ul>
	<code>
		<span class="comment"> // █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀ █▀ </span>
		<span class="comment"> // █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░ ▄█ </span>
		<span class="comment"> //</span>
		<span class="comment"> // Note: underlined = clickable</span>

		<span />

		{#each projects as project, i}
			{#each project.description as description}
				<span class="comment"> // {description}</span>
			{/each}

			<span>
				<span class="func">declare</span>(<span class="string">"{project.name}"</span>,
				<span class="string">"{project.license}"</span>,
				<span class="keyword">function</span>() &lbrace;
			</span>

			{#each project.links as link}
				<span>
					&nbsp;&nbsp;
					<a href={link.url}> <span class="func">{link.name}</span></a>();
				</span>
			{/each}
			<span>&rbrace;);</span>
			{#if i + 1 !== projects.length}
				<span />
			{/if}
		{/each}
	</code>
</div>

<style>
	.projects {
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 5px;
		background-color: black;
		display: flex;
	}

	.projects ul {
		list-style: none;
		padding: 10px 10px;
		border-right: 1px solid rgba(255, 255, 255, 0.3);
	}

	.projects ul li {
		color: #ffcc00;
		height: 20px;
		text-align: right;
	}

	code {
		padding: 10px 10px;
		white-space: nowrap;
		display: flex;
		flex-direction: column;
		overflow-x: scroll;
		overflow-y: hidden;
	}

	code span {
		height: 20px;
	}

	code .func {
		color: #61afef;
	}

	code .keyword {
		color: #c678dd;
	}

	code .string {
		color: #98c379;
	}

	code a {
		height: 20px;
		text-decoration: #ec5f67 wavy underline;
		cursor: pointer;
	}

	code a:hover .func {
		color: #83bfef;
	}
</style>
