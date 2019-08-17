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
          v-for="(day, index) in Dishes"
          :key="index"
        > 
          <daily-menu :Dishes="day.properties">
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

export default {
  components: {
    PageInfo,
    DailyMenu
  },
  data: () => ({
    weekdays: ['Понеделник','Вторник','Сряда','Четврътък','Петък','Събота'],
    Dishes: [{
        "weekday": "Понеделник",
        "properties": [{
                color: '#ffff62',
                dishImgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Muesli.jpg/220px-Muesli.jpg',
                dishTitle: 'Овесени ядки',
                dishType: 'Закуска',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'http://assets.kulinaria.bg/attachments/pictures-images/0000/1918/MAIN-vegetarianska-musaka.jpg?1431936459',
                dishTitle: 'Мусака',
                dishType: 'Обяд',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x500.jpg',
                dishTitle: 'Плодове',
                dishType: 'Следобедна закуска',
            }
        ]
    }, {
        "weekday": "Вторник",
        "properties": [{
                color: '#ffff62',
                dishImgSrc: 'https://www.dinneratthezoo.com/wp-content/uploads/2015/04/banana-pancakes-4.jpg',
                dishTitle: 'Бананови палачинки',
                dishType: 'Закуска',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'http://www.1001recepti.com/images/photos/recipes/size_5/pile-s-oriz-1-[1940].jpg',
                dishTitle: 'Пиле с ориз',
                dishType: 'Обяд',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'http://prekrasna.bg/wp-content/uploads/2014/02/krekeri.jpg',
                dishTitle: 'Крекери',
                dishType: 'Следобедна закуска',
            }
        ]
    }, {
        "weekday": "Сряда",
        "properties": [{
                color: '#ffff62',
                dishImgSrc: 'http://cook4cook.com/wp-content/uploads/b/buterbrody-k-zavtraku/1.jpg',
                dishTitle: 'Сандвичи',
                dishType: 'Закуска',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://gotvach.bg/files/lib/600x350/kufteta-parjeni11.jpg',
                dishTitle: 'Кюфтета',
                dishType: 'Обяд',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://gotvach.bg/files/lib/250x250/choco-pudding-coconut.jpg',
                dishTitle: 'Крем какао',
                dishType: 'Следобедна закуска',
            }
        ]
    }, {
        "weekday": "Четвъртък",
        "properties": [{
                color: '#ffff62',
                dishImgSrc: 'https://gotvach.bg/files/lib/600x350/new_banica_sirene.jpg',
                dishTitle: 'Баница',
                dishType: 'Закуска',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'http://www.gotvetesmen.com/images/recipes/4557_82282.jpg',
                dishTitle: 'Боб яхния',
                dishType: 'Обяд',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Fruit-Salad-SWP-500x500.jpg',
                dishTitle: 'Плодове',
                dishType: 'Следобедна закуска',
            }
        ]
    }, {
        "weekday": "Петък",
        "properties": [{
                color: '#ffff62',
                dishImgSrc: 'https://s.rozali.com/p/m/a/makaroni-sirene-25830-500x334.jpg',
                dishTitle: 'Макарони със сирене',
                dishType: 'Закуска',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://www.az-jenata.bg/media/az-jenata/files/articles/640x480/75ae6d902a0c178f536eb89fc0ac32d5.jpg',
                dishTitle: 'Пълнен пипер',
                dishType: 'Обяд',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://theviewfromgreatisland.com/wp-content/uploads/2019/04/fruit-salad-with-creamy-coconut-poppy-seed-dressing-8503620-April-01-2019.jpg',
                dishTitle: 'Плодова салата',
                dishType: 'Следобедна закуска',
            }
        ]
    }, {
        "weekday": "Събота",
        "properties": [{
                color: '#ffff62',
                dishImgSrc: 'https://thumbs.dreamstime.com/z/bowl-healthy-muesli-milk-26241381.jpg',
                dishTitle: 'Мюсли с прясно мляко',
                dishType: 'Закуска',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'http://www.supichka.com/files/images/1386/sarmi.jpg',
                dishTitle: 'Зелеви сaрми',
                dishType: 'Обяд',
            },
            {
                color: '#ffff62',
                dishImgSrc: 'https://ezine.bg/files/lib/600x350/makaroni-sas-sirene.jpg',
                dishTitle: 'Макарони на фурна',
                dishType: 'Следобедна закуска',
            }
        ]
    }]
  }),
}
</script>

<style>

</style>