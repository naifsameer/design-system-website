<style type="text/postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
/* @layer base {} */
  @layer utilities {
    .c-border {
      @apply border-gray-300;
    }

    .naif {
      color: red;
    }
  }

  body {
    /* @apply bg-gradient-to-l to-blue-400 from-purple-400; */
    font-family: sans-serif !important;
  }

  html, body {
    scroll-behavior: smooth;
  }
</style>
