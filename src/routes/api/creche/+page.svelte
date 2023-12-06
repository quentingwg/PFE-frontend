<script>
  import ItemLine from "$lib/Components/ItemLine.svelte";
  import { onMount } from "svelte";

  // TODO replace with content from GET/creche/defaultOrder (or other name)
  const ListItemTesting = [{label:"langes", qty:42}, {label:"guants", qty:421}];

  onMount(()=>{
    // TODO GET all info from creche (-> lazy loading)
    // @ts-ignore
    document.querySelector(`#crecheName`).value = "value from GET"
    // @ts-ignore
    document.querySelector(`#crecheCity`).value = "value from GET"
    // @ts-ignore
    document.querySelector(`#crecheAddress`).value = "value from GET"
  })

  function onClickSauvegarder(){
    // TODO PUT (modify) requeste or POST (create)
    // THEN
    history.back();
  }

  function onClickAnnuler(){
    history.back();
  }

  function onClickSupprimer(){
    // TODO recup l'id de la creche et supprimer via requete
    // THEN
    history.back();
  }
</script>


<form>
  <div class="administrative">
    <label for="crecheName">Nom de la crèche</label><br>
    <input type="text" id="crecheName" placeholder="Les p'tits Choux" required><br>

    <label for="crecheCity">Ville</label><br>
    <input type="text" id="crecheCity" placeholder="Leuven" required><br>

    <label for="crecheAddress">Addresse</label><br>
    <input type="text" id="crecheAddress" placeholder="rue des champs, 12" required><br>
  </div><br>
  
  <div class="defaultOrder">
    <!--TODO : add liste d'article de commande par défaut via un GET /article-->
    {#each ListItemTesting as item}
      <ItemLine {...item} /> <!--TODO click sur les buttons -> 'required' alert si les champs requis sont vide-->
    {/each}
  </div><br>

  <div class="cmdBtn">
    <button on:click={onClickSauvegarder} >Sauvegarder</button>
    <button on:click={onClickAnnuler}     >Annuler</button>
    <button on:click={onClickSupprimer}   >Supprimer</button>
  </div>
  
</form>