<template>
  <div class="form">
    <h1>Planlayıcı</h1>
    <label for="kisir">Kısır mı?</label>
    <select id="kisir" v-model="kisir">
      <option value="0">Hayır</option>
      <option value="1">Evet</option>
    </select>
    <br>
    <label for="aktivite">Aktivite sıklığı</label>
    <select id="aktivite" v-model="aktivite">
      <option value="0">Az</option>
      <option value="1">Normal</option>
      <option value="2">Yüksek</option>
    </select>
    <br>
    <label for="zayif">Zayıf</label>
    <input type="radio" name="vucut" v-model="vucut" id="zayif" :value="0">
    <label for="sisman">Şişman</label>
    <input type="radio" name="vucut" v-model="vucut" id="sisman" :value="1">
    <label for="obez">Obez</label>
    <input type="radio" name="vucut" v-model="vucut" id="obez" :value="2">
    <br>
    <a @click="calculate" class="btn">Hesapla</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      kisir: '0',
      aktivite: '1',
      vucut: ''
    }
  },
  methods: {
    calculate(){
      this.result = parseInt(this.kisir) + parseInt(this.aktivite) + parseInt(this.vucut)
      let link = ""
      this.result < 3 ? link = "http://link1" : link = "http://link2"
      this.$router.push({
        name: "Products", //use name for router push
        params: { link }
      });
    }
  },
}
</script>