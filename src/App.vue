<template>
  <v-app>

    <page-header></page-header>

    <v-container  >
      <router-view></router-view>
    </v-container>
    
    <page-footer></page-footer>
   
  </v-app>
</template>

<script>

import PageHeader from './components/Common/PageHeader';
import PageFooter from './components/Common/PageFooter';


export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
  data: () => ({
    //
  }),
};
</script>

<style>
 .container{
   max-width: 1000px;
   height: auto;
 }
 .theme--light.v-application{
   background-color: white !important;
 }
</style>
