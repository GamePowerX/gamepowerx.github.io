<footer>
	<img src="/gamepowerx_logo.svg" alt="Logo" />

	<section>
		<section>
			<ul>
				<li><p>GamePowerX</p></li>
				<li><a href="/">about_us()</a></li>
				<li><a href="/downloads">downloads()</a></li>
				<li><a href="/join">join_us()</a></li>
				<li><a href="/brand">brand()</a></li>
			</ul>

			<ul>
				<li><p>Socials</p></li>
				<li><a href="https://discord.gg/czeW6HnRvz">Discord</a></li>
				<li><a href="https://github.com/GamePowerX">Github</a></li>
                <li><a href="https://social.gamepowerx.com">Mastodon</a></li>
			</ul>
		</section>

		<br />

		<p>
			Made by
			<a class="kek" href="https://lbirkert.com">Lucas Birkert</a>
		</p>

		<p>&copy; 2025 GamePowerX</p>
	</section>
</footer>

<style>
	footer {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		align-items: center;
		padding: 30px 0;

		display: flex;
		column-gap: 20px;
		row-gap: 10px;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 192px;
		height: 192px;
	}

	footer > section {
		display: flex;
		row-gap: 10px;
		flex-direction: column;
		align-items: center;
	}

	footer > section > section {
		display: flex;
		flex-wrap: wrap;
		column-gap: 25px;
		row-gap: 30px;
	}

	@media (max-width: 500px) {
		footer {
			flex-direction: column;
			row-gap: 40px;
			font-size: 18px;
		}

		footer > section > section {
			margin-bottom: 30px;
		}

		footer > section > section ul {
			row-gap: 10px;
		}

		footer > section > section a {
			padding: 5px 0;
		}
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	ul > li > p {
		color: #ffcc00;
		font-weight: 600;
	}

	ul a {
		text-decoration: none;
	}

	ul a:hover {
		color: #eee;
	}

	.kek {
		font-family: "Alfa Slab One", sans-serif;
		text-decoration: none;
		border-bottom: transparent;
	}

	.kek:hover {
		color: #ffcc00;
		border-bottom: 2px solid #ffcc00;
	}
</style>
