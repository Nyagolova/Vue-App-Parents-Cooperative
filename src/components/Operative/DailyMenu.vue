<template>
  
    <v-card class="mt-2" outlined>

        <v-app-bar dark elevation="0" color="pink">
  
            <v-toolbar-title >
                <slot></slot>
            </v-toolbar-title>

            <v-spacer></v-spacer>
    
            <v-btn icon v-if="userIsAuthenticated">
                <v-icon >
                    mdi-pencil
                </v-icon>
            </v-btn>

        </v-app-bar>
  
        <v-menu
            v-for="(dish, i) in MealsByDay"
            :key="i"

            open-on-hover
            offset-x
            class="dish_context_menu"
        >
            <template v-slot:activator="{ on }">
                <v-container>
                    <v-card outlined v-on="on" style="heigth: 400px">
                        <v-list-item>
                            <v-list-item-content class="align-self-start">

                                <v-list-item-title 
                                    class="title mb-2 font-weight-regular"
                                    :title="dish.dishTitle"
                                    v-text="dish.dishTitle"
                                >
                                </v-list-item-title>
                                    
                                <v-list-item-subtitle 
                                    v-text="dish.dishType"
                                >
                                </v-list-item-subtitle>
                                
                            </v-list-item-content>
                
                            <v-list-item-avatar size="80">
                                <v-img :src="dish.dishImgSrc"></v-img>
                            </v-list-item-avatar>
                    
                        </v-list-item>
                    </v-card>
                </v-container>
            </template>

            <single-dish :Dish="dish"></single-dish>

        </v-menu>

    </v-card>

</template>

<script>

import SingleDish from '@/components/Operative/SingleDish.vue'

import { authService } from '@/services/AuthenticationServices'


export default {
    components: {
        SingleDish
    },
    mixins: [authService],
    props: ['MealsByDay']
}
</script>

<style>
.dish_context_menu {
    display: unset !important;
}
</style>