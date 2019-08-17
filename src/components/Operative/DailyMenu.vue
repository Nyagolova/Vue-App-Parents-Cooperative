<template>
  
    <v-card
        
        class="mt-2"
        outlined="true"
    >
      <v-app-bar dark elevation="0" color="pink">
  
        <v-toolbar-title >
            <slot></slot>
        </v-toolbar-title>

        <v-spacer></v-spacer>
  
        <v-btn icon v-if="userIsAuthenticated">
          <v-icon >mdi-pencil</v-icon>
        </v-btn>

      </v-app-bar>
  
      <v-container>
        <v-card
            v-for="(item, i) in items"
            :key="i"
            light
            class="mt-2"
             outlined="true"
        >
            <v-list-item two-line>
            <v-list-item-content class="align-self-start">
            <v-list-item-title 
                class="title mb-2 font-weight-regular"
                
                v-text="item.title"
            >
            </v-list-item-title>
                

            <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
                  

            </v-list-item-content>
  
            <v-list-item-avatar
                size="80"
                tile
            >
                <v-img :src="item.src"></v-img>
            </v-list-item-avatar>
                

            </v-list-item>
              
        </v-card>
          <!-- </v-col>
        </v-row> -->
      </v-container>
    </v-card>

</template>

<script>
export default {
    props: ['items']
}
</script>

<style scoped>

</style>