<template>
    <div class="calculator">
        <div class="home" v-if="homePage">
            <img src="../assets/pablo.png" alt="">
            <h1>Bize biraz köpeğinizden<br> bahsedin.</h1>
            <h4>Köpeğinizle ilgili birkaç soruya cevap verin, onun için hangi lezzetli ve besleyici<br>
            Mamma’dan, ne ölçüde yemesi gerektiği ile ilgili besin planını çıkaralım.</h4>
            <div class="form-btn" @click="showForm">Başla</div>
        </div>

        <div class="form" v-if="formPage">
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
            <a @click="checkForm" class="form-btn">Hesapla</a>

            <div class="required-text">*Kopeginizin besin planini olusturabilmemiz icin lutfen gerekli bilgileri saglayin.</div>
        </div>

        <div class="products" v-if="productPage">
            <h1>Beslenme planlayici</h1>
            <p>Günlük kalori ihtiyaci {{result}}Kcal (Kalori bildisini lutfen not ediniz).</p>
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
                <div class="back-btn" @click="showForm"><img src="../assets/back.png" alt=""> Forma geri dön</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            homePage: true,
            formPage: false,
            productPage: false,
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
        showForm(){
            this.homePage = false
            this.formPage = true
            this.productPage = false
        },
        showProduct(){
            this.formPage = false
            this.productPage = true
        },
        addClass:function(index){
            this.current=index;
        },
        checkForm(){
        
        if(this.form.infertile && this.form.age && this.form.weight && this.form.activity && this.form.snack && this.form.body){
            this.showProduct()
        }
        this.infertileErr = this.form.infertile == '' ?  true : false
        this.ageErr = this.form.age == '' ? true : false
        this.weightErr = this.form.weight == '' ? true : false
        this.activityErr = this.form.activity == '' ? true : false
        this.snackErr = this.form.snack == '' ? true : false
        this.bodyErr = this.form.body == '' ? true : false
        return false
        }
        
    }
}
</script>

<style>
.calculator {
    font-family: 'Source Serif Pro', serif;
    color: #212121;
    background-color: #F4F3E7;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    
}

.calculator h1 {
    font-size: 72px;
    line-height: 82px;
    margin-top: 0;
}

@media screen and (max-width: 768px) {
    .calculator h1 {
        font-size: 32px;
        line-height: 34px;
    }
}

.calculator h4 {
    font-size: 20px;
    line-height: 28px;
}

@media screen and (max-width: 768px) {
    .calculator h4 {
        font-size: 16px;
        line-height: 20px;
    }
}

.calculator img {
    max-width: 100%;
}

.calculator .form-btn {
    display: inline-block;
    font-size: 20px;
    line-height: 22px;
    color: #fff;
    background-color: #1B453C;
    padding: 20px 70px 16px 70px;
    border-radius: 40px;
    text-decoration: none;
    cursor: pointer;

}

@media screen and (max-width: 768px) {
    .calculator .btn {
        display: block;
    }
}

.calculator .home {
    text-align: center;
    padding-bottom: 50px;
}

.calculator .home img {
    margin-bottom: 20px;
}

.calculator .home h1 {
    margin-bottom: 20px;
    margin-top: 0;
    color: #19463C;
}

.calculator .home h4 {
    margin-top: 0;
    margin-bottom: 60px;
}

.calculator .form {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
}

.calculator .form .inputs-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 800px;
    max-width: 100%;
    margin: 0 auto;


}

.calculator .form .input-container {
    display: inline-block;
    width: 44%;
    flex-basis: 44%;
    margin: 15px 3%;


}

@media screen and (max-width: 768px) {
    .calculator .form .input-container {
        flex-basis: 100%;
        margin: 0 0 10px 0;
        padding: 0 15px;
    }
}

.calculator .form .input-container input[type="text"] {
    width: 100%;
    height: 55px;
    line-height: 55px;
    border: 1px solid #212121;
    border-radius: 6px;
    padding: 0 20px;
    color: #212121;
    box-sizing: border-box;
}

.calculator .form .input-container select {
    width: 100%;
    height: 55px;
    line-height: 55px;
    border: 1px solid #212121;
    border-radius: 6px;
    padding: 0 20px;
    color: #212121;
}

.calculator .form .bodytype-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 800px;
    max-width: 100%;
    margin: 0 auto 60px auto;
}

.calculator .form .bodytype-container .type {
    flex-basis: 22%;
    margin: 0 1%;
    border: 1px solid #212121;
    border-radius: 6px;
    padding: 15px 0 10px 0;
    font-size: 18px;
    position: relative;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .calculator .form .bodytype-container .type {
        flex-basis: 46%;
        margin-bottom: 10px;
    }
}

.calculator .form .bodytype-container .type:hover {
    border-color: #257865;
    background-color: #fff;
}

.calculator .form .bodytype-container .type input[type="radio"] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    margin: 0;
}

.calculator .form .bodytype-container .type.selected {
    background-color: #DAE5D7;
}

.calculator .form .error {
    color: #C44833;
    text-align: left;
    font-size: 16px;
    margin-top: 5px;
}

.calculator .form .required-text {
    font-size: 16px;
    margin-top: 60px;
    color: #212121;
    text-align: center;
}


.calculator .products {
    width: 1040px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px 50px 15px;
    box-sizing: border-box;
    text-align: center;

}

.calculator .products .product {
    margin-bottom: 20px;
}

.calculator .products .product a {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    color: #212121;
    background-color: #E5DCC7;
    border-radius: 20px;
    padding: 0 25px;
    text-decoration: none;
    text-align: left;
}

@media screen and (max-width: 768px) {
    .calculator .products .product a {
        flex-flow: column;
        align-items: center;
    }
}

.calculator .products .product-image {
    flex-basis: 300px;
}

.calculator .products .product-image img {
    width: 100%;
}

.calculator .products .product-content {
    flex-basis: calc(100% - 300px);
    padding: 25px 0;
    display: flex;
    flex-flow: column;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-content {
        text-align: center;
    }
}

.calculator .products .product-name {
    font-size: 48px;
    display: inline-block;
    margin-right: 20px;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-name {
        font-size: 32px;
        display: block;
    }
}

.calculator .products .product-daily {
    font-size: 28px;
    display: inline-block;
    color: #257865;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-daily {
        font-size: 20px;
        display: block;
    }
}

.calculator .products .product-desc {
    font-size: 20px;
    margin-top: 20px;

}

@media screen and (max-width: 768px) {
    .calculator .products .product-desc {
        font-size: 18px;
    }
}

.calculator .products .product-cta {
    background-color: #19463C;
    color: #F4F3E9;
    font-size: 20px;
    line-height: 55px;
    padding: 0 45px;
    border-radius: 40px;
    align-self: flex-end;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-cta {
        align-self: auto;
        margin-top: 30px;
    }
}
.calculator .products .back-btn {
    font-size: 20px;
    color: #1B3F37;
    text-decoration: none;
    line-height: 32px;
    margin-top: 20px;
    display: inline-block;
    cursor: pointer;
}
  
</style>