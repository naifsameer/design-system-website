<script>
  import {
    header,
    body,
    footer,
    thumbnail,
    cardStyle,
    // cardType,
    cardThumbnailUrl,
    cardTitle,
    cardSubtilte,
    cardBodyContetn,
    cardLinkTitle,
    cardLinkUrl,
  } from 'store/card';

  import headerImage from 'assets/svelte.png';
  import cardImage from 'assets/card-image.jpg';
  import userAvatar from 'assets/user-avatar.jpg';
</script>

<div class={`${$cardStyle} card`}>
  <!-- header -->
  {#if $header}
    <div class={$header ? 'c-header is-active' : 'is-active'}>
      <div class="c-header__user">
        <img class="c-header__img" src={userAvatar} alt="card header" />

        <span class="c-header__user-name">Naif Sameer</span>
      </div>

      <svg
        class="c-header__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        ><g
          class="nc-icon-wrapper"
          stroke-linecap="square"
          stroke-linejoin="miter"
          stroke-width="2"
          fill="#e8e8e8"
          stroke="#e8e8e8"
          ><polygon
            fill="none"
            stroke="#e8e8e8"
            stroke-miterlimit="10"
            points="26,30 16,24 6,30 6,2 26,2 "
            transform="translate(0, 0)"
          /></g
        ></svg
      >
    </div>
  {/if}

  <!-- thumbnail -->
  {#if $thumbnail}
    <div class="c-thumbnail">
      <img
        src={$cardThumbnailUrl.length > 4 ? $cardThumbnailUrl : cardImage}
        alt="card thumbnail"
      />
    </div>
  {/if}

  <!-- card content -->
  {#if $body}
    <div class="c-content">
      <h4 class="c-content__title">{$cardTitle}</h4>

      <h5 class="c-content__subtitle">{$cardSubtilte}</h5>

      <p class="c-content__desc">
        {$cardBodyContetn}
      </p>

      <a class="c-content__link" href={$cardLinkUrl}>
        {$cardLinkTitle}
      </a>
    </div>
  {/if}

  <!-- footer -->
  {#if $footer}
    <div class="c-footer">
      <button class="c-footer__btn">Read more</button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="c-footer__icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        ><title>ic_share_48px</title>
        <g fill="#e8e8e8">
          <path
            d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31 0 3.22 2.61 5.83 5.83 5.83s5.83-2.61 5.83-5.83-2.61-5.83-5.83-5.83z"
          />
        </g>
      </svg>
    </div>
  {/if}
</div>

<style lang="scss">
 

  .card {
    width: 350px;
    margin: 2em auto;
  }

  /* header  */
  .c-header {
    @apply flex justify-between items-center;

    .c-header__user {
      @apply flex justify-between items-center;
    }

    &__img {
      @apply rounded-full mr-2 w-[35px] h-[35px]
        object-cover object-top;
    }

    &__user-name {
      @apply font-medium uppercase;
    }

    &__icon {
      @apply w-[18px];
      polygon {
        stroke: #333;
        stroke-width: 3px;
      }
    }
  }

  /* thumbnail */
  .c-thumbnail {
    @apply flex justify-center;

    img {
      @apply w-full h-60 object-cover;
    }
  }

  /* card content */
  .c-content {
    &__title {
      @apply text-xl font-semibold mb-2 mt-4;
    }

    &__subtitle {
      @apply text-base text-gray-800 font-medium -mt-2 mb-2;
    }

    &__desc {
      @apply text-gray-600 text-xs;
    }

    &__link {
      @apply inline-block font-medium text-blue-600 no-underline my-2;
      @apply text-xs;
    }
  }

  /* footer */
  .c-footer {
    @apply flex justify-between;

    &__btn {
      @apply px-3 py-2
      text-white 
      bg-gray-800
        rounded;
    }

    &__icon {
      @apply w-[18px] h-auto hover:cursor-pointer;

      stroke: #333;
      stroke-width: 3px;
    }
  }

  // controll classes
  .boxed {
    &.card {
      @apply border border-gray-300 text-xs
      rounded;
    }

    .c-header {
      @apply py-2 px-3 border-b  border-gray-300;
    }

    .c-content {
      @apply px-4 pb-2;
    }

    .c-footer {
      @apply border-t border-gray-300
      py-2 px-3;

      &__btn {
        @apply px-4 py-3;
      }
    }
  }
</style>
