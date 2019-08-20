<template>
    <v-container> 
      

        <v-container v-if="currentStory">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{currentStory.StoryTitle}}</v-list-item-title>
                    <v-list-item-subtitle>{{currentStory.StoryDate}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img
                :src="currentStory.StoryPhoto"
            >
            </v-img>

            <v-card-text>
                <span class="text--primary">
                    {{currentStory.StoryText}}
                </span>
            </v-card-text>

            <v-card-actions mt-4>
                <v-spacer></v-spacer>
                <v-btn outlined color="cyan" to="/">
                    <v-icon left>mdi-home</v-icon>
                    ВЪРНИ СЕ В НАЧАЛОТО
                </v-btn>
            </v-card-actions>

        </v-container>
        <v-container v-else>
            <v-text-field color="cyan" loading ></v-text-field>
        </v-container>
    </v-container>
</template>

<script>

import { StoriesService } from '@/services/DataServices'

export default {
    mixins: [StoriesService],
    computed: {
        storyID () {
            return this.$route.params.id
        },
        currentStory () {
            if (this.Stories_Data.length > 0) {
                return this.Stories_Data.find(obj => {
                    return obj.StoryId == this.storyID
                })
            } else {
                return ''
            }
        }
    }
}
</script>

<style>

</style>