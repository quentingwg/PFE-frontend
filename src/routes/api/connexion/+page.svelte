<script>
  import User from "$lib/Components/User.svelte";
  import { onMount } from "svelte";

  // TODO : GET /users THEN sort by Admin first then delivery
  const usersTest = [{name:"Admin", role:"admin"},{name:"Tom", role:"delivery"},{name:"Fred", role:"delivery"}]

  function logOut(){
    document.cookie = "auth=e ; Max-Age=-99999999;"// TODO rename?/export (auth) (in User.svelte too)
    history.back()
  }
</script>

<div>
  {#each usersTest as user}
    <User {...user} />
  {/each}
</div><br>

{#if document.cookie != ""} <!--TODO check this cndt (like useState) ex right after connecting-->
  <button on:click={ logOut }>logOut</button>
{/if}
<button on:click={() => history.back() }>-&gt; Index</button>
<button on:click={() => console.log(document.cookie) }>COOKIE</button>