<script>
  export let label = "Caisses de langes"
  export let qty = 42

  function incrementeQty(){
    qty++
  }

  function decrementeQty(){
    qty--
  }

</script>

<div>
  {label}
  {qty}
  <button on:click={incrementeQty}>+</button>
  <button on:click={decrementeQty}>-</button>
</div><br>