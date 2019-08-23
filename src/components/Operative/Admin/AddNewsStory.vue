<template>
    <v-container>
           
            <v-row> 
                <v-col cols="8"> 
                    <v-text-field
                        v-model="StoryTitle"
                        v-validate="'required|min:5'"
                        :error-messages="errors.collect('StoryTitle')"
                        label="Заглавие на новината"
                        data-vv-name="StoryTitle"
                        required
                    ></v-text-field>
                </v-col>

                <v-col> 
                    <v-file-input
                        v-model="filedata"
                        label="Качи снимка"
                        v-validate="'required'"
                        :error-messages="errors.collect('filedata')"
                        data-vv-name="filedata"
                        filled
                        accept="image/*"
                        prepend-icon="mdi-camera"
                    ></v-file-input>
                </v-col>

            </v-row>
            
            <v-textarea 
                outlined
                v-model="StoryText"
                v-validate="'required|min:100'"
                :error-messages="errors.collect('StoryText')"
                data-vv-name="StoryText"
                name="input-7-4"
                label="Текст на новината"
                value=""
            ></v-textarea>

            <v-btn outlined color="cyan" :disabled="hasErrors" @click="UploadStory()"> Добави новина </v-btn>
 
            <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
 
    </v-container>
</template>

<script>
import { StoriesService } from '@/services/DataServices'

export default {
    $_veeValidate: {
        validator: 'new',
    },
    data () {
        return {
            todayDate: new Date().toLocaleString(),
            StoryTitle: '',
            StoryText: '',
            filedata: null,
            overlay: false
        }
    },
    computed: {
        hasErrors () {
            return this.errors.items.length !== 0 ;
        },
        storyID () {
            return this.StoryTitle.replace(/\s+/g, '-').toLowerCase();
        }
    },
    mixins: [StoriesService], 
    methods: {
        UploadStory () {
            this.$validator.validateAll().then(  
                () => {
                    if (!this.hasErrors) {
                        console.log('3242423')
                        this.addNewStory(this.StoryTitle, this.StoryText, this.filedata, this.storyID , this.todayDate)
                    }
                }
            )
            
        }
    } 
}
</script>

<style>

</style>