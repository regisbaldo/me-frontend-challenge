<template>
  <div class="detail-container">
    <detail-header-info />

    <detail-card
      title="Card Title"
      subtitle="Card Subtitle"
    >
      <template #extra-title-info>
        <detail-badge text="#1014898"></detail-badge>
      </template>

    </detail-card>

        <detail-card
      title="Card Titasdsadasle"
      subtitle="Card Subtitle"
    >
      <template #extra-title-info>
        <detail-badge text="#1014898"></detail-badge>
      </template>
    </detail-card>
  </div>
</template>

<script setup>
import DetailHeaderInfo from '../components/DetailHeaderInfo.vue';
import DetailCard from '../components/DetailCard.vue';
import DetailBadge from '../components/DetailBadge.vue';
</script>

<style lang="scss">
.detail-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
