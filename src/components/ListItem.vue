<template>
  <div class="ListItem">
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
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
          style="border-radius: 4%"
        />
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <a
          href="../../public/img/turk-silahlari-almanyada-kullanilacak.jpg"
          style="color: #333;"
          ><h4 class="mb-3">{{ data.title }}</h4></a
        >
        <p class="mb-auto text-muted" style="font-size: .85rem;">
          {{ data.description }}
        </p>
        <a
          href="#"
          class="btn p-link text-right"
          style="font-size: 11px; font-weight: 600;"
          >DEVAMINI OKU→</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data: Object
  },
  name: "ListItem",
};
</script>

<style scoped></style>
