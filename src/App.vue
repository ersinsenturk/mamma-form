<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  background-color: #F4F3E7;
}
#app {
  font-family: 'Source Serif Pro', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
}

h1{
  font-size: 72px;
  line-height: 82px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
}

h4{
  font-size: 20px;
  line-height: 28px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
}

.btn{
  display: inline-block;
  font-size: 20px;
  line-height: 22px;
  color: #fff;
  background-color: #1B453C;
  padding: 20px 70px 16px 70px;
  border-radius: 40px;
  text-decoration: none;
}

</style>
