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
  
        <v-container>
            <v-card
                v-for="(dish, i) in Dishes"
                :key="i"
                light
                class="mt-2"
                outlined
            >
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
    </v-card>

</template>

<script>
export default {
    props: ['Dishes']
}
</script>

<style scoped>

</style>