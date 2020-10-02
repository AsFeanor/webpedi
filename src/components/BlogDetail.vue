<template>
  <div>
    <Header></Header>
    <div class="container-lg" style="margin-top: 80px">
      <div class="row">
        <div class="col-lg-8 mb-5 d-flex flex-column position-static">
          <p class="blog-text font-weight-normal mb-4">
            Gödde Group kurucu ortağı Necat Çelik, Alman polisinin Türk üretimi olan silahları kullanmaya başlayacağını söyledi.
          </p>
          <img src="/img/turk-silahlari-almanyada-kullanilacak.jpg" alt="" style="max-height: 450px; max-width: 700px;">
          <p class="blog-text font-weight-normal mt-4">
            Türk üretimi silahların ilk alıcıları, Almanya Askeri Birimi ve Almanya Polis Birimi oldu.
            İHA'nın açıkladığı bilgiye göre Türkiye'nin silah ithalatı son 5 yılda yüzde 48 oranında
            geriledi. Alman ortaklığıyla kurulan Gödde Group, yerli üretim silahların standart ve izin
            sorunlarının çözüldüğünü duyurdu.
          </p>
          <p class="blog-text font-weight-normal my-4">
            Gödde Group kurucu ortağı Necat Çelik, <i>"Türk mühendislerimiz tarafından yüksek kalite
            standartlarındaki üretim tesislerinde üretilen ve zorlu testlerden başarıyla geçen silahlarımız,
            bugün Almanya Polis Özel Birimi ile sağlanan anlaşmaya istinaden sipariş talepleri almış
            durumda"</i>şeklinde belirtti.
          </p>

        </div>
        <RightList></RightList>
      </div>
    </div>
    <MightInterest></MightInterest>
  </div>

</template>

<script>

import Header from '@/components/Header.vue';
import RightList from '@/components/RightList.vue';
import MightInterest from '@/components/MightInterest.vue';

export default {
name: "BlogDetail",
  components: {
    Header,
    RightList,
    MightInterest,
  },
}
</script>

<style scoped>

</style>