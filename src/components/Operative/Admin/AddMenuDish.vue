<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          :items="daysOfTheWeek"
          label="Ден от седмицата"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          :items="dishType"
          label="Тип"
        ></v-select>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="8"> 
          <v-text-field
              v-model="dishTitle"
              v-validate="'required|min:5'"
              :error-messages="errors.collect('dishTitle')"
              label="Наименование ястие"
              data-vv-name="dishTitle"
              required
          ></v-text-field>
      </v-col>

      <v-col> 
          <v-file-input
              v-model="dishPhoto"
              label="Качи снимка"
              filled
              accept="image/*"
              prepend-icon="mdi-camera"
          ></v-file-input>
      </v-col>
    </v-row>

    <v-textarea 
        outlined
        v-model="dishDescription"
        v-validate="'required|min:100'"
        :error-messages="errors.collect('dishDescription')"
        data-vv-name="dishDescription"
        name="input-7-4"
        label="Ястие описание"
        value=""
    ></v-textarea>

    <v-btn outlined color="cyan" :disabled="false" @click="UploadStory()"> Добави ястие </v-btn>

    <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      daysOfTheWeek: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
      dishType: ['Закуска', 'Обяд', 'Вечеря'],
      dishTitle: '',
      dishPhoto: null,
      dishDescription: '',
      overlay: false
    }
  }
}
</script>

<style>

</style>