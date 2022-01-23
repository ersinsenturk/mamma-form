<template>
  <div class="products">
    <h1>Beslenme planlayici</h1>
    <p>Günlük kalori ihtiyaci {{params.result}}Kcal (Kalori bildisini lutfen not ediniz).</p>
    <div class="product">
      <a href="">
        <div class="product-image">
          <img src="../assets/balik.png" alt="">
        </div>
        <div class="product-content">
          <div class="product-title">
            <span class="product-name">Tavuklu</span>
            <span class="product-daily">300gr / Gün 30TL</span>
          </div>
          <div class="product-desc">
            Protein ve vitamin bakimindan dengeli, sindirim sistemi icin ideal yagsiz protein.
          </div>
          <div class="product-cta">incele</div>
        </div>
      </a>
    </div>

    <div class="product">
      <a href="">
        <div class="product-image">
          <img src="../assets/balik.png" alt="">
        </div>
        <div class="product-content">
          <div class="product-title">
            <span class="product-name">Tavuklu</span>
            <span class="product-daily">300gr / Gün 30TL</span>
          </div>
          <div class="product-desc">
            Protein ve vitamin bakimindan dengeli, sindirim sistemi icin ideal yagsiz protein.
          </div>
          <div class="product-cta">incele</div>
        </div>
      </a>
    </div>

    <div class="product">
      <a href="">
        <div class="product-image">
          <img src="../assets/balik.png" alt="">
        </div>
        <div class="product-content">
          <div class="product-title">
            <span class="product-name">Tavuklu</span>
            <span class="product-daily">300gr / Gün 30TL</span>
          </div>
          <div class="product-desc">
            Protein ve vitamin bakimindan dengeli, sindirim sistemi icin ideal yagsiz protein.
          </div>
          <div class="product-cta">incele</div>
        </div>
      </a>
    </div>
    <div style="text-align: left">
      <router-link to="/form" class="back-btn"><img src="../assets/back.png" alt=""> Forma geri dön</router-link>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      params: ''
    }
  },
  mounted() {
    this.params = this.$route.params;
    console.log("data is", this.params);
  }
}
</script>

<style lang="scss" scoped>
  .products{
    width: 1040px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px 50px 15px;
    box-sizing: border-box;
    text-align: center;
    .product{
      margin-bottom: 20px;
      a{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        color: #212121;
        background-color: #E5DCC7;
        border-radius: 20px;
        padding: 0 25px;
        text-decoration: none;
        text-align: left;
        @media screen and (max-width: 768px) {
          flex-flow: column;
          align-items: center;
        }
      }
      &-image{
        flex-basis: 300px;
        img{
          width: 100%;
        }
      }
      &-content{
        flex-basis: calc(100% - 300px);
        padding: 25px 0;
        display: flex;
        flex-flow: column;
        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
      &-name{
        font-size: 48px;
        display: inline-block;
        margin-right: 20px;
        @media screen and (max-width: 768px) {
          font-size: 32px;
          display: block;
        }
      }
      &-daily{
        font-size: 28px;
        display: inline-block;
        color: #257865;
        @media screen and (max-width: 768px) {
          font-size: 20px;
          display: block;
        }
      }
      &-desc{
        font-size: 20px;
        margin-top: 20px;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }
      &-cta{
        background-color: #19463C;
        color: #F4F3E9;
        font-size: 20px;
        line-height: 55px;
        padding: 0 45px;
        border-radius: 40px;
        align-self: flex-end;
        @media screen and (max-width: 768px) {
          align-self: auto;
          margin-top: 30px;
        }
      }
    }
    .back-btn{
      font-size: 20px;
      color: #1B3F37;
      text-decoration: none;
      line-height: 32px;
      margin-top: 20px;
      display: inline-block;
    }
  }
</style>