<script lang="ts">
    import Typer from "$lib/Typer.svelte";

    const words = [
        "Artists",
        "Developers",
        "Students",
        "Creative People",
        "Machinists",
        "Designers",
    ];

    function some() {}
    some();

    const projects = [
        {
            name: "kekupload",
            description: [
                "KekUpload is an implementation of an HTTP app",
                "for uploading and sharing files easily.",
            ],
            links: [
                {
                    url: "https://github.com/GamepowerX/kekupload-server",
                    name: "kekupload_server",
                },
                {
                    url: "https://github.com/GamepowerX/kekupload-client",
                    name: "kekupload_client",
                },
                {
                    url: "https://upload.gamepowerx.com",
                    name: "demo",
                },
            ],
        },
    ];

    const lines =
        5 +
        projects.reduce(
            (p, v) => p + 2 + v.description.length + v.links.length,
            0
        );
</script>

<svelte:head>
    <title>GamepowerX | About</title>
</svelte:head>

<h1>GamepowerX</h1>
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

        {#each projects as project}
            {#each project.description as description}
                <span class="comment"> // {description}</span>
            {/each}

            <span>
                <span class="func">declare</span>(<span class="string"
                    >"{project.name}"</span
                >,
                <span class="keyword">function</span>() &lbrace;
            </span>

            {#each project.links as link}
                <span>
                    &nbsp;&nbsp;
                    <a href={link.url}>
                        <span class="func">{link.name}</span></a
                    >();
                </span>
            {/each}
            <span>&rbrace;);</span>
        {/each}
    </code>
</div>

<style>
    hr {
        margin: 40px 0;
    }

    .projects {
        border: 1px solid rgba(255, 255, 255, 0.3);
        background-color: black;
        display: flex;
    }

    .projects ul {
        list-style: none;
        background-color: #111;
        padding: 10px 10px;
        border-right: 1px solid rgba(255, 255, 255, 0.3);
    }

    .projects ul li {
        color: #aaa;
        height: 20px;
        text-align: right;
    }

    code {
        padding: 10px 10px;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
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
