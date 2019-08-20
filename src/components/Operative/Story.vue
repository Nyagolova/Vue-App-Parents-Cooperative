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
                {{trimmedStoryText}}
            </span>
        </v-card-text>

        <v-card-actions >
          <v-btn outlined color="cyan" :to="storyURL">Прочети повече</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    props: ['StoryDate','StoryTitle','StoryText','StoryPhoto', 'StoryID'],
    data: () => ({
        loading: false,
        maxwidth: 1000,
        height: undefined,
        maxStoryTextLetters: 200
    }),
    computed: {
      trimmedStoryText () {
        if(this.StoryText.length > this.maxStoryTextLetters) {
          return this.StoryText.slice(0, this.maxStoryTextLetters) + " ...";
        } else {
          return this.StoryText
        }
      },
      storyURL () {
        return "/story/" + this.StoryID
      }
    }
}
</script>

<style>

</style>