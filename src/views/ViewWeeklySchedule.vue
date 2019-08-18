<template>
  <v-row class="fill-height">
    
    <page-info>На тази страница ще намерите информация за седмичната програма и режима на малките кактусчета - техните уроци, игри, занимания, хранения и други.
      Щракнете върху събитие от календара за повече информация.
    </page-info>
    
    <v-card 
      class="mt-4"
      width="1000" 
      outlined
    >
      <activities-calendar :Events="WeeklySchedule_Data">
        
      </activities-calendar>
      
    </v-card>
  </v-row>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import ActivitiesCalendar from '@/components/Operative/ActivitiesCalendar.vue'
import { WeeklyScheduleService } from '@/services/DataServices'

export default {
  components: {
    PageInfo,
    ActivitiesCalendar
  },
  mixins: [WeeklyScheduleService],
}

</script>

<style>

</style>