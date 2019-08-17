<template>
  <v-row class="fill-height">
    
    <page-info>На тази страница ще намерите информация за седмичната програма и режима на малките кактусчета - техните уроци, игри, занимания, хранения и други.
      Щракнете върху събитие от календара за повече информация.
    </page-info>
    
    <activities-calendar></activities-calendar>

  </v-row>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import ActivitiesCalendar from '@/components/Operative/ActivitiesCalendar.vue'

export default {
  components: {
    PageInfo,
    ActivitiesCalendar
  }
}

</script>

<style>

</style>