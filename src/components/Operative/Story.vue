<template>
      <v-card 
        :flat="flat"
         
        :outlined="outlined"
         
        
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
          v-if="media"
          class="white--text"
          height="200px"
          src="https://raisingtoddlerscourageously.com/hosted/images/ab/00f6f0baa211e8bdb2590576343e33/Copy-of-Untitled.png"
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
</template>

<script>
export default {
    props: ['StoryDate','StoryTitle','StoryText','StoryPhoto'],
    data: () => ({
        flat: false,
        media: true,
        loading: false,
        actions: true,
        outlined: true,
        maxwidth: 1000,
        height: undefined,
    }),
}
</script>

<style>

</style>