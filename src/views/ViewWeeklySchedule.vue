<template>
  <v-row class="fill-height">
    
    <page-info>На тази страница ще намерите информация за седмичната програма и режима на малките кактусчета - техните уроци, игри, занимания, хранения и други.
      Щракнете върху събитие от календара за повече информация.
    </page-info>
    
    <v-card 
      v-if="isWeeklyScheduleDataReady"
      class="mt-4"
      width="1000" 
      outlined
    >
      <v-card-actions v-if="userIsAuthenticated">
        <v-spacer></v-spacer>
        <v-btn outlined color="cyan"><v-icon>mdi-plus</v-icon>Добави</v-btn>
      </v-card-actions>
      <activities-calendar :Events="WeeklySchedule_Data">
      </activities-calendar>
    </v-card>
    <v-container v-else>
        <v-text-field color="cyan" loading ></v-text-field>
    </v-container>
  </v-row>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import ActivitiesCalendar from '@/components/Operative/ActivitiesCalendar.vue'
import { WeeklyScheduleService } from '@/services/DataServices'
import { authService, authenticate } from '@/services/AuthenticationServices'



export default {
  components: {
    PageInfo,
    ActivitiesCalendar
  },
  mixins: [WeeklyScheduleService,authService, authenticate],
}

</script>

<style>

</style>