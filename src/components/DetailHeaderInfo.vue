<template>
  <div class="overview-wrapper">
    <div class="pre-order-container">
      <span class="pre-order">Pre-Order</span>
      <span class="number">{{ info?.number }}</span>
      <span class="serial">#ME{{ info?.serial }}</span>
    </div>

    <div class="contact-wrapper">
      <span class="buyer">{{ info?.buyer }}</span>

      <detail-item-info class="contact-name" :text="info?.contact?.name" icon="light-user" />
      <div class="infos">
        <detail-item-info :text="info?.contact?.email" icon="light-envelope" />
        <detail-item-info :text="info?.contact?.phone" icon="light-phone" />
        <detail-item-info :text="info?.contact?.fax" icon="light-fax" />
      </div>
    </div>
    <div class="price-wrapper">
      <span class="price">{{ info?.currency }} {{ info?.price }}</span>
      <span class="status">{{ info?.status }}</span>
      <div class="created-at">
        <span>Created at {{ formattedDate }}</span>

        <detail-icon name="circle-info" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import DetailIcon from '@/components/DetailIcon.vue'
import DetailItemInfo from './DetailItemInfo.vue'
import dayjs from 'dayjs'

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  return !props.info ? '' : dayjs(props.info.createdAt).format('YYYY-MM-DD [at] HH:mm:ss')
})
</script>

<style lang="scss">
.overview-wrapper {
  display: grid;
  grid-template-columns: 200px 1fr 220px;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-areas:
      'pre-order pre-order'
      'contact price';
  }

  & > .pre-order-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: get-color('primary', 500);
    color: $white;
    padding: 16px;
    border-radius: 0px 8px 8px 0px;

    width: 200px;
    height: 110px;

    @media (max-width: 576px) {
      border-radius: 8px;
      grid-area: pre-order;
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

  & > .contact-wrapper {
    & > .buyer {
      @include get-typography('h5');
      color: get-color('neutral', 700);
      display: block;
      padding-bottom: 12px;
    }

    & > .contact-name {
      padding-bottom: 4px;
    }

    & > .infos {
      max-width: 400px;
      display: grid;
      grid-template-columns: repeat(3, auto);
      row-gap: 4px;
      column-gap: 16px;
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

    @media (max-width: 576px) {
      grid-area: contact;

      & > .infos {
        grid-template-columns: auto;
      }
    }
  }

  & > .price-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    text-align: right;

    @media (max-width: 768px) {
      align-items: start;
      text-align: left;
    }

    @media (max-width: 576px) {
      grid-area: price;
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
</style>
