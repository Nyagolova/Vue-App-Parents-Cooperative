<template>
  <div>
    <page-info> 
      Тук ще намерите информация за хранителния режим на малките кактусчета. 
      Рецептите са грижливо подбрани, за да са полезни и вкусни за децата.
      Може да видите продуктите, които се използват за всяко ястие, като щракнете върху него.
    </page-info>

    <v-layout justify-center v-if="this.isDailyMenuDataReady" >
      <v-row >
        <v-col  cols="4"
          v-for="(day, index) in DailyMenuService_Data"
          :key="index"
        > 
          <daily-menu :DailyMenu="day.properties">
            {{day.weekday}}
          </daily-menu>
        </v-col>
      </v-row>
    </v-layout>
    <div v-else>
        <v-text-field color="cyan" loading disabled></v-text-field>
    </div>

  </div>
</template>

<script>
import PageInfo from '@/components/Common/PageInfo.vue'
import DailyMenu from '@/components/Operative/DailyMenu.vue'

import { DailyMenuService } from '@/services/DataServices.js'

export default {
    components: {
        PageInfo,
        DailyMenu
    },
    mixins : [DailyMenuService]
}
</script>

<style>

</style>