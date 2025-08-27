<template>
  <div class="grid-wrapper">
    <div v-for="(column, columnIndex) in columns" :key="columnIndex" class="grid-column">
      <div v-for="(item, itemIndex) in column.items" :key="itemIndex" class="grid-item">
        <detail-item-info :text="item.text" :icon="item.icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DetailItemInfo from './DetailItemInfo.vue'

defineProps({
  columns: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (column) =>
          Array.isArray(column.items) &&
          column.items.every(
            (item) => typeof item.text === 'string' && (!item.icon || typeof item.icon === 'string')
          )
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  row-gap: 5px;
  column-gap: 20px;
  width: 100%;

  .grid-column {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .grid-item {
    display: flex;
    align-items: center;
    gap: 5px;

    .text {
      @include get-typography('body');
      color: get-color('neutral', 700);
    }
  }
}
</style>
