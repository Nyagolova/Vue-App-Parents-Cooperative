<template>
    <v-col  >
      <v-sheet height="600"   outlined >
        <v-calendar
          ref="calendar"
          v-model="today"
          color="yellow"
          :events="Events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          type="week"
          :first-interval="first"
          :interval-count="count"
          @click:event="showEvent"
          :weekdays="[1, 2, 3, 4, 5, 6, 0]"
          short-intervals
        >
        </v-calendar>
          
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
              <v-btn icon v-if="userIsAuthenticated" @click="onDeleteEvent(selectedEvent); selectedOpen = false">
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-toolbar-title v-html="selectedEvent.name">
              </v-toolbar-title>
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
</template>

<script>

import { authService } from '@/services/AuthenticationServices'
import { WeeklyScheduleService } from '@/services/DataServices'

export default {
    props: ['Events'],
    data: () => ({
        today: new Date().toISOString().substr(0, 10),
        type: 'week',
        count: 12,
        first: 7,
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
    }),
    mixins : [authService, WeeklyScheduleService],
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
      onDeleteEvent (event) {
        this.deleteEvent(event)
      }
    }
    
}
</script>

<style>
    .v-calendar-daily__head {
      margin-right: 0 !important;
    }
    .v-calendar-daily__intervals-head{
      width: 70px !important;
    }
    .v-calendar-daily__intervals-body{
      width: 70px !important;
    }
    .v-calendar-daily__scroll-area {
      overflow-y: unset !important;
    }

</style>