<template>
  
    <v-card class="mt-2" outlined>

        <v-app-bar dark elevation="0" color="pink">
  
            <v-toolbar-title >
                <slot></slot>
            </v-toolbar-title>

    

        </v-app-bar>
  
        <v-menu
            v-for="(dish, typeId) in DailyMenu"
            :key="typeId"
            :disabled="!hasDish(dish.dishTitle)"
            open-on-hover 
            offset-x
            class="dish_context_menu"
        >
            <template v-slot:activator="{ on }">
                <v-container>
                    <v-card outlined v-on="on" style="heigth: 400px">
                        <v-list-item class="m0 p0">
                            
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
                
                            <v-list-item-avatar size="80" v-if="!userIsAuthenticated">
                                <v-img :src="dish.dishPhotoUrl"></v-img>
                            </v-list-item-avatar>
                            
                            
                            <v-btn icon v-if="(userIsAuthenticated && dish.dishTitle)" @click="onDeleteDish(dish, typeId, dish.dishType)">
                                <v-icon >
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                            
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

import { DailyMenuService } from '@/services/DataServices.js'


export default {
    data () {
        return {
             
        }
    },
    components: {
        SingleDish
    },
    mixins: [authService, DailyMenuService],
    props: ['DailyMenu','Weekday'],
    methods: {
        onDeleteDish(dishData, dishTypeId, dishType){
            var dishPathToDelete = this.Weekday + '/Meals/' + dishTypeId;
            this.deleteDish(dishPathToDelete, dishType)
        },
        hasDish(dataTitle) {
            if(dataTitle) {
                return true;
            } else {
                return false;
            }
        }
    } 
}
</script>

<style>
.dish_context_menu {
    display: unset !important;
}
</style>