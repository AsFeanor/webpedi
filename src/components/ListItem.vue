<template>
  <div class="ListItem" v-if="data">
    <div
      class="row no-gutters overflow-hidden flex-md-row mb-5  h-md-250 position-relative"
    >
      <div class="col-auto d-none d-lg-block">
        <img
          :src="data.picture"
          alt=""
          class="bd-placeholder-img"
          width="275"
          height="200"
          role="img"
          aria-label="Placeholder: Thumbnail"
          style="border-radius: 4%"
        />
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <router-link :to="`/detail/${data.id}`">
          <h4 class="mb-3">{{ data.title }}</h4>
        </router-link>
        <p class="mb-auto text-muted" style="font-size: .85rem;">
          {{ data.description }}
        </p>
        <router-link :to="`/detail/${data.id}`">
          <h4 class="mb-3">Devamını oku</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['data'],
  name: "ListItem",
};
</script>

<style scoped></style>
