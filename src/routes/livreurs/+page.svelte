<script>

    import { livreurs } from './data.js';
    export let data ;
</script>

<h1> ceci est la page des livreurs</h1>

<ul>
	{#each livreurs as { nom, tournee }}
		<li><a href="/livreur/{tournee}">{nom}</a></li>
	{/each}
</ul>


