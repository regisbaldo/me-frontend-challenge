<template>
  <div class="me-error-page" data-testid="error-page">
    <div class="me-error-page__wrapper">
      <p class="me-error-page__title">Ops, order not found</p>
      <p class="me-error-page__subtitle">Perhaps you can try to refresh the page.</p>

      <button class="me-error-page__button" @click="$emit('refresh')" data-testid="retry-button">Retry</button>
    </div>
  </div>
</template>

<style lang="scss">
@use 'sass:color';

.me-error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 10;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background: get-color('primary', 50);
    box-shadow: 0px 4px 8px 0px $primary-50;
    border-radius: 8px;
    gap: 20px;

    padding: 40px;
  }


    &__title {
      @include get-typography('h4');
      color: get-color('error', 500);
      text-transform: uppercase;
    }

    &__subtitle {
      @include get-typography('subtitle');
      color: get-color('neutral', 700);
      max-width: 160px;
    }

    &__button {
      background-color: get-color('primary', 500);
      color: $white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      cursor: pointer;

      @include get-typography('subtitle');

      &:hover {
        background-color: color.adjust(get-color('primary', 500), $lightness: -10%);
        transition: background-color 0.3s ease-in-out;
      }
  }
}
</style>
