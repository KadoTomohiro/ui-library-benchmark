<script lang="ts">
  export let value: string = "";
</script>

<div class="wrapper">
  <input type="text" class="input" bind:value />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    grid-template-rows: 3rem auto 3rem;

    border: 1px solid var(--text-color);
    background-color: var(--bg-sub-color);
    background-repeat: repeat;
  }

  .input {
    grid-area: 2 / 2;
    font-size: 2.5rem;
    padding: 0.5rem;
  }
</style>
