<template>
      <v-card         
        outlined
        :max-width="maxwidth"
        :height="height"
        class="mt-3"
      >

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">{{StoryTitle}}</v-list-item-title>
                <v-list-item-subtitle>{{StoryDate}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-img
          class="white--text"
          height="200px"
          :src="StoryPhoto"
        >
        </v-img>
  
        <v-card-text>
            <span class="text--primary">
                {{StoryText}}
            </span>
        </v-card-text>

        <v-card-actions >
          <v-btn outlined color="cyan">Прочети повече</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    props: ['StoryDate','StoryTitle','StoryText','StoryPhoto'],
    data: () => ({
        loading: false,
        maxwidth: 1000,
        height: undefined,
    }),
}
</script>

<style>

</style>