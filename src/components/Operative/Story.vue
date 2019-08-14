<template>
  <div>
      <v-card 
        :flat="flat"
        :loading="loading"
        :outlined="outlined"
        :elevation="elevation"
        :raised="raised"
        :max-width="maxwidth"
        :height="height"
      >

        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">{{StoryTitle}}</v-list-item-title>
                <v-list-item-subtitle>{{StoryDate}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-img
          v-if="media"
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
  
        <v-card-text>
            <span class="text--primary">
                {{StoryText}}
            </span>
        </v-card-text>

        <v-card-actions v-if="actions">
          <v-btn outlined color="cyan">Прочети повече</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
    props: ['StoryDate','StoryTitle','StoryText','StoryPhoto'],
    data: () => ({
        flat: false,
        media: true,
        loading: false,
        actions: true,
        outlined: false,
        elevation: undefined,
        raised: false,
        maxwidth: 900,
        height: undefined,
    }),
}
</script>

<style>

</style>