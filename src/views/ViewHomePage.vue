<template>
  <div>

    <page-info>На тази страница ще намерите информация за най-новите събития и дейности, които се провеждат в Кооператив "Кактусчета".</page-info>
    
    <v-container pa-0 v-if="isStoriesDataReady">
      <story v-for="Story in Stories_Data" 
        :key="Story.StoryId"
        :StoryDate="Story.StoryDate"
        :StoryTitle="Story.StoryTitle"
        :StoryText="Story.StoryText"
        :StoryPhoto="Story.StoryPhoto"
        :StoryID="Story.StoryId"
        > 
      </story>
    </v-container>
    <div v-else>
        <v-text-field color="cyan" loading disabled></v-text-field>
    </div>

  </div>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import Story from '@/components/Operative/Story.vue'
import { StoriesService } from '@/services/DataServices'

export default {
  components: {
    PageInfo,
    Story
  },
  mixins: [StoriesService]
}
</script>

<style>

</style>