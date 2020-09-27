<template>
  <div class="home">
    <Header></Header>
    <Slider></Slider>
    <div class="container-lg" style="margin-top: 80px">
      <div class="row">
        <List></List>
        <RightList></RightList>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Slider from "@/components/Slider.vue";
  import List from "@/components/List.vue";
  import RightList from "@/components/RightList.vue";
  export default {
    name: "Home",
    components: {
      Header,
      Slider,
      List,
      RightList
    }
  };
</script>
