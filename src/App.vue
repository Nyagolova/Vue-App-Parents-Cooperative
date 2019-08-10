<template>
  <v-app>

 
    <page-header></page-header>

    <v-container  style="height: 650px"></v-container>
    
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
 
</style>
