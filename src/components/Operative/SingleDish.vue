<template>
    <v-card class="single-dish" >
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="headline" :title="Dish.dishTitle">{{Dish.dishTitle}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            
            <v-divider></v-divider>
        
            <v-row align="center" justify="center">
                <v-img
                    :src="Dish.dishImgSrc"
                    aspect-ratio="1"
                    max-width="300"
                    max-height="150"
                ></v-img>
            </v-row>
        
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title class="title">Съставки:</v-list-item-title>
                    {{Dish.dishDescription}}
                </v-list-item-content>
            </v-list-item>

        </v-list>
    </v-card>
</template>

<script>
export default {
    props: ['Dish']
}
</script>

<style scoped>
.single-dish {
    max-width: 300px
}
</style>