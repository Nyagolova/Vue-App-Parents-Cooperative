<template>
  <div>
    <page-info> 
      Тук ще намерите информация за хранителния режим на малките кактусчета. 
      Рецептите са грижливо подбрани, за да са полезни и вкусни за децата.
      Може да видите продуктите, които се използват за всяко ястие, като щракнете върху него.
    </page-info>
    
    <v-layout justify-center>
      <v-row >
        <v-col  cols="4"
          v-for="(day, index) in MealsByDay"
          :key="index"
        > 
          <daily-menu :MealsByDay="day.properties">
            {{day.weekday}}
          </daily-menu>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import PageInfo from '@/components/Common/PageInfo.vue'
import DailyMenu from '@/components/Operative/DailyMenu.vue'
import { db } from '@/services/firebaseInit'

export default {
  components: {
    PageInfo,
    DailyMenu
  },
  data: () => ({
    MealsByDay: []
  }),
  firebase: {
    MealsByDay: db.ref('CactusDailyMenu'),
  }
}
</script>

<style>

</style>