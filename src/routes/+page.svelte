<script>
  import "@unocss/reset/tailwind.css"
  import "uno.css"
</script>

<div class='flex flex-col gap-4 w-20'>
	<div class="test-a">A</div>
	<div class="test-b">B</div>
</div>


<style lang="postcss">
  .test-a {
    @apply shadow-lg;  
    @apply rounded-md bg-slate-300 shadow-amber-500;
  }
	.test-b {
    @apply shadow-lg rounded-md bg-slate-300 shadow-amber-500;
  }
</style>
