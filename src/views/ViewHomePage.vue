<template>
  <div>

    <page-info>На тази страница ще намерите информация за най-новите събития и дейности, които се провеждат в Кооператив "Кактусчета".</page-info>
    
    <v-container pa-0 >
      <story v-for="Story in StriesData" 
        :key="Story.StoryId"
        :StoryDate="Story.StoryDate"
        :StoryTitle="Story.StoryTitle"
        :StoryText="Story.StoryText"
        :StoryPhoto="Story.StoryPhoto"
        > 
      </story>
 
    </v-container>

  </div>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import Story from '@/components/Operative/Story.vue'
import { db } from '@/services/firebaseInit'

export default {
  data () {
    return {
      StriesData: []
    }
  },
  components: {
    PageInfo,
    Story
  },
  firebase: {
    StriesData: db.ref('CactusNews'),
  }
}
</script>

<style>

</style>