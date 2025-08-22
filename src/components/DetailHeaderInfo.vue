<template>
  <div class="overview-wrapper">
    <div class="pre-order-container">
      <span class="pre-order">Pre-Order</span>
      <span class="number">4510001114</span>
      <span class="serial">#ME11223344</span>
    </div>

    <div class="body-info-container">
      <div class="contact-wrapper">
        <span class="buyer">MTP West Buyer</span>

        <detail-item-info class="contact-name" text="Jacksonville Group (Jason Burn)" icon="user" />
        <div class="infos">
          <detail-item-info text="Jacksonville Group (Jason Burn)" icon="user" />
          <detail-item-info text="Jacksonville Group (Jason Burn)" icon="user" />
          <detail-item-info text="Jacksonville Group (Jason Burn)" icon="user" />
        </div>
      </div>
      <div class="price-wrapper">
        <span class="price">20000</span>
        <span class="status">Need do confirm</span>
        <div class="created-at">
          <span>Created at 2020-04-16 at 15:32:55</span>

          <detail-icon name="circle-info" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import DetailIcon from '@/components/DetailIcon.vue';
import DetailItemInfo from './DetailItemInfo.vue';

defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.overview-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;

  & > .pre-order-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: get-color('primary', 500);
    color: $white;
    padding: 20px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    max-height: 115px;

    & > .pre-order {
      @include get-typography('subtitle');
    }

    & > .number {
      @include get-typography('h4');
    }

    & > .serial {
      @include get-typography('caption');
    }
  }

  & > .body-info-container {
    display: flex;
    justify-content: space-between;

    & > .contact-wrapper {
      & > .buyer {
        @include get-typography('h5');
        color: get-color('neutral', 700);
        display: block;
        padding-bottom: 15px;
      }

      & > .contact-name {
        padding-bottom: 5px;
      }

      & > .infos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 5px;
        column-gap: 20px;
        align-items: start;

        & > * {
          word-break: break-word;
          min-height: 100%;
          display: flex;
          align-items: center;
        }
      }

      @media (max-width: 768px) {
        & > .infos {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 480px) {
        & > .infos {
          grid-template-columns: 1fr;
        }
      }
    }

    & > .price-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 5px;
      text-align: right;

      & > .price {
        @include get-typography('h5');
        color: get-color('neutral', 500);
      }
      & > .status {
        @include get-typography('h5');
        color: get-color('success', 500);
      }
      & > .created-at {
        display: flex;
        gap: 5px;
        align-items: center;
        @include get-typography('caption');
        color: get-color('neutral', 700);
      }
    }
  }
}
</style>
