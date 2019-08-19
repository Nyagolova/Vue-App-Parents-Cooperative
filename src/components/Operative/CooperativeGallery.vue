<template>
    <v-container style="width: 500px">
        <v-carousel
            height="400"
            hide-delimiter-background
        >
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                style="height:auto;"
            >
                <v-app-bar dark elevation="0" color="pink">
                    <v-toolbar-title >
                        {{ item.text }}
                    </v-toolbar-title>
                </v-app-bar>
            
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    src: 'https://kaluga.glavny.tv/sites/default/files/styles/large/public/mainphotos/22245/20-millionov-vydelili-v-kaluge-na-kapitalnyy-remont-detskih-sadov-27951.jpg?itok=yLgZgkM-',
                    text: 'Кът за игри'
                },
                {
                    src: 'https://i.pinimg.com/originals/fa/1b/1e/fa1b1e5643bfbf207c5cb0e196c0b33e.jpg',
                    text: 'Спалнята'
                },
                {
                    src: 'https://www.thisoldhouse.com/sites/default/files/styles/social_share/public/migrated/tout-images/colorful-kitchensA-x.jpg?itok=GJ-9SLJZ',
                    text: 'Кухнята'
                },
                {
                    src: 'http://beyazesyaservisi.info/wp-content/uploads/2019/01/backyard-swing-sets-for-toddlers-big-set-the-latest-home-decor-ideas-1.jpg',
                    text: 'В двора'
                },
                {
                    src: 'https://www.schreiner-burkhardt.de/wp-content/uploads/2012/11/Kinderzimmer10-1-858x572.jpg',
                    text: 'Нашия дрешник'
                }
            ]
        }
    },
}
</script>

<style>

</style>