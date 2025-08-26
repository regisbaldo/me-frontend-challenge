<template>
  <div class="detail-container">
    <detail-header-info />

    <detail-card title="Card Title" subtitle="Card Subtitle">
      <template #extra-title-info>
        <detail-badge text="#1014898"></detail-badge>
      </template>

      <template #body>
        <detail-grid
          :columns="[
            {
              items: [
                { icon: 'circle-info', text: '123 Main St, Springfield, IL' },
                {
                  icon: 'user',
                  text: 'O Box 1477 - Birmingham AL - 35201-4666 - United States of America'
                }
              ]
            },
            {
              items: [
                { icon: 'user', text: '1301 Glendale Blvd, Los Angeles, CA 90026, USA' },
                { icon: 'user', text: 'sdsd' }
              ]
            }
          ]"
        />
      </template>
    </detail-card>

    <detail-collapser class="collapser" text="Addresses">
      <div class="addresses-cards">
        <detail-card title="Card Title" subtitle="Card Subtitle">
          <template #body>
            <detail-grid
              :columns="[
                {
                  items: [
                    { icon: 'circle-info', text: '123 Main St, Springfield, IL' },
                    { icon: 'user', text: 'Home Address' }
                  ]
                },
                {
                  items: [
                    { icon: 'user', text: '(123) 456-7890' },
                    { icon: 'user', text: 'test' }
                  ]
                },
                {
                  items: [
                    { icon: 'user', text: '(123) 456-7890' },
                    { icon: 'user', text: 'test' }
                  ]
                }
              ]"
            />
          </template>
        </detail-card>

        <detail-card title="Card Title" subtitle="Card Subtitle">
          <template #body>
            <detail-grid
              :columns="[
                {
                  items: [
                    { icon: 'circle-info', text: '1301 Glendale Blvd, Los Angeles, CA 90026, USA' },
                    { icon: 'user', text: 'Home Address' }
                  ]
                }
              ]"
            />
          </template>
        </detail-card>

        <detail-card title="Card Title" subtitle="Card Subtitle">
          <template #extra-title-info>
            <detail-badge text="#1014898"></detail-badge>
          </template>
        </detail-card>

        <detail-card title="Card Title" subtitle="Card Subtitle">
          <template #extra-title-info>
            <detail-badge text="#1014898"></detail-badge>
          </template>
        </detail-card>
      </div>
    </detail-collapser>
  </div>
</template>

<script setup>
import DetailHeaderInfo from '../components/DetailHeaderInfo.vue';
import DetailCard from '../components/DetailCard.vue';
import DetailBadge from '../components/DetailBadge.vue';
import DetailCollapser from '../components/DetailCollapser.vue';
import DetailGrid from '../components/DetailGrid.vue';
</script>

<style lang="scss">
.detail-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > .collapser > .collapser-body > .addresses-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
