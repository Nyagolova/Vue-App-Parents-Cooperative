<template>
    <v-container>

      <v-row align="center"
            justify="center">
        
        <v-col cols="8">
          <v-text-field
              v-model="EventTitle"
              v-validate="'required|min:5'"
              :error-messages="errors.collect('EventTitle')"
              label="Заглавие на събитието"
              data-vv-name="EventTitle"
              required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                :color="color"
                dark
                v-on="on"
              >
                Цвят на събитието
              </v-btn>
            </template>

              <v-color-picker
                v-model="color"
                value="pink"
                hide-canvas 
                hide-inputs 
                show-swatches 
                class="mx-auto"
              ></v-color-picker>
          </v-menu>
        </v-col>

      </v-row>  
          <v-textarea 
              outlined
              v-model="EventDetails"
              v-validate="'required|min:20'"
              :error-messages="errors.collect('EventDetails')"
              data-vv-name="EventDetails"
              name="input-7-4"
              label="Описание на събитието"
              value=""
          ></v-textarea>

          <v-row>
            <v-col>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Picker without buttons"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col> 

            <v-col> 
              <v-select
                v-model="start"
                :items="timeStart"
                color="green"
                label="Начален час"
                v-validate="'required'"
                :error-messages="errors.collect('start')"
                data-vv-name="start"
              ></v-select>
            </v-col>
          
            <v-col> 
               <v-select
                v-model="end"
                :items="timeStart"
                color="red"
                label="Краен час"
                v-validate="'required'"
                :error-messages="errors.collect('end')"
                data-vv-name="end"
              ></v-select>
            </v-col>
          </v-row>

          <v-btn outlined color="cyan" :disabled="hasErrors" @click="UploadEvent()"> Добави събитие </v-btn>

          <v-overlay :value="overlay">
              <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
 
    </v-container>
</template>

<script>

import { WeeklyScheduleService } from '@/services/DataServices'

export default {
    $_veeValidate: {
      validator: 'new',
    },
    data () {
        return {
          color: 'pink',
          startTime: '',
          start: '',
          end: '',
          todayDate: new Date().toLocaleString(),
          EventTitle: '',
          EventDetails: '',
          filedata: null,
          overlay: false,
          date: new Date().toISOString().substr(0, 10),
          menu: false,
          modal: false,
          menu2: false,
          timeStart: ['8:00', '8:30', '9:00', '9:30', '10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00']
        }
    },
    mixins: [WeeklyScheduleService],
    computed: {
      hasErrors () {
        return this.errors.items.length !== 0 ;
      }
    },
    methods: {
      UploadEvent() {
        this.$validator.validateAll().then(
          () => {
            if (!this.hasErrors) {
              this.addEvent(this.color, this.start, this.end, this.EventTitle,  this.EventDetails, this.date)
            }
          }
        )
      }
    }
}
</script>

<style>

</style>