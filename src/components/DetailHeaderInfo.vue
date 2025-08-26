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
          <detail-item-info text="jacksonvillegroup@me.com" icon="light-envelope" />
          <detail-item-info text="903-575-3050" icon="light-phone" />
          <detail-item-info text="903-575-3050" icon="light-fax" />
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

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

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

    @media (max-width: 480px) {
      border-radius: 8px;
    }

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

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }

    @media (max-width: 480px) {
      flex-direction: row;
    }

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
        grid-template-columns: repeat(3, auto);
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
          grid-template-columns: repeat(2, auto);
        }
      }

      @media (max-width: 480px) {
        & > .infos {
          grid-template-columns: auto;
        }
      }
    }

    & > .price-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 5px;
      text-align: right;

      @media (max-width: 768px) {
        align-items: start;
        text-align: left;
      }

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
