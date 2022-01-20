<template>
  <div class="home">
    <img src="../assets/pablo.png" alt="">
    <h1>Bize biraz köpeğinizden<br> bahsedin.</h1>
    <h4>Köpeğinizle ilgili birkaç soruya cevap verin, onun için hangi lezzetli ve besleyici<br>
     Mamma’dan, ne ölçüde yemesi gerektiği ile ilgili besin planını çıkaralım.</h4>
    <router-link to="/form" class="btn">Başla</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  img{
    margin-bottom: 20px;
  }
  h1{
    margin-bottom: 20px;
    margin-top: 0;
    color: #19463C;
  }
  h4{
    margin-top: 0;
    margin-bottom: 60px;
  }
</style>
