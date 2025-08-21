<template>
  <div class="main-container">
    <detail-card
      title="Card Title"
      subtitle="Card Subtitle"
    >
      <template #extra-title-info>
        <detail-badge text="#1014898"></detail-badge>
      </template>

    </detail-card>
  </div>
</template>

<script setup>
import DetailCard from './components/DetailCard.vue';
import DetailBadge from './components/DetailBadge.vue';
</script>

<style lang="scss">
.main-container {
  margin: 30px;
  background: $base;
  height: 100vh;
}
</style>
