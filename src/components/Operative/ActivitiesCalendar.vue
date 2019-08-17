<template>
    <v-col  >
      <v-sheet height="600"   outlined >
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="yellow"
          :events="Events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          :first-interval="first"
                  :interval-count="count"
          @click:event="showEvent"
          :weekdays="[1, 2, 3, 4, 5, 6, 0]"
          :short-intervals="true"
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
              <v-btn icon v-if="userIsAuthenticated">
                <v-icon>mdi-pencil</v-icon>
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

import { authenticate } from '@/services/AuthenticationServices'

export default {
    props: ['Events'],
    data: () => ({
        today: '2019-08-15',
        focus: '2019-08-15',
        type: 'week',
        count: 12,
        first: 7,
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false
    }),
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
    .v-calendar-daily__intervals-head{
      width: 70px !important;
    }
    .v-calendar-daily__intervals-body{
      width: 70px !important;
    }
    .v-calendar-daily__scroll-area {
      overflow-y: unset !important;
    }
    /* .col{
    border: #e0e0e0 1px solid;
    border-right: none;
    } */
</style>