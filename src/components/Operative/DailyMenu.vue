<template>
  
    <v-card
      min-width="300"
      class="mt-4"
    >
      <v-app-bar dark color="pink">
  
        <v-toolbar-title>
            <slot></slot>
        </v-toolbar-title>

        <v-spacer></v-spacer>
  
        <v-btn icon v-if="userIsAuthenticated">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

      </v-app-bar>
  
      <v-container>
        <v-card
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            light
            class="mt-2"
        >
            <v-list-item three-line>
            <v-list-item-content class="align-self-start">
                <span><v-list-item-title
                class="headline mb-2"
                v-text="item.title"
                ></v-list-item-title></span>

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

<style>

</style>