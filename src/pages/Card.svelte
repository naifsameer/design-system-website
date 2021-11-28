<script>
  import Line from 'components/Line.svelte';
  import Controll from '../components/Controll.svelte';
  import Preview from '../components/Preview.svelte';
</script>

<div class="container">
  <h1 class="title">Card Component system</h1>

  <Line />

  <div class="column">
    <Controll />
  </div>

  <div class="column">
    <Preview />
  </div>
</div>

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .container {
    width: calc(100% - 1.5em);
    @apply flex flex-wrap max-w-full justify-between;
    @apply mx-auto px-3;

    .title {
      @apply w-full;
      @apply my-6;
      @apply font-medium text-center text-3xl text-blue-900;
    }

    .column {
      @apply rounded w-full md:w-1/2;

      &:first-of-type {
        @apply md:pr-1;
      }
    }
  }
</style>
