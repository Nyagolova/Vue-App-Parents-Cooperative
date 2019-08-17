<template>
  <v-row class="fill-height">
    
    <page-info>На тази страница ще намерите информация за седмичната програма и режима на малките кактусчета - техните уроци, игри, занимания, хранения и други.
      Щракнете върху събитие от календара за повече информация.
    </page-info>
    
    <activities-calendar :Events="Events">
      
    </activities-calendar>

  </v-row>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import ActivitiesCalendar from '@/components/Operative/ActivitiesCalendar.vue'

export default {
  components: {
    PageInfo,
    ActivitiesCalendar
  },
  data () {
        return {
            Events:[
                    {
                      name: 'Ваканция',
                      details: 'Отиваме на плаж!',
                      start: '2019-08-15 08:00',
                      end: '2019-08-15 17:00',
                      color: 'cyan',
                    },
                    {
                      name: 'Среща',
                      details: 'Среща, на която ще се обсъждат много важни неща',
                      start: '2019-08-12 09:00',
                      end: '2019-08-12 09:30',
                      color: 'purple',
                    },
                    {
                      name: 'Някакъв евент',
                      details: 'Нещо интересно ще става тук',
                      start: '2019-08-12 11:00',
                      end: '2019-08-12 12:00',
                      color: 'orange',
                    },
                    {
                      name: 'Важна среща',
                      details: 'Много важна среща, на която нищо няма да се обсъди реално',
                      start: '2019-08-13 10:00',
                      end: '2019-08-13 15:00',
                      color: 'blue',
                    },
                    {
                      name: 'Рисуване',
                      details: 'Рисуване с акварелни бои на пейзаж или ваза',
                      start: '2019-08-17 10:00',
                      end: '2019-08-17 13:30',
                      color: 'green',
                    },
                    {
                      name: 'Малък евент',
                      start: '2019-08-16 17:00',
                      end: '2019-08-16 18:00',
                      color: 'blue',
                    },
                    {
                      name: 'Нещоси',
                      details: 'Може би пикник, а може би не?',
                      start: '2019-08-14 12:00',
                      end: '2019-08-14 16:00',
                      color: 'deep-orange',
                    }
                  ]
        }
  }
}

</script>

<style>

</style>