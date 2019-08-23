<template>
  <div>

    <page-info> 
      Запознайте се с нашата група! <br><br>
      Тук ще видите кои са членовете на кооператива, както и част от малките кактусчета.<br>
      Не се притеснявайте да ни пишете или звъните на показаните контакти! 
    </page-info>
    
    <v-row>
      <cooperative-gallery > </cooperative-gallery>

      <members></members>

      <kids-gallery></kids-gallery>

    </v-row>
  </div>
</template>

<script>
import PageInfo from '@/components/Common/PageInfo.vue'
import CooperativeGallery from '@/components/Operative/CooperativeGallery.vue'
import Members from '@/components/Operative/Members.vue'
import KidsGallery from '@/components/Operative/KidsGallery.vue'

export default {
  components: {
    PageInfo,
    CooperativeGallery,
    Members,
    KidsGallery
  }
}
</script>

<style>

</style>