<template>
  <div class="me-error-page-container">
    <div class="wrapper">
      <p class="title">Ops, order not found</p>
      <p class="subtitle">Perhaps you can try to refresh the page.</p>

      <button class="button" @click="$emit('refresh')">Retry</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.me-error-page-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  & > .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background: get-color('primary', 50);
    box-shadow: 0px 4px 8px 0px $primary-50;
    border-radius: 8px;
    gap: 20px;

    padding: 40px;

    & > .title {
      @include get-typography('h4');
      color: get-color('error', 500);
      text-transform: uppercase;
    }

    & > .subtitle {
      @include get-typography('subtitle');
      color: get-color('neutral', 700);
      max-width: 160px;
    }

    & > .button {
      background-color: get-color('primary', 500);
      color: $white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      cursor: pointer;

      @include get-typography('subtitle');

      &:hover {
        background-color: darken(get-color('primary', 500), 10%);
        transition: background-color 0.3s ease-in-out;
      }
    }
  }
}
</style>
