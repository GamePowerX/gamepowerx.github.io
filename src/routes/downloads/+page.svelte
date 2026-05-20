<script lang="ts">
	type DownloadLink = {
		name: string;
		url: string;
		primary?: boolean;
	};
	type DownloadTag = "server" | "app" | "add-on" | "library" | "tool" | "legacy";
	type DownloadFilter = DownloadTag | "all";

	type DownloadProject = {
		name: string;
		description: string;
		note?: string;
		tags: DownloadTag[];
		links: DownloadLink[];
	};

	const filters: Array<{ label: string; value: DownloadFilter }> = [
		{ label: "all", value: "all" },
		{ label: "servers", value: "server" },
		{ label: "apps", value: "app" },
		{ label: "add_ons", value: "add-on" },
		{ label: "libraries", value: "library" },
		{ label: "tools", value: "tool" },
		{ label: "legacy", value: "legacy" },
	];

	const downloads: DownloadProject[] = [
		{
			name: "KekUploadServer",
			description: "Server binaries and release assets for self-hosted KekUpload instances.",
			tags: ["server"],
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
			tags: ["app"],
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
			tags: ["app"],
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
			tags: ["add-on"],
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
			tags: ["library"],
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
			tags: ["library"],
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
			tags: ["tool"],
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
			tags: ["legacy", "server"],
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
			description: "Svelte frontend release tags for KekUpload.",
			tags: ["app"],
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
			description: "TypeScript library package for KekUpload.",
			tags: ["library"],
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
			tags: ["tool"],
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
		{
			name: "qBittorrent-Enhanced-Edition-Alpha",
			description: "qBittorrent Enhanced Edition alpha builds for Linux and Windows.",
			tags: ["app"],
			links: [
				{
					name: "latest_release",
					url: "https://github.com/GamePowerX/qBittorrent-Enhanced-Edition-Alpha/releases/latest",
					primary: true,
				},
				{
					name: "all_releases",
					url: "https://github.com/GamePowerX/qBittorrent-Enhanced-Edition-Alpha/releases",
				},
			],
		},
	];

	let query = "";
	let selectedFilter: DownloadFilter = "all";

	$: normalizedQuery = query.trim().toLowerCase();
	$: filteredDownloads = downloads.filter((project) => {
		const matchesFilter = selectedFilter === "all" || project.tags.includes(selectedFilter);
		const searchText = [
			project.name,
			project.description,
			...project.tags,
			...project.links.map((link) => link.name),
		]
			.join(" ")
			.toLowerCase();

		return matchesFilter && (!normalizedQuery || searchText.includes(normalizedQuery));
	});

	function clearFilters() {
		query = "";
		selectedFilter = "all";
	}
</script>

<svelte:head>
	<title>GamePowerX | Downloads</title>
</svelte:head>

<h1>Downloads</h1>

<p class="intro">
	Download the latest GamePowerX apps, tools, libraries, and add-ons from our official
	release and package pages.
</p>

<div class="filters" aria-label="Download filters">
	<label>
		<span>filter_downloads</span>
		<input bind:value={query} type="search" placeholder="Search downloads" />
	</label>

	<div class="filter-buttons" aria-label="Download categories">
		{#each filters as filter}
			<button
				class:active={selectedFilter === filter.value}
				type="button"
				aria-pressed={selectedFilter === filter.value}
				onclick={() => (selectedFilter = filter.value)}>{filter.label}</button
			>
		{/each}
	</div>

	{#if query || selectedFilter !== "all"}
		<button class="clear" type="button" onclick={clearFilters}>clear_filters</button>
	{/if}
</div>

<p class="result-count">{filteredDownloads.length} of {downloads.length} downloads</p>

{#if filteredDownloads.length > 0}
	<section class="downloads" aria-label="Project downloads">
		{#each filteredDownloads as project (project.name)}
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
{:else}
	<p class="empty">No downloads match the selected filters.</p>
{/if}

<style>
	.intro {
		max-width: 650px;
		margin-top: 10px;
	}

	.filters {
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 5px;
		display: grid;
		gap: 12px;
		margin-top: 24px;
		padding: 14px;
	}

	.filters label {
		display: grid;
		gap: 6px;
	}

	.filters label span {
		color: #ffcc00;
		font-size: 14px;
	}

	input {
		background: #000000;
		border: 1px solid #aa8800;
		border-radius: 5px;
		color: #ffffff;
		font-size: 14px;
		padding: 8px 10px;
		width: 100%;
	}

	input::placeholder {
		color: #aaaaaa;
	}

	input:focus-visible {
		outline: 2px solid #ffcc00;
		outline-offset: 2px;
	}

	.filter-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.filter-buttons button,
	.clear {
		font-size: 13px;
		padding: 5px 9px;
	}

	.filter-buttons button.active {
		background: #ffcc00;
		border-color: #ffcc00;
		color: #000000;
	}

	.clear {
		justify-self: start;
	}

	.result-count,
	.empty {
		color: #aa8800;
		font-size: 14px;
		margin-top: 12px;
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
		color: #000000;
	}

	a.primary:hover,
	a.primary:focus-visible {
		border-color: #aa8800;
	}

	@media (min-width: 700px) {
		.downloads {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
