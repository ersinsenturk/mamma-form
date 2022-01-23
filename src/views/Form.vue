<template>
  <div class="form">
    <h1>Beslenme planlayici</h1>

    <div class="inputs-container">
      <div class="input-container"> 
        <input type="text" placeholder="Dostunuzun adı nedir?" v-model="form.name">
      </div>
      
      <div class="input-container">
        <select v-model="form.infertile">
            <option value="" disabled selected>Kısırlaştırıldı mı? *</option>
            <option value="1">Evet</option>
            <option value="2">Hayır</option>
            <option value="0">Emin değilim</option>
        </select>
        <div class="error" v-if="infertileErr">Lütfen kısırlaştırma bilgisini secin</div>
      </div>
      <div class="input-container">
        <select v-model="form.age">
            <option value="" disabled selected>Kac yaşında? *</option>
            <option value="1">0 - 6 Ay</option>
            <option value="2">6 - 12 Ay</option>
            <option value="3">12+</option>
        </select>
        <div class="error" v-if="ageErr">Lütfen yaş bilgisini secin</div>
      </div>
      <div class="input-container">
        <select v-model="form.weight">
            <option value="" disabled selected>Kilosu nedir? *</option>
            <option value="1">1 Kg</option>
            <option value="2">2 Kg</option>
            <option value="3">3 Kg</option>
        </select>
        <div class="error" v-if="weightErr">Lütfen kilo bilgisini secin</div>
      </div>
      <div class="input-container">
        <select v-model="form.activity">
            <option value="" disabled selected>Aktivite seviyesi nasil? *</option>
            <option value="1">Az</option>
            <option value="2">Normal</option>
            <option value="3">Yüksek</option>
        </select>
        <div class="error" v-if="activityErr">Lütfen aktivite seviyesi secin</div>
      </div>
      <div class="input-container">
        <select v-model="form.snack">
            <option value="" disabled selected>Atıştırma miktarı? *</option>
            <option value="1">Az</option>
            <option value="2">Orta</option>
            <option value="3">Çok</option>
        </select>
        <div class="error" v-if="snackErr">Lütfen atıştırma miktarı secin</div>
      </div>
    </div>
    <h4>Vücut formunu seçiniz *</h4>
    <div class="bodytype-container">    
      <div v-for="(bodyType, index) in bodyTypes" :key="bodyType.value" @click="addClass(index)" :class="[{selected:index==current}, 'type']">
        <img src="../assets/body-2.png" alt=""><br>
        <label :for="bodyType.id">{{bodyType.text}}</label>
        <input type="radio" name="vucut" v-model="form.body" :id="bodyType.id" :value="bodyType.value">
      </div>
      <div class="error" v-if="bodyErr">Lütfen vücut tipini secin</div>
    </div>
    <a @click="checkForm" class="btn">Hesapla</a>

    <div class="required-text">*Kopeginizin besin planini olusturabilmemiz icin lutfen gerekli bilgileri saglayin.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        infertile: '',
        age: '',
        weight: '',
        activity: '',
        snack: '',
        body: ''
      },
      current: null,
      bodyTypes: [
        {text: "Zayıf", value: 0, id: "zayif"},
        {text: "İdeal", value: 1, id: "ideal"},
        {text: "Şişman", value: 2, id: "sisman"},
        {text: "Obez", value: 3, id: "obez"},
      ],
      infertileErr: false,
      ageErr: false,
      weightErr: false,
      activityErr: false,
      snackErr: false,
      bodyErr: false
    }
  },
  computed: {
    result: function(){
      return Number(this.form.infertile) + Number(this.form.age) + Number(this.form.weight) + Number(this.form.activity) + Number(this.form.snack) + Number(this.form.body) 
    }
  },
  methods: {
    calculate(){
      //this.result = parseInt(this.kisir) + parseInt(this.aktivite) + parseInt(this.vucut)
      //this.validateInput()
      // let link = this.form
      //this.result < 3 ? link = "http://link1" : link = "http://link2"
      this.$router.push({
        name: "Products", 
        params: { 
          "result": this.result,
          "name": this.form.name
        }
      });
    },
    addClass:function(index){
        this.current=index;
    },
    checkForm(){
      
      if(this.form.infertile && this.form.age && this.form.weight && this.form.activity && this.form.snack && this.form.body){
        this.calculate()
      }
      this.infertileErr = this.form.infertile == '' ?  true : false
      this.ageErr = this.form.age == '' ? true : false
      this.weightErr = this.form.weight == '' ? true : false
      this.activityErr = this.form.activity == '' ? true : false
      this.snackErr = this.form.snack == '' ? true : false
      this.bodyErr = this.form.body == '' ? true : false
      return false
    }
        
  },
}
</script>

<style lang="scss" scoped>
  .form{
    padding-bottom: 50px;
    text-align: center;
  }
  .inputs-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    .input-container{
      display: inline-block;
      width: 44%;
      flex-basis: 44%;
      margin: 15px 3%;
      @media screen and (max-width: 768px) {
        flex-basis: 100%;
        margin: 0 0 10px 0;
        padding: 0 15px;
      }
      input[type="text"]{
        width: 100%;
        height: 55px;
        line-height: 55px;
        border: 1px solid #212121;
        border-radius: 6px;
        padding: 0 20px;
        color: #212121;
        box-sizing: border-box;
      }
      select{
        width: 100%;
        height: 55px;
        line-height: 55px;
        border: 1px solid #212121;
        border-radius: 6px;
        padding: 0 20px;
        color: #212121;
      }
    }
    
  }
  
  .bodytype-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 800px;
    max-width: 100%;
    margin: 0 auto 60px auto;
    .type{
      flex-basis: 22%;
      margin: 0 1%;
      border: 1px solid #212121;
      border-radius: 6px;
      padding: 15px 0 10px 0;
      font-size: 18px;
      position: relative;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        flex-basis: 46%;
        margin-bottom: 10px;
      }
      &:hover{
        border-color: #257865;
        background-color: #fff;
      }
      input[type="radio"]{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
        margin: 0;
      }
      &.selected{
        background-color: #DAE5D7;
      }
    }
    
  }
  .error{
    color: #C44833;
    text-align: left;
    font-size: 16px;
    margin-top: 5px;
  }
  .required-text{
    font-size: 16px;
    margin-top: 60px;
    color: #212121;
    text-align: center;
  }
</style>