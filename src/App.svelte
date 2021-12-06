<script>
  import Card from 'pages/Card.svelte';
  import Index from './index.svelte';
import Button from 'pages/Button.svelte';
import Line from 'components/Line.svelte';
import Taps from 'pages/Taps.svelte';
</script>

<Index />
<div>
  <Card />

  <Line class='my-8' />

  <Button />


  <Taps />
</div>

<style lang="scss">
  :global(body) {
    @apply bg-gray-200;
  }
</style>
