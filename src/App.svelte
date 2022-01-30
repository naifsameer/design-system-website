<script>
  import Card from 'pages/Card.svelte';
  import Index from './index.svelte';
  import Button from 'pages/Button.svelte';
  import Line from 'components/Line.svelte';
  import Taps from 'pages/Taps.svelte';

  import cardImage from 'assets/card-bg.svg';
</script>

<Index />


<div>





  <div class="card">
    <img src={cardImage} alt="card" class="card__img" />

    <div class="card__content">
      <h3 class="card__title">Card Title</h3>

      <h4 class="card__subtitle">Card Suptitle</h4>

      <p class="card__desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quo
        doloremque corporis .
      </p>

      <button class="card__btn">Action 1</button>
      <button class="card__btn">Action 2</button>
    </div>




    

  </div>

  <Card />

  <Line class="my-8" />

  <Button />

  <Taps />
</div>

<style lang="scss">
  :global(body) {
    @apply bg-gray-200;
  }

  .card {
    @apply mb-40 w-[400px] mx-auto mt-16 rounded overflow-hidden border-[1px] border-gray-300 shadow-md;

    &__content {
      @apply p-4;
    }

    &__title {
      @apply text-2xl font-semibold;
    }

    &__subtitle {
      @apply text-base text-gray-600;
    }

    &__desc {
      @apply text-base text-gray-600 mt-4;
    }

    &__btn  {
      @apply mt-6 mr-2 text-xl text-purple-800;
    }
  }
</style>
