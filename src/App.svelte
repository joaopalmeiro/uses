<script>
  import Header from "./lib/Header.svx";
  import Running from "./lib/Running.svx";
  import Sep from "./lib/Sep.svelte";
</script>

<main class="px-8">
  <!-- https://github.com/sw-yx/swyxkit/blob/main/src/routes/%5Bslug%5D.svelte -->
  <!-- https://swyxkit.netlify.app/foo/ -->
  <article class="w-full max-w-2xl mx-auto">
    <Header />
    <Sep />
    <Running />
  </article>
</main>
