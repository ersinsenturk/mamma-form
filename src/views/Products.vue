<template>
  <div class="products">
    <div class="product">
      <a :href="link">
        <img src="../assets/balik.png" alt="">
        ürün adı
        <div class="cta">incele</div>
      </a>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      link: ''
    }
  },
  mounted() {
    this.link = this.$route.params.link;
    console.log("data is", this.link);
  }
}
</script>
