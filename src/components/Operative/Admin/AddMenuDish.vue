<template>
  <v-container >

    <v-alert   dense   text   type="success" v-if="showSuccessMessage">
      Успешно добавихте ястие в дневното меню!
    </v-alert>

    <v-row>
      <v-col>
        <v-select
          :items="daysOfTheWeek"
          label="Ден от седмицата"
          v-model="weekDay"
          v-validate="'required'"
          :error-messages="errors.collect('daysOfTheWeek')"
          data-vv-name="daysOfTheWeek"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          :items="dishTypes"
          label="Тип"
          v-model="dishType"
          v-validate="'required'"
          :error-messages="errors.collect('dishTypes')"
          data-vv-name="dishTypes"
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
              v-validate="'required'"
              :error-messages="errors.collect('dishPhoto')"
              data-vv-name="dishPhoto"
              accept="image/*"
              prepend-icon="mdi-camera"
          ></v-file-input>
      </v-col>
    </v-row>

    <v-textarea 
        outlined
        v-model="dishDescription"
      
        name="input-7-4"
        label="Ястие описание"
        value=""
    ></v-textarea>

    <v-btn outlined color="cyan" :disabled="hasErrors" @click="onUploadDish()"> Добави ястие </v-btn>

    <v-overlay :value="showLoadingOverlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

  </v-container>
</template>

<script>

import { DailyMenuService } from '@/services/DataServices'

export default {
  data () {
    return {
      daysOfTheWeek: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
      daysOfTheWeekByID: {
        'Понеделник': 0,
        'Вторник': 1,
        'Сряда': 2,
        'Четвъртък': 3,
        'Петък': 4,
        'Събота' : 5,
      },
      dishTypes: ['Закуска', 'Обяд', 'Следобедна закуска'],
      dishTypesByID : {
        'Закуска' : 'Breakfast',
        'Обяд' : 'Lunch',
        'Следобедна закуска' : 'SecondBreakfast'
      },
      weekDay: '',
      dishType: '',
      dishTitle: '',
      dishPhoto: null,
      dishDescription: '',
    }
  },
  mixins: [DailyMenuService],
  computed: {
    weekDayID () {
      return this.daysOfTheWeekByID[this.weekDay]
    },
    dishTypeID () {
      return this.dishTypesByID[this.dishType]
    },
    hasErrors () {
      return this.errors.items.length !== 0 ;
    }
  },
  methods: {
    onUploadDish() {
      this.$validator.validateAll().then(
        () => {
          if (!this.hasErrors) {
            this.addNewDish(this.dishTitle, this.dishDescription, this.dishTypeID, this.dishPhoto, this.weekDayID, this.dishType).then( 
              () => {
                this.clearAllTextfields();
              }
            )
          }
        }
      )
    },
    clearAllTextfields () {
      this.errors.items = []
      this.dishTitle = '';
      this.dishDescription = '';
      this.dishPhoto = null;
      this.weekDay = '';
      this.dishType = '';
    } 
  }
}
</script>

<style>

</style>