<template>
  <div>

    <page-info> 
      Запознайте се с нашата група! <br><br>
      Тук ще видите кои са членовете на кооператива, както и част от малките кактусчета.<br>
      Не се притеснявайте да ни пишете или звъните на показаните контакти! 
    </page-info>
    
    <cooperative-gallery > </cooperative-gallery>
  </div>
</template>

<script>
import PageInfo from '@/components/Common/PageInfo.vue'
import CooperativeGallery from '@/components/Operative/CooperativeGallery.vue'

export default {
  components: {
    PageInfo,
    CooperativeGallery
  }
}
</script>

<style>

</style>