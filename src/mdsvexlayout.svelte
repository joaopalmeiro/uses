<script context="module">
  // https://github.com/pngwn/MDsveX/discussions/292
  // https://mdsvex.com/docs#custom-components
  import HeadingOne from "./lib/HeadingOne.svelte";
  import HeadingTwo from "./lib/HeadingTwo.svelte";
  import HeadingThree from "./lib/HeadingThree.svelte";

  export { HeadingOne as h1, HeadingTwo as h2, HeadingThree as h3 };
</script>

<slot />
