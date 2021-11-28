<script>
  import Card from './pages/Card.svelte';
  import { Router, Route, Link } from 'svelte-routing';
  import Slides from './pages/Slides.svelte';
  import Index from './index.svelte';

  let url = '';
</script>

<Index />

<Router {url}>
  <nav>
    <div class="home-container">
      <Link class=".nav__link" to="/">Home</Link>
      <Link class=".nav__link" to="card">Card</Link>
      <Link class=".nav__link" to="slides">Slides</Link>
    </div>
  </nav>

  <Route path="/">
    <div class="home">
      <div class="home-container">
        <h1 class="home__title">Home page</h1>

        <br />
        Slides:
        <Link to="slides">Slides</Link>

        <br />
        <br />
        Card demo:
        <Link to="card">Card</Link>
      </div>
    </div>
  </Route>

  <Route path="card" component={Card} />
  <Route path="slides" component={Slides} />
</Router>

<style lang="scss">
  .home-container {
    @apply container mx-auto py-4;
  }

  nav {
    @apply bg-indigo-700 text-gray-200;

    .home-container {
      @apply flex;
    }

    :global(a) {
      @apply text-base block
      px-8 py-2 
    border-white/10 border-b-2
      hover:border-white rounded rounded-b-none;
    }
  }

  .home {
    @apply bg-gray-200 
    absolute bottom-0 left-0 right-0 top-[74px]
    w-full mx-auto py-24 px-4;

    &__title {
      @apply text-5xl italic text-indigo-800;
    }

    :global(a) {
      @apply text-indigo-800 italic border-b-2 text-xl;
    }
  }
</style>
