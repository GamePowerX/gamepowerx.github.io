<svelte:head>
	<title>GamePowerX | Branding</title>
</svelte:head>

<h1>Brand Resources</h1>
<p>These brand resources are licensed under the MIT License.</p>

<hr />

<h2>Name</h2>
<p>The GamePowerX name must be capitalized correctly.</p>

<br />

<ul class="valid spellings">
	<li>GamePowerX</li>
	<li>GAMEPOWERX</li>
	<li>gamepowerx</li>
	<li>GPX</li>
	<li>gpx</li>
</ul>

<ul class="invalid spellings">
	<li>GamepowerX</li>
	<li>gamepowerX</li>
	<li>game_power_x</li>
	<li>gamePowerX</li>
</ul>

<hr />

<h2>Font</h2>
<p>
	Our brand fonts are sourced from <a href="https://fontsource.org">fontsource.org</a>
</p>

<br />

<a
	href="https://fontsource.org/fonts/jetbrains-mono"
	style="font-family: 'Jetbrains Mono', sans-serif;">Jetbrains Mono</a
>

<a
	href="https://fontsource.org/fonts/alfa-slab-one"
	style="font-family: 'Alfa Slab One', sans-serif;">Alfa Slab One</a
>

<hr />

<h2>Colors</h2>

<p>These may be used to style projects, which are affiliated with GamePowerX.</p>

<br />

<ul class="palette">
	<li style="background: #ffffff; color: black">#ffffff</li>
	<li style="background: #ffcc00; color: black">#ffcc00</li>
	<li style="background: #aa8800; color: black">#aa8800</li>
	<li style="background: #aaaaaa; color: black">#aaaaaa</li>
	<li style="background: #333333; color: white">#333333</li>
	<li style="background: #000000; color: white">#000000</li>
</ul>

<hr />

<h2>Logo</h2>

<p>This may be used to link to our services and projects.</p>

<br />

<a href="/gamepowerx_logo.svg">
	<button>SVG</button>
</a>
<a href="/gamepowerx_logo_512.png">
	<button>PNG (x512)</button>
</a>
<a href="/gamepowerx_logo_256.png">
	<button>PNG (x256)</button>
</a>
<a href="/gamepowerx_logo_64.png">
	<button>PNG (x64)</button>
</a>

<img src="/gamepowerx_logo.svg" alt="Logo_SVG" />

<style>
	.palette li {
		padding: 10px;
	}

	.palette {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}

	img {
		width: 100%;
	}

	.spellings {
		list-style: none;
	}

	.valid li {
		color: lightgreen;
	}

	.invalid li {
		text-decoration: line-through;
		color: lightcoral;
	}
</style>
