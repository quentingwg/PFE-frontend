<script>
    import HelloWorld from "$lib/Components/HelloWorld.svelte";
    import { onMount } from "svelte";
    
    let name = "loadin...";
    onMount(async () => {
        const response = await fetch('/api/helloWorld');
        const json = await response.json();
        name = json.name
    })
</script>

<HelloWorld {name}/>
<nav>
    <a href="/api/creche">creche</a><br>
    <a href="/api/connexion">connexion</a><br>
</nav>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
