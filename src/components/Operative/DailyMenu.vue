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
            open-on-hover
            offset-x

            v-for="(dish, i) in Dishes"
            :key="i"
            light
            class="mt-2"
            outlined
        >
            <template v-slot:activator="{ on }">
                <v-container v-on="on">
                    <v-card>
                        <v-list-item>
                            <v-list-item-content class="align-self-start">

                                <v-list-item-title 
                                    class="title mb-2 font-weight-regular"
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


            <v-card style="max-width: 300px">
                <v-list>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{dish.dishTitle}}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    
                    <v-divider></v-divider>
                
                    <v-row align="center" justify="center">
                        <v-img
                        :src="dish.dishImgSrc"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        max-width="300"
                        max-height="150"
                        ></v-img>
                    </v-row>
                    
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="title">Съставки:</v-list-item-title>
                            {{dish.dishDescription}}
                        </v-list-item-content>
                    </v-list-item>
                    
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="menu = false">Затвори</v-btn>
                </v-card-actions>
            </v-card>


        </v-menu>

    </v-card>

</template>

<script>
export default {
    props: ['Dishes']
}
</script>

<style scoped>

</style>