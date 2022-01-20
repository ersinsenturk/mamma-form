<template>
  <div class="form">
    <h1>Beslenme planlayici</h1>

    <input type="text" placeholder="Dostunuzun adı nedir?">
    <select>
        <option value="" disabled selected>Kısırlaştırıldı mı? *</option>
        <option value="1">Evet</option>
        <option value="2">Hayır</option>
        <option value="0">Emin değilim</option>
    </select>
  <br>
    <select>
        <option value="" disabled selected>Kac yaşında? *</option>
        <option value="1">0 - 6 Ay</option>
        <option value="2">6 - 12 Ay</option>
        <option value="3">12+</option>
    </select>

    <select>
        <option value="" disabled selected>Kilosu nedir? *</option>
        <option value="1">1 Kg</option>
        <option value="2">2 Kg</option>
        <option value="3">3 Kg</option>
    </select>
  <br>
    <select>
        <option value="" disabled selected>Aktivite seviyesi nasil? *</option>
        <option value="1">Az</option>
        <option value="2">Normal</option>
        <option value="3">Yüksek</option>
    </select>

    <select>
        <option value="" disabled selected>Atıştırma miktarı? *</option>
        <option value="1">Az</option>
        <option value="2">Orta</option>
        <option value="3">Çok</option>
    </select>
    <br>
    <label for="zayif">Zayıf</label>
    <input type="radio" name="vucut" v-model="vucut" id="zayif" :value="0">
    <label for="ideal">İdeal</label>
    <input type="radio" name="vucut" v-model="vucut" id="ideal" :value="1">
    <label for="sisman">Şişman</label>
    <input type="radio" name="vucut" v-model="vucut" id="sisman" :value="2">
    <label for="obez">Obez</label>
    <input type="radio" name="vucut" v-model="vucut" id="obez" :value="3">
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