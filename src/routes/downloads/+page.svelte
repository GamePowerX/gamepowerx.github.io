<script lang="ts">
	type DownloadLink = {
		name: string;
		url: string;
		primary?: boolean;
	};

	type DownloadProject = {
		name: string;
		description: string;
		note?: string;
		links: DownloadLink[];
	};

	const downloads: DownloadProject[] = [
		{
			name: "KekUploadServer",
			description: "Server binaries and release assets for self-hosted KekUpload instances.",
			links: [
				{
					name: "latest_release",
					url: "https://github.com/GamePowerX/KekUploadServer/releases/latest",
					primary: true,
				},
				{
					name: "docker_image",
					url: "https://github.com/GamePowerX/KekUploadServer/pkgs/container/kekuploadserver",
				},
				{
					name: "all_releases",
					url: "https://github.com/GamePowerX/KekUploadServer/releases",
				},
			],
		},
		{
			name: "KekUploadApp",
			description: "Desktop app builds for uploading files to a KekUploadServer instance.",
			links: [
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/KekUploadApp/releases",
					primary: true,
				},
			],
		},
		{
			name: "KekUploadCLIClient",
			description: "Command line client binaries for Linux, macOS, and Windows.",
			links: [
				{
					name: "latest_release",
					url: "https://github.com/GamePowerX/KekUploadCLIClient/releases/latest",
					primary: true,
				},
				{
					name: "all_releases",
					url: "https://github.com/GamePowerX/KekUploadCLIClient/releases",
				},
			],
		},
		{
			name: "FileLinkKekUpload",
			description: "Thunderbird add-on for uploading attachments to KekUpload.",
			links: [
				{
					name: "thunderbird_addon",
					url: "https://addons.thunderbird.net/en-US/thunderbird/addon/filelinkkekupload/",
					primary: true,
				},
			],
		},
		{
			name: "KekUploadLibrary",
			description: "C# library package for integrating with KekUpload.",
			links: [
				{
					name: "nuget_package",
					url: "https://www.nuget.org/packages/CraftingDragon007.KekUploadLibrary",
					primary: true,
				},
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/KekUploadLibrary/releases",
				},
			],
		},
		{
			name: "KekUploadServerApi",
			description: "NuGet package for the KekUploadServer plugin API.",
			links: [
				{
					name: "nuget_package",
					url: "https://www.nuget.org/packages/GamePowerX.KekUploadServerApi/",
					primary: true,
				},
			],
		},
		{
			name: "KekUploadDatabaseConversionTool",
			description: "Database conversion tool with Linux, macOS, and Windows release assets.",
			links: [
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/KekUploadDatabaseConversionTool/releases",
					primary: true,
				},
			],
		},
		{
			name: "kekupload-server",
			description: "Rust backend release tags for the older KekUpload implementation.",
			links: [
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/kekupload-server/releases",
					primary: true,
				},
			],
		},
		{
			name: "kekupload-client",
			description: "Svelte frontend release tags for the older KekUpload implementation.",
			links: [
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/kekupload-client/releases",
					primary: true,
				},
			],
		},
		{
			name: "kekupload-lib-ts",
			description: "TypeScript library package for the older KekUpload implementation.",
			links: [
				{
					name: "npm_package",
					url: "https://www.npmjs.com/package/kekupload-lib-ts",
					primary: true,
				},
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/kekupload-lib-ts/releases",
				},
			],
		},
		{
			name: "pipe-to-release",
			description: "GitHub Action for uploading files to releases and creating releases.",
			links: [
				{
					name: "marketplace",
					url: "https://github.com/marketplace/actions/pipe-to-release",
					primary: true,
				},
				{
					name: "github_releases",
					url: "https://github.com/GamePowerX/pipe-to-release/releases",
				},
			],
		},
	];
</script>

<svelte:head>
	<title>GamePowerX | Downloads</title>
</svelte:head>

<h1>Downloads</h1>

<p class="intro">
	Download the latest GamePowerX apps, tools, libraries, and add-ons from our official
	release and package pages.
</p>

<section class="downloads" aria-label="Project downloads">
	{#each downloads as project}
		<article>
			<div class="title">
				<h2>{project.name}</h2>
			</div>

			<p>{project.description}</p>

			{#if project.note}
				<p class="note">{project.note}</p>
			{/if}

			<div class="links">
				{#each project.links as link}
					<a class:primary={link.primary} href={link.url}>{link.name}</a>
				{/each}
			</div>
		</article>
	{/each}
</section>

<style>
	.intro {
		max-width: 650px;
		margin-top: 10px;
	}

	.downloads {
		display: grid;
		gap: 16px;
		margin-top: 30px;
	}

	article {
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 5px;
		background: linear-gradient(135deg, rgba(255, 204, 0, 0.08), rgba(255, 204, 0, 0));
		min-width: 0;
		padding: 18px;
	}

	.title {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 8px;
	}

	h2 {
		font-size: 22px;
		line-height: 1.2;
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.note {
		color: #aa8800;
		font-size: 14px;
		margin-top: 8px;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 16px;
	}

	a {
		border: 1px solid #aa8800;
		border-radius: 5px;
		color: #ffcc00;
		overflow-wrap: anywhere;
		padding: 6px 10px;
		text-decoration: none;
	}

	a.primary,
	a:hover {
		background: #ffcc00;
		border-color: #ffcc00;
		color: black;
	}

	@media (min-width: 700px) {
		.downloads {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
