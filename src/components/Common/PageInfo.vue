<template>
    <v-card
      class="mx-auto"
      light
      max-width="900"
    >
      <v-card-text class="headline  page-info">
        <slot></slot>
      </v-card-text>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>
.page-info {
    color: #00bcd4 !important;
}
</style>