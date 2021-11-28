<script>
  import {
    header,
    body,
    footer,
    thumbnail,
    cardStyle,
    cardType,
    cardThumbnailUrl,
    cardTitle,
    cardSubtilte,
    cardBodyContetn,
    cardLinkTitle,
    cardLinkUrl,
  } from 'store/card';

  import Line from './Line.svelte';

  // $: console.log(cardOptions)
</script>

<div class="box">
  <div class="item">
    <h4 class="item_title">Card Option</h4>

    <div class="card_option-container">
      <div class="card_option">
        <input
          type="checkbox"
          name="header"
          id="header"
          bind:checked={$header}
        />
        <label for="header"> header </label>
      </div>

      <div class="card_option">
        <input
          type="checkbox"
          name="footer"
          id="footer"
          bind:checked={$footer}
        />

        <label for="footer"> footer </label>
      </div>

      <div class="card_option">
        <input
          type="checkbox"
          name="thumbnil"
          id="thumbnil"
          bind:checked={$thumbnail}
        />

        <label for="thumbnil"> thumbnil </label>
      </div>

      <div class="card_option">
        <input type="checkbox" name="body" id="body" bind:checked={$body} />

        <label for="body"> body </label>
      </div>
    </div>
  </div>

  <Line />

  <div class="item">
    <h4 class="item_title">Card style</h4>

    <div class="c-select">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        ><title>ic_keyboard_arrow_up_48px</title>
        <g fill="#e8e8e8">
          <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z" />
        </g>
      </svg>
      <select name="card-style" id="card-style" bind:value={$cardStyle}>
        <option value="boxed">boxed</option>
        <option value="boxless">boxless</option>
      </select>
    </div>
  </div>

  <!-- card type -->
  <!-- <div class="item">
    <h4 class="item_title">Card type</h4>

    <select name="card-type" id="card-type" bind:value={$cardType}>
      <option value="news">news</option>
      <option value="show">show</option>
    </select>
  </div> -->

  <Line />

  <div class="item">
    <h4 class="item_title">Card Thumbinl url</h4>

    <input
      type="text"
      name="card-image-url"
      id="card-image-url"
      bind:value={$cardThumbnailUrl}
    />
  </div>

  <Line />

  <div class="item">
    <h4 class="item_title">Card tilte</h4>

    <input
      type="text"
      name="card-title"
      id="card-title"
      bind:value={$cardTitle}
    />
  </div>

  <div class="item">
    <h4 class="item_title">Card Subtitle</h4>

    <input
      type="text"
      name="card-subtitle"
      id="card-subtitle"
      bind:value={$cardSubtilte}
    />
  </div>

  <div class="item">
    <h4 class="item_title">Card Body text</h4>

    <textarea
      name="card-body-content"
      id="card-body-content"
      bind:value={$cardBodyContetn}
    />
  </div>

  <Line />

  <div class="item card_link">
    <h4 class="item_title">Card Link</h4>

    <div>
      <label for="card-link-text"> Text </label>
      <input
        type="text"
        name="card-link-text"
        id="card-link-text"
        bind:value={$cardLinkTitle}
      />
    </div>

    <div>
      <label for="card-link-url"> Url </label>
      <input
        type="text"
        name="card-link-url"
        id="card-link-url"
        bind:value={$cardLinkUrl}
      />
    </div>
  </div>
</div>

<style lang="scss">
  label {
    @apply uppercase text-xs;
  }

  textarea {
    @apply min-h-[150px];
  }

  select,
  input,
  textarea {
    @apply bg-indigo-50/50 p-2 inline-block rounded w-full;
    /* @apply bg-red-500/50; */
  }

  .box {
    @apply rounded  text-black;
  }

  .c-select {
    @apply relative;

    svg {
      transform: translateY(-50%) rotate(180deg);
      @apply absolute right-3 top-1/2 w-[22px];

      stroke: #333;
      fill: #333;
      stroke-width: 2px;

      g {
        stroke: inherit;
        fill: inherit;
      }
    }

    select {
      @apply appearance-none;
      
    }
  }

  .item {
    @apply mb-6;

    &_title {
      @apply font-semibold my-2;
    }

    .card_option-container {
      @apply flex justify-between max-w-min;
    }

    .card_option {
      @apply flex justify-between items-center max-w-min;

      &:not(:last-of-type) {
        @apply mr-3;
      }

      input {
        @apply mr-2 w-auto;
      }

      label {
        @apply hover:cursor-pointer;
      }
    }
  }

  .card_link {
    label {
      @apply mb-3 text-xs;
    }

    input {
      @apply mb-6;
    }
  }
</style>
