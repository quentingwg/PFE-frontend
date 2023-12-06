<script>
  /**
   * @type {string}
   */
  export let name
  /**
   * @type {string}
   */
  export let role

  /**
   * 
   * @param {string} cookiedUser 
   */
  function connectAs(cookiedUser){ // TODO id instead ? what about admin (not in DB)?
    document.cookie = `auth=${cookiedUser} ;` // TODO rename?/export (auth) (in connexion/+page.svelte too)
    console.log(`Connecting as ${cookiedUser}`, document.cookie)
  }
</script>

<div>
  <button on:click={() => connectAs(name)}>{name} {role}</button>
</div>