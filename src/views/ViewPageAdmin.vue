<template>
  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(adminForm, i) in adminPanelForms"
      :key="i"
    >
      <v-expansion-panel-header>{{adminForm.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <component v-bind:is="adminForm.componentName"></component>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>

import AddCalendarEvent from '@/components/Operative/Admin/AddCalendarEvent'
import AddMenuDish from '@/components/Operative/Admin/AddMenuDish'
import AddNewsStory from '@/components/Operative/Admin/AddNewsStory'

export default {
  data () {
    return {
      adminPanelForms: [
        {
          title: 'Добави новина',
          componentName: 'add-news-story'
        },
        {
          title: 'Добави дейност в календара',
          componentName: 'add-calendar-event'
        },
        {
          title: 'Добави ястие в менюто',
          componentName: 'add-menu-dish'
        }
      ]
    }
  },
  components: {
    AddCalendarEvent,
    AddMenuDish,
    AddNewsStory
  }
}
</script>
    
<style>

</style>