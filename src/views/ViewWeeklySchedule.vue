<template>
  <v-row class="fill-height">
    <page-info>На тази страница ще намерите информация за седмичната програма и режима на малките кактусчета - техните уроци, игри, занимания, хранения и други.
      Щракнете върху събитие от календара за повече информация.
    </page-info>
    
    <v-col>
        <v-sheet height="600">


          <v-calendar
            ref="calendar"
            v-model="focus"
            color="yellow"
            :events="events"
            :event-color="getEventColor"
            :event-margin-bottom="3"
            :now="today"
            :type="type"
            :first-interval="first"
                    :interval-count="count"
            @click:event="showEvent"
            :weekdays="[1, 2, 3, 4, 5, 6, 0]"
            :short-intervals="true"
          ></v-calendar>
          
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            full-width
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon v-if="userIsAuthenticated">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
 
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="red"
                  @click="selectedOpen = false"
                >
                  Затвори
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>

import PageInfo from '@/components/Common/PageInfo.vue'
import { authenticate } from '@/services/AuthenticationServices'

export default {
 data: () => ({
    today: '2019-08-15',
    focus: '2019-08-15',
    type: 'week',
    count: 12,
    first: 7,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
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
    ],
  }),
  components: {
    PageInfo
  },
  mixins : [authenticate],
  methods: {
    getEventColor (event) {
      return event.color
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
  },
}
</script>

<style>
.v-calendar-daily__head {
  margin-right: 0 !important;
}
.v-calendar-daily__scroll-area {
  overflow-y: unset !important;
}
</style>