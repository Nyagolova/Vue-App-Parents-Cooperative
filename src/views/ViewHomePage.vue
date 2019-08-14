<template>
  <div>
    <div>Home Page</div>




    <v-container
            class="pa-2"
            fluid
          >
            <v-row>
              <v-col  v-for="Story in StriesData" 
                    :key="Story.StoryId" >

                  <story 
                    :StoryDate="Story.StoryDate"
                    :StoryTitle="Story.StoryTitle"
                    :StoryText="Story.StoryText"
                    :StoryPhoto="Story.StoryPhoto"
                    > 
                  </story>

                </v-col>
                </v-row>
    </v-container>

  </div>
</template>

<script>

import Story from '@/components/Operative/Story.vue'

export default {
  data () {
        return {
            StriesData: [
              {StoryDate: '18/02/2019 12:30', StoryTitle:'First Story',StoryText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",StoryPhoto:'',StoryId:'1'},
              {StoryDate: '20/05/2019 09:15', StoryTitle:'Second Story',StoryText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",StoryPhoto:'',StoryId:'2'},
              {StoryDate: '03/07/2019 17:45', StoryTitle:'Third Story',StoryText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",StoryPhoto:'',StoryId:'3'},
              {StoryDate: '20/05/2019 09:15', StoryTitle:'Second Story',StoryText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",StoryPhoto:'',StoryId:'4'},
              {StoryDate: '03/07/2019 17:45', StoryTitle:'Third Story',StoryText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",StoryPhoto:'',StoryId:'5'},
            ]
        }
  },
  components: {
    Story
  }
}
</script>

<style>

</style>