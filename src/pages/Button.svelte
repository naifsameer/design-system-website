<script>
  import DriftIcon from 'svg/DriftIcon.svelte';
  import UploadIcon from 'svg/UploadIcon.svelte';
  import ViewIcon from 'svg/ViewIcon.svelte';
  import ReverishIcon from 'svg/ReverishIcon.svelte';
  import Line from 'components/Line.svelte';
</script>

<div class="btn-container">
  <h1 class="title">Button Component</h1>

  <Line class="my-16" />

  <div>
    <h2>Normal buttons</h2>

    <div class="btns btn-bg">
      <button class="blue">
        <span class="mx-1">Refresh</span>
      </button>

      <button class="red">
        <span class="mx-1">Drift</span>
      </button>

      <button class="green">
        <span class="mx-1">Upload</span>
      </button>

      <button class="purple">
        <span class="mx-1">View</span>
      </button>
    </div>

    <div class="btns btns-border">
      <button class="blue">
        <span class="mx-1">Refresh</span>
      </button>

      <button class="red">
        <span class="mx-1">Drift</span>
      </button>

      <button class="green">
        <span class="mx-1">Upload</span>
      </button>

      <button class="purple">
        <span class="mx-1">View</span>
      </button>
    </div>

    <div class="btns btns-secondary">
      <button class="blue">
        <span class="mx-1">Refresh</span>
      </button>

      <button class="red">
        <span class="mx-1">Drift</span>
      </button>

      <button class="green">
        <span class="mx-1">Upload</span>
      </button>

      <button class="purple">
        <span class="mx-1">View</span>
      </button>
    </div>
  </div>

  <Line class="my-16" />

  <div>
    <h2>Button with icons</h2>
    <div class="btns btn-bg">
      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>

      <button class="red">
        <DriftIcon />
        <span class="mx-1">Drift</span>
      </button>

      <button class="green">
        <UploadIcon />
        <span class="mx-1">Upload</span>
      </button>

      <button class="purple">
        <ViewIcon />
        <span class="mx-1">View</span>
      </button>
    </div>

    <div class="btns btns-border">
      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>

      <button class="red">
        <DriftIcon />
        <span class="mx-1">Drift</span>
      </button>

      <button class="green">
        <UploadIcon />
        <span class="mx-1">Upload</span>
      </button>

      <button class="purple">
        <ViewIcon />
        <span class="mx-1">View</span>
      </button>
    </div>

    <div class="btns btns-secondary">
      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>

      <button class="red">
        <DriftIcon />
        <span class="mx-1">Drift</span>
      </button>

      <button class="green">
        <UploadIcon />
        <span class="mx-1">Upload</span>
      </button>

      <button class="purple">
        <ViewIcon />
        <span class="mx-1">View</span>
      </button>
    </div>
  </div>

  <Line class="my-16" />

  <div>
    <h2>Button size</h2>

    <div class="btns btn-bg btn-size">
      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>

      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>

      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>

      <button class="blue">
        <ReverishIcon />
        <span class="mx-1">Refresh</span>
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .title {
    @apply my-6 mb-8
        font-medium text-center text-3xl text-blue-900;
  }

  h2 {
    @apply my-6 mb-8 px-4 py-2
        font-medium text-center text-2xl text-green-500 border-2
        border-dotted border-green-600 max-w-max mx-auto;
  }

  .btn-container {
    @apply bg-gray-100 text-center
      px-4 py-8 pb-32 rounded;
  }

  button {
    @apply flex items-center 
      px-3 py-2
      font-medium tracking-wide 
      text-white capitalize 
      transition-colors duration-200 transform
      border-2 rounded-md;
  }

  .btns {
    @apply flex justify-evenly max-w-[600px] mx-auto flex-wrap;
  }

  .btn-bg {
    button {
      border-color: inherit;

      &.blue {
        @apply bg-blue-600 hover:bg-blue-500;
      }

      &.red {
        @apply bg-red-600 hover:bg-red-500;
      }

      &.green {
        @apply bg-green-600 hover:bg-green-500;
      }

      &.purple {
        @apply bg-purple-600 hover:bg-purple-500;
      }
    }
  }

  .btns-border {
    button {
      @apply bg-transparent border-2  mt-6;

      &.blue {
        @apply text-blue-600 border-blue-600;
      }

      &.red {
        @apply text-red-600 border-red-600;
      }

      &.green {
        @apply text-green-600 border-green-600;
      }

      &.purple {
        @apply text-purple-600 border-purple-600;
      }
    }
  }

  .btns-secondary {
    button {
      @apply bg-transparent border-transparent mt-6 ring-2 ring-gray-300;

      &.blue {
        @apply text-blue-600;
      }

      &.red {
        @apply text-red-600;
      }

      &.green {
        @apply text-green-600;
      }

      &.purple {
        @apply text-purple-600;
      }
    }
  }

  .btn-size {
    &.btns {
      @apply max-w-max block mx-auto;
    }

    button {
      @apply mb-6;
    }

    button:nth-of-type(2) {
      padding: 1.25em;
    }
    button:nth-of-type(3) {
      padding: 1.5em;
    }
    button:nth-of-type(4) {
      padding: 2em;
    }
  }
</style>
