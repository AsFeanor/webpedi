<template>
  <div class="col-lg-8" id="List">
    <template v-for="data in myJson">
      <ListItem
        :key="data.id"
        :data="data"
      >
      </ListItem>
    </template>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import json from "../../public/generated.json";

export default {
  name: "List",
  data() {
    return {
      myJson: json
    };
  },
  components: {
    ListItem
  }
};
</script>

<style scoped></style>
