<template>
  <div>
    <page-info> 
      Тук ще намерите информация за хранителния режим на малките кактусчета. 
      Рецептите са грижливо подбрани, за да са полезни и вкусни за децата.
      Може да видите продуктите, които се използват за всяко ястие, като щракнете върху него.
    </page-info>

    <v-row  >
      
      <v-col 
        v-for="(day, index) in weekdays"
        :key="index"
      > 
        <daily-menu :items="items">
          {{day}}
        </daily-menu>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageInfo from '@/components/Common/PageInfo.vue'
import DailyMenu from '@/components/Operative/DailyMenu.vue'

export default {
  components: {
    PageInfo,
    DailyMenu
  },
  data: () => ({
    weekdays: ['Понеделник','Вторник','Сряда','Четврътък','Петък','Събота'],
    items: [
      {
        color: '#ffff62',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Muesli.jpg/220px-Muesli.jpg',
        title: 'Овесени ядки',
        artist: 'Закуска',
      },
      {
        color: '#ffff62',
        src: 'http://assets.kulinaria.bg/attachments/pictures-images/0000/1918/MAIN-vegetarianska-musaka.jpg?1431936459',
        title: 'Мусака',
        artist: 'Обяд',
      },
      {
        color: '#ffff62',
        src: 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x500.jpg',
        title: 'Плодове',
        artist: 'Следобедна закуска',
      }
    ],
  }),
}
</script>

<style>

</style>