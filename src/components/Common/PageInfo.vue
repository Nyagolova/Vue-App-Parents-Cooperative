<template>
    <v-card
      class="mx-auto"
      light
      outlined
    >
      <v-card-text class="page-info">
        <big><slot></slot></big>
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