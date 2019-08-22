<template>
    <v-container>
        <v-container >
            
            <v-row> 
                <v-col> 
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
                        label="File input"
                        filled
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

            <v-btn outlined color="cyan" @click="UploadStory()"> Добави новина </v-btn>
 
 
        </v-container>
    </v-container>
</template>

<script>
export default {
    $_veeValidate: {
        validator: 'new',
    },
    data () {
        return {
            StoryTitle: '',
            StoryText: ''
        }
    },
    methods: {
        UploadStory () {
            console.log('upload')
        }
    }
}
</script>

<style>

</style>