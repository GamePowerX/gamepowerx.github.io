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
			name: "KekUploadServer",
			license: "GPL-3.0",
			description: ["A new version of the KekUploadServer"],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadServer",
					name: "github",
				},
				{
					url: "https://newupload.gamepowerx.com",
					name: "demo",
				},
			],
		},
		{
			name: "KekUploadApp",
			license: "GPL-3.0",
			description: [
				"KekUploadApp is a simple app for uploading files",
				"to a KekUploadServer instance.",
			],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadApp",
					name: "github",
				},
			],
		},
		{
			name: "KekUploadCLIClient",
			license: "GPL-3.0",
			description: ["A simple CLI client for UploadServer"],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadCLIClient",
					name: "github",
				},
			],
		},
		{
			name: "FileLinkKekUpload",
			license: "GPL-3.0",
			description: [
				"FileLinkKekUpload is a Thunderbird add-on",
				"for uploading attachments to KekUpload.",
			],
			links: [
				{
					url: "https://addons.thunderbird.net/en-US/thunderbird/addon/filelinkkekupload/",
					name: "thunderbird_addon",
				},
				{
					url: "https://github.com/GamePowerX/fileLinkKekUpload",
					name: "github",
				},
			],
		},
		{
			name: "KekUploadLibrary",
			license: "GPL-3.0",
			description: ["A simple C# Library for UploadServer"],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadLibrary",
					name: "github",
				},
				{
					url: "https://www.nuget.org/packages/CraftingDragon007.KekUploadLibrary",
					name: "nuget",
				},
			],
		},
		{
			name: "KekUploadServerApi",
			license: "MIT",
			description: ["Plugin API for KekUploadServer C#"],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadServerApi",
					name: "github",
				},
				{
					url: "https://www.nuget.org/packages/GamePowerX.KekUploadServerApi/",
					name: "nuget",
				},
			],
		},
		{
			name: "KekUploadServerFileLogging",
			license: "MIT",
			description: ["A plugin for KekUploadServer to save", "the log into files"],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadServerFileLogging",
					name: "github",
				},
			],
		},
		{
			name: "KekUploadServerGUI",
			license: "MIT",
			description: ["A plugin for KekUploadServer that adds a GUI"],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadServerGUI",
					name: "github",
				},
			],
		},
		{
			name: "KekUploadDatabaseConversionTool",
			license: "GPL-3.0",
			description: [],
			links: [
				{
					url: "https://github.com/GamePowerX/KekUploadDatabaseConversionTool",
					name: "github",
				},
			],
		},
		{
			name: "kekupload-e2e",
			license: "No license",
			description: ["End To End Tests for KekUploadServer", "and clients"],
			links: [
				{
					url: "https://github.com/GamePowerX/kekupload-e2e",
					name: "github",
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
			name: "qBittorrent-Enhanced-Edition-Alpha",
			license: "GPL-2.0-or-later + OpenSSL exception",
			description: ["qBittorrent BitTorrent client"],
			links: [
				{
					url: "https://github.com/GamePowerX/qBittorrent-Enhanced-Edition-Alpha",
					name: "github",
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

<p style="max-width: 500px">
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

		<span></span>

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
				<span></span>
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
