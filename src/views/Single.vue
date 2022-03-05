<template>
    <div class="calculator">
        <div class="home" v-if="homePage">
            <img src="../assets/pablo.png" alt="">
            <div class="text-1">Bize biraz köpeğinizden<br> bahsedin.</div>
            <div class="text-2">Köpeğinizle ilgili birkaç soruya cevap verin, onun için hangi lezzetli ve besleyici<br>
            Mamma’dan, ne ölçüde yemesi gerektiği ile ilgili besin planını çıkaralım.</div>
            <div class="form-btn" @click="showForm">Başla</div>
        </div>

        <div class="form" v-if="formPage">
            <div class="text-1">Beslenme planlayici</div>

            <div class="inputs-container">
            <div class="input-container"> 
                <input type="text" placeholder="Dostunuzun adı nedir?" v-model="form.name" :style="[form.name != '' ? {backgroundColor: '#DAE5D7', borderColor: '#19463C'} : '']">
            </div>
            
            <div class="input-container select-container">
                <select v-model="form.infertile" :style="[form.infertile != '' ? {backgroundColor: '#DAE5D7', borderColor: '#19463C'} : '']">
                    <option value="" disabled selected>Kısırlaştırıldı mı? *</option>
                    <option value="0">Hayır</option>
                    <option value="1">Evet</option>
                </select>
                <i class="gg-chevron-down"></i>
                <div class="error" v-if="infertileErr && form.infertile == ''">Lütfen kısırlaştırma bilgisini secin</div>
            </div>
            <div class="input-container select-container">
                <select v-model="form.age" :style="[form.age != '' ? {backgroundColor: '#DAE5D7', borderColor: '#19463C'} : '']">
                    <option value="" disabled selected>Kac yaşında? *</option>
                    <option value="0">0 - 6 Ay</option>
                    <option value="1">6 - 12 Ay</option>
                    <option value="2">12+</option>
                </select>
                <i class="gg-chevron-down"></i>
                <div class="error" v-if="ageErr && form.age == ''">Lütfen yaş bilgisini secin</div>
            </div>
            <div class="input-container select-container">
                <select v-model="form.weight" :style="[form.weight != '' ? {backgroundColor: '#DAE5D7', borderColor: '#19463C'} : '']">
                    <option value="" disabled selected>Kilosu nedir? *</option>
                    <option value="0">0.5 Kg</option>
                    <option value="1">1 Kg</option>
                    <option value="2">2 Kg</option>
                    <option value="3">3 Kg</option>
                    <option value="4">4 Kg</option>
                    <option value="5">5 Kg</option>
                    <option value="6">6 Kg</option>
                    <option value="7">7 Kg</option>
                    <option value="8">8 Kg</option>
                    <option value="9">9 Kg</option>
                    <option value="10">10 Kg</option>
                    <option value="11">11 Kg</option>
                    <option value="12">12 Kg</option>
                    <option value="13">13 Kg</option>
                    <option value="14">14 Kg</option>
                    <option value="15">15 Kg</option>
                    <option value="16">16 Kg</option>
                    <option value="17">17 Kg</option>
                    <option value="18">18 Kg</option>
                    <option value="19">19 Kg</option>
                    <option value="20">20 Kg</option>
                    <option value="21">21 Kg</option>
                    <option value="22">22 Kg</option>
                    <option value="23">23 Kg</option>
                    <option value="24">24 Kg</option>
                    <option value="25">25 Kg</option>
                    <option value="26">26 Kg</option>
                    <option value="27">27 Kg</option>
                    <option value="28">28 Kg</option>
                    <option value="29">29 Kg</option>
                    <option value="30">30 Kg</option>
                    <option value="31">31 Kg</option>
                    <option value="32">32 Kg</option>
                    <option value="33">33 Kg</option>
                    <option value="34">34 Kg</option>
                    <option value="35">35 Kg</option>
                    <option value="36">36 Kg</option>
                    <option value="37">37 Kg</option>
                    <option value="38">38 Kg</option>
                    <option value="39">39 Kg</option>
                    <option value="40">40 Kg</option>
                    <option value="41">41 Kg</option>
                    <option value="42">42 Kg</option>
                    <option value="43">43 Kg</option>
                    <option value="44">44 Kg</option>
                    <option value="45">45 Kg</option>
                    <option value="46">46 Kg</option>
                    <option value="47">47 Kg</option>
                    <option value="48">48 Kg</option>
                    <option value="49">49 Kg</option>
                    <option value="50">50 Kg</option>

                </select>
                <i class="gg-chevron-down"></i>
                <div class="error" v-if="weightErr && form.weight == ''">Lütfen kilo bilgisini secin</div>
            </div>
            <div class="input-container select-container">
                <select v-model="form.activity" :style="[form.activity != '' ? {backgroundColor: '#DAE5D7', borderColor: '#19463C'} : '']">
                    <option value="" disabled selected>Aktivite seviyesi nasil? *</option>
                    <option value="0">Düşük</option>
                    <option value="1">Normal</option>
                    <option value="2">Yüksek</option>
                </select>
                <i class="gg-chevron-down"></i>
                <div class="error" v-if="activityErr && form.activity == ''">Lütfen aktivite seviyesi secin</div>
            </div>
            <div class="input-container select-container">
                <select v-model="form.snack" :style="[form.snack != '' ? {backgroundColor: '#DAE5D7', borderColor: '#19463C'} : '']">
                    <option value="" disabled selected>Atıştırma miktarı? *</option>
                    <option value="0">Az</option>
                    <option value="1">Orta</option>
                    <option value="2">Çok</option>
                </select>
                <i class="gg-chevron-down"></i>
                <div class="error" v-if="snackErr && form.snack == ''">Lütfen atıştırma miktarı secin</div>
            </div>
            </div>
            <div class="text-2">Vücut formunu seçiniz *</div>
            <div class="bodytype-container">    
            <div v-for="(bodyType, index) in bodyTypes" :key="index" @click="addClass(index)" :class="[{selected:index==current}, 'type']">
                <img src="../assets/body-2.png" alt=""><br>
                <label :for="bodyType.id" v-text="bodyType.text"></label>
                <input type="radio" name="vucut" v-model="form.body" :id="bodyType.id" :value="bodyType.value">
            </div>
            <div class="error" v-if="bodyErr">Lütfen vücut tipini secin</div>
            </div>
            <div @click="checkForm" class="form-btn">Hesapla</div>

            <div class="required-text">*Kopeginizin besin planini olusturabilmemiz icin lutfen gerekli bilgileri saglayin.</div>
        </div>

        <div class="products" v-if="productPage">
            <div class="text-1">Beslenme planlayici</div>
            <div class="text-3">{{form.name}} icin günlük kalori ihtiyaci <span style="color: #257865">{{result}} Kcal.</span></div>
            <div class="text-4">Önerdiğimiz günlük tüketim miktarlarını not etmeyi unutmayın.</div>
            <div class="product-flex">
            

            <div class="product">
                <a href="">
                    <div class="product-image">
                        <img src="../assets/tavuk-2.png" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <span class="product-name">Tavuk Etli</span>
                            <p>Tuketim onerimiz</p>
                            <span class="product-daily">{{kcalCalculate(900)}} gr/gün</span>
                        </div>
                        
                            <div class="product-desc">
                                Günlük <span style="color: #257865">{{dailyPrice}} TL</span>’den başlayan fiyatlarla
                            </div>
                            <div class="product-cta">Ürünü İncele</div>
                        
                    </div>
                </a>
            </div>

            <div class="product">
                <a href="">
                    <div class="product-image">
                        <img src="../assets/hindi-2.png" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <span class="product-name">Hindi Etli</span>
                            <p>Tuketim onerimiz</p>
                            <span class="product-daily">{{kcalCalculate(1500)}} gr/gün</span>
                        </div>
                        
                            <div class="product-desc">
                                Günlük <span style="color: #257865">{{dailyPrice}} TL</span>’den başlayan fiyatlarla
                            </div>
                            <div class="product-cta">Ürünü İncele</div>
                        
                    </div>
                </a>
            </div>

            <div class="product">
                <a href="">
                    <div class="product-image">
                        <img src="../assets/dana-2.png" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <span class="product-name">Dana Etli</span>
                            <p>Tuketim onerimiz</p>
                            <span class="product-daily">{{kcalCalculate(1500)}} gr/gün</span>
                        </div>
                        
                            <div class="product-desc">
                                Günlük <span style="color: #257865">{{dailyPrice}} TL</span>’den başlayan fiyatlarla
                            </div>
                            <div class="product-cta">Ürünü İncele</div>
                        
                    </div>
                </a>
            </div>

            <div class="product">
                <a href="">
                    <div class="product-image">
                        <img src="../assets/balik-2.png" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <span class="product-name">Balık Etli</span>
                            <p>Tuketim onerimiz</p>
                            <span class="product-daily">{{kcalCalculate(1200)}} gr/gün</span>
                        </div>
                        
                            <div class="product-desc">
                                Günlük <span style="color: #257865">{{dailyPrice}} TL</span>’den başlayan fiyatlarla
                            </div>
                            <div class="product-cta">Ürünü İncele</div>
                        
                    </div>
                </a>
            </div>

            <div class="product">
                <a href="">
                    <div class="product-image">
                        <img src="../assets/hindidana-2.png" alt="">
                    </div>
                    <div class="product-content">
                        <div class="product-title">
                            <span class="product-name">Hindi & Dana Etli</span>
                            <p>Tuketim onerimiz</p>
                            <span class="product-daily">{{kcalCalculate(1500)}} gr/gün</span>
                        </div>
                        
                            <div class="product-desc">
                                Günlük <span style="color: #257865">{{dailyPrice}} TL</span>’den başlayan fiyatlarla
                            </div>
                            <div class="product-cta">Ürünü İncele</div>
                        
                    </div>
                </a>
            </div>
            <div class="product">
                <div class="back-btn" @click="showForm"><img src="../assets/back.png" alt=""> <span>Forma geri dön</span></div>
            </div>
            </div>
            <div class="reward-section">
                <div class="reward-image">
                    <img src="../assets/odul.png" alt="">
                </div>
                <div class="reward-text">
                    <div class="p1">Peki ya ödül mamaları?</div>
                    <div class="p2">Eğer atıştırmalığı veya ödül mamasını çok veriyorsanız günlük Mamma miktarını buna göre azaltabilirsiniz.</div>
                </div>
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
                {text: "Obez", value: 2, id: "obez"}
            ],
            infertileErr: false,
            ageErr: false,
            weightErr: false,
            activityErr: false,
            snackErr: false,
            bodyErr: false,
            calArr:  [
                    [[[56,	56,	63], [51,	51,	59],	[42,	42,	48]], [[52,	52,	59],	[45,	45,	54],	[40,	40,	45]]],
    [[[94,	94,	106], [86,	86,	100],	[70,	70,	80]], [[88,	88,	100],	[76,	76,	90],	[68,	68,	75]]],
    [[[158,	158,	178], [145,	145,	168],	[118,	118,	135]], [[148,	148,	168],	[128,	128,	151],	[114,	114,	126]]],
    [[[214,	214,	242], [196,	196,	228],	[160,	160,	182]], [[201,	201,	228],	[173,	173,	205],	[155,	155,	171]]],
    [[[266,	266,	300], [243,	243,	283],	[198,	198,	226]], [[249,	249,	283],	[215,	215,	255],	[192,	192,	212]]],
    [[[314,	314,	354], [288,	288,	334],	[234,	234,	267]], [[294,	294,	334],	[254,	254,	301],	[227,	227,	251]]],
    [[[360,	360,	406], [330,	330,	383],	[268,	268,	307]], [[337,	337,	383],	[291,	291,	345],	[261,	261,	288]]],
    [[[405,	405,	456], [370,	370,	430],	[301,	301,	344]], [[379,	379,	430],	[327,	327,	387],	[293,	293,	323]]],
    [[[447,	447,	504], [409,	409,	476],	[333,	333,	381]], [[419,	419,	476],	[362,	362,	428],	[323,	323,	357]]],
    [[[488,	488,	551], [447,	447,	520],	[364,	364,	416]], [[457,	457,	520],	[395,	395,	468],	[353,	353,	390]]],
    [[[529,	529,	596], [484,	484,	562],	[394,	394,	450]], [[495,	495,	562],	[427,	427,	506],	[382,	382,	422]]],
    [[[568,	568,	640], [519,	519,	604],	[423,	423,	483]], [[532,	532,	604],	[459,	459,	544],	[411,	411,	453]]],
    [[[606,	606,	683], [554,	554,	645],	[451,	451,	516]], [[567,	567,	645],	[490,	490,	580],	[438,	438,	484]]],
    [[[644,	644,	726], [589,	589,	685],	[479,	479,	548]], [[602,	602,	685],	[520,	520,	616],	[466,	466,	513]]],
    [[[680,	680,	767], [622,	622,	724],	[507,	507,	579]], [[637,	637,	724],	[550,	550,	651],	[492,	492,	543]]],
    [[[716,	716,	808], [655,	655,	762],	[534,	534,	610]], [[671,	671,	762],	[579,	579,	686],	[518,	518,	572]]],
    [[[752,	752,	848], [688,	688,	800],	[560,	560,	640]], [[704,	704,	800],	[608,	608,	720],	[544,	544,	600]]],
    [[[787,	787,	887], [720,	720,	837],	[586,	586,	670]], [[737,	737,	837],	[636,	636,	753],	[569,	569,	628]]],
    [[[821,	821,	926], [752,	752,	874],	[612,	612,	699]], [[769,	769,	874],	[664,	664,	786],	[594,	594,	655]]],
    [[[855,	855,	965], [783,	783,	910],	[637,	637,	728]], [[801,	801,	910],	[692,	692,	819],	[619,	619,	683]]],
    [[[889,	889,	1002], [813,	813,	946],	[662,	662,	757]], [[832,	832,	946],	[946,	946,	851],	[643,	643,	709]]],
    [[[922,	922,	1040], [844,	844,	981],	[687,	687,	785]], [[863,	863,	981],	[746,	746,	883],	[667,	667,	736]]],
    [[[955,	955,	1077], [874,	874,	1016],	[711,	711,	813]], [[894,	894,	1016],	[772,	772,	914],	[691,	691,	762]]],
    [[[987,	987,	1113], [903,	903,	1050],	[735,	735,	840]], [[924,	924,	1050],	[798,	798,	945],	[714,	714,	788]]],
    [[[1019,	1019,	1149], [933,	933,	1084],	[759,	759,	867]], [[954,	954,	1084],	[824,	824,	976],	[737,	737,	813]]],
    [[[1051,	1051,	1185], [962,	962,	1118],	[783,	783,	894]], [[984,	984,	1118],	[850,	850,	1006],	[760,	760,	839]]],
    [[[1082,	1082,	1220], [990,	990,	1151],	[806,	806,	921]], [[1013,	1013,	1151],	[875,	875,	1036],	[783,	783,	864]]],
    [[[1113,	1113,	1256], [1019,	1019,	1184],	[829,	829,	948]], [[1042,	1042,	1184],	[900,	900,	1066],	[805,	805,	888]]],
    [[[1144,	1144,	1290], [1047,	1047,	1217],	[852,	852,	974]], [[1071,	1071,	1217],	[925,	925,	1095],	[828,	828,	913]]],
    [[[1175,	1175,	1325], [1075,	1075,	1250],	[875,	875,	1000]], [[1100,	1100,	1250],	[950,	950,	1125],	[850,	850,	937]]],
    [[[1205,	1205,	1359], [1102,	1102,	1282],	[897,	897,	1025]], [[1128,	1128,	1282],	[974,	974,	1154],	[872,	872,	961]]],
    [[[1235,	1235,	1393], [1130,	1130,	1314],	[920,	920,	1051]], [[1156,	1156,	1314],	[998,	998,	1182],	[893,	893,	985]]],
    [[[1265,	1265,	1426], [1157,	1157,	1345],	[942,	942,	1076]], [[1184,	1184,	1345],	[1023,	1023,	1211],	[915,	915,	1009]]],
    [[[1294,	1294,	1459], [1184,	1184,	1377],	[964,	964,	1101]], [[1212,	1212,	1377],	[1046,	1046,	1239],	[936,	936,	1033]]],
    [[[1324,	1324,	1493], [1211,	1211,	1408],	[986,	986,	1126]], [[1239,	1239,	1408],	[1070,	1070,	1267],	[957,	957,	1056]]],
    [[[1353,	1353,	1525], [1238,	1238,	1439],	[1007,	1007,	1151]], [[1266,	1266,	1439],	[1094,	1094,	1295],	[978,	978,	1079]]],
    [[[1382,	1382,	1558], [1264,	1264,	1470],	[1029,	1029,	1176]], [[1293,	1293,	1470],	[1117,	1117,	1323],	[999,	999,	1102]]],
    [[[1410,	1410,	1590], [1290,	1290,	1500],	[1050,	1050,	1200]], [[1320,	1320,	1500],	[1140,	1140,	1350],	[1020,	1020,	1125]]],
    [[[1439,	1439,	1622], [1316,	1316,	1531],	[1071,	1071,	1224]], [[1347,	1347,	1531],	[1163,	1163,	1377],	[1041,	1041,	1148]]],
    [[[1467,	1467,	1654], [1342,	1342,	1561],	[1092,	1092,	1248]], [[1373,	1373,	1561],	[1186,	1186,	1405],	[1061,	1061,	1170]]],
    [[[1495,	1495,	1686], [1368,	1368,	1591],	[1113,	1113,	1272]], [[1400,	1400,	1591],	[1209,	1209,	1431],	[1082,	1082,	1193]]],
    [[[1523,	1523,	1717], [1393,	1393,	1620],	[1134,	1134,	1296]], [[1426,	1426,	1620],	[1231,	1231,	1458],	[1102,	1102,	1215]]],
    [[[1551,	1551,	1749], [1419,	1419,	1650],	[1155,	1155,	1320]], [[1452,	1452,	1650],	[1254,	1254,	1485],	[1122,	1122,	1237]]],
    [[[1578,	1578,	1780], [1444,	1444,	1679],	[1175,	1175,	1343]], [[1478,	1478,	1679],	[1276,	1276,	1511],	[1142,	1142,	1259]]],
    [[[1606,	1606,	1811], [1469,	1469,	1708],	[1196,	1196,	1367]], [[1503,	1503,	1708],	[1298,	1298,	1538],	[1162,	1162,	1281]]],
    [[[1633,	1633,	1842], [1494,	1494,	1737],	[1216,	1216,	1390]], [[1529,	1529,	1737],	[1320,	1320,	1564],	[1181,	1181,	1303]]],
    [[[1660,	1660,	1872], [1519,	1519,	1766],	[1236,	1236,	1413]], [[1554,	1554,	1766],	[1342,	1342,	1590],	[1201,	1201,	1325]]],
    [[[1687,	1687,	1903], [1544,	1544,	1795],	[1257,	1257,	1436]], [[1580,	1580,	1795],	[1364,	1364,	1616],	[1221,	1221,	1346]]],
    [[[1714,	1714,	1933], [1568,	1568,	1824],	[1277,	1277,	1459]], [[1605,	1605,	1824],	[1386,	1386,	1641],	[1240,	1240,	1368]]],
    [[[1741,	1741,	1963], [1593,	1593,	1852],	[1296,	1296,	1482]], [[1630,	1630,	1852],	[1408,	1408,	1667],	[1259,	1259,	1389]]],
    [[[1767,	1767,	1993], [1617,	1617,	1880],	[1316,	1316,	1504]], [[1655,	1655,	1880],	[1429,	1429,	1692],	[1279,	1279,	1410]]]
            ],
            dailyPrice: ''
        }
    },
    computed:{
        result: function(){
            
            //console.log(this.calArr[Number(this.form.weight)][Number(this.form.infertile)][Number(this.form.body)][Number(this.form.activity)] )
            
            return this.calArr[Number(this.form.weight)][Number(this.form.infertile)][Number(this.form.body)][Number(this.form.activity)]
            //return Number(this.form.infertile) + Number(this.form.age) + Number(this.form.weight) + Number(this.form.activity) + Number(this.form.snack) + Number(this.form.body) 
            
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
            this.bodyErr = false
        },
        checkForm(){
        
        if(this.form.infertile && this.form.age && this.form.weight && this.form.activity && this.form.snack && this.form.body){
            this.showProduct()
            // this.calResult = this.result()
            // console.log(this.result())
            // console.log( Number(this.form.weight), Number(this.form.infertile), Number(this.form.body),Number(this.form.activity) )
        }
        this.infertileErr = this.form.infertile == '' ?  true : false
        this.ageErr = this.form.age == '' ? true : false
        this.weightErr = this.form.weight == '' ? true : false
        this.activityErr = this.form.activity == '' ? true : false
        this.snackErr = this.form.snack == '' ? true : false
        this.bodyErr = this.form.body == '' ? true : false
        return false
        },
        kcalCalculate(cal){
            let gr = this.result*1000/cal
            this.priceCalculate(gr)
            return gr.toFixed()
        },
        priceCalculate(gr){
            this.dailyPrice = (109/(1000/gr)).toFixed(2)
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
    box-sizing: border-box;
}
@media screen and (max-width: 768px) {
    .calculator{
        padding: 0 15px;
    }
}
.calculator .text-1 {
    font-size: 72px;
    line-height: 82px;
    font-weight: 400;
    margin-top: 0;
}

@media screen and (max-width: 768px) {
    .calculator .text-1 {
        font-size: 28px;
        line-height: 32px;
    }
}

.calculator .text-2 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
}

@media screen and (max-width: 768px) {
    .calculator .text-2 {
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

.calculator .home .text-1 {
    margin-bottom: 20px;
    margin-top: 0;
    color: #19463C;
}

.calculator .home .text-2 {
    margin-top: 0;
    margin-bottom: 40px;
}


@media screen and (max-width: 768px) {

    .calculator .home .text-2 br{
        display: none;
    }
}

.calculator .form {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
}
.calculator .form .text-1{
    margin-bottom: 40px;
}
.calculator .form .text-2{
    margin-top: 15px;
    margin-bottom: 25px;
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
    width: 46%;
    flex-basis: 46%;
    margin: 0 1% 15px 1%;


}
.calculator .form .input-container.select-container{
    position: relative;
}
.calculator .form .gg-chevron-down {
    box-sizing: border-box;
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 100px;
    top: 20px;
    right: 15px;
}
.calculator .form .gg-chevron-down::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    left: 4px;
    top: 2px
}
@media screen and (max-width: 768px) {
    .calculator .form .input-container {
        flex-basis: 100%;
        margin: 0 0 10px 0;
        padding: 0 10px;
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
    background-color: #fff;
    -webkit-appearance: none;
}

.calculator .form .bodytype-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 800px;
    max-width: 100%;
    margin: 0 auto 40px auto;
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
    .calculator .form .input-container input[type="text"],
    .calculator .form .input-container select{
        padding: 0 10px;
    }
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
    margin-top: 40px;
    color: #212121;
    text-align: center;
}




.calculator .products .align-items{
    display: flex;
    flex-flow: row;
}
@media screen and (max-width: 768px) {
    .calculator .products .align-items{
        flex-flow: column;
    }
}






.calculator .products {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    text-align: center;
}
.calculator .products .text-1{
    margin-bottom: 20px;
}
.calculator .products .text-3{
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 15px;
    font-weight: 400;
}
.calculator .products .text-4{
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 60px;
}

@media screen and (max-width: 768px) {
    .calculator .products .text-3{
        font-size: 24px;
        line-height: 28px;
    }
    .calculator .products .text-4{
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 50px;
    }
}
.calculator .products .product-flex{
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
}

.calculator .product {
    flex-basis: 33.3%;
    
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
}
@media screen and (max-width: 768px) {
    .calculator .product {
        flex-basis: 100%;
        padding: 0;
    }
}
.calculator .products .product a {
    display: flex;
    flex-flow: column;
    align-items: center;
    color: #212121;
    background-color: #FFFBF6;
    border-radius: 40px;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid #bbbab5;
} 

@media screen and (max-width: 768px) {
    .calculator .products .product a {
        border-radius: 20px;
    }
}

.calculator .products .product-image {

}
@media screen and (max-width: 768px) {
    .calculator .products .product-image {
        
    }

}

.calculator .products .product-image img {
    width: 100%;
    display: block;
}
.calculator .products .product-content {
    
    padding: 20px 40px 40px 40px;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-content {
        
    }
}

.calculator .products .product-name {
    font-size: 38px;
    line-height: 52px;
    font-weight: 400;
    display: inline-block;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-name {
        font-size: 28px;
        line-height: 36px;
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
    margin-top: 30px;
    margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-desc {
        font-size: 18px;
        padding-right: 0;
        padding-bottom: 0;
    }
}

.calculator .products .product-cta {
    background-color: #19463C;
    color: #ECFC72;
    font-size: 20px;
    line-height: 55px;
    padding: 0 45px;
    border-radius: 40px;
    align-self: flex-end;
    white-space: nowrap;
}

@media screen and (max-width: 768px) {
    .calculator .products .product-cta {
        font-size: 16px;
    }
}

.calculator .products .back-btn {
    font-size: 20px;
    color: #1B3F37;
    text-decoration: none;
    line-height: 70px;
    cursor: pointer;
    border: 1px solid #bbbab5;
    border-radius: 40px;
}
@media screen and (max-width: 768px) {
    .calculator .products .back-btn {
        font-size: 16px;
        line-height: 48px;
    }
}
.calculator .products .back-btn img{
    margin-right: 10px;
    display: inline-block;
}
.calculator .products .back-btn span{
    display: inline-block;
    vertical-align: top;
}

.calculator .reward-section{
    background-color: #FBDED5;
    border-radius: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    text-align: left;
    margin-top: 60px;
}
.calculator .reward-section .reward-image{
    flex-basis: 540px;
}
.calculator .reward-section .reward-text{
    flex-basis: calc(100% - 540px);
    padding: 0 60px;
    box-sizing: border-box;
}
.calculator .reward-section .reward-text .p1{
    font-size: 42px;
    margin-bottom: 10px;
    line-height: 56px;
}
.calculator .reward-section .reward-text .p2{
    font-size: 22px;
    line-height: 34px;
}
@media screen and (max-width: 768px) {
    .calculator .reward-section{
        text-align: center;
        padding-top: 30px;
    }
    .calculator .reward-section .reward-image{
        flex-basis: 100%;
        order: 2;
    }   
    .calculator .reward-section .reward-text{
        flex-basis: 100%;
        margin-bottom: 30px;
        padding: 0 30px;
    }
    .calculator .reward-section .reward-text .p1{
        font-size: 28px;
        line-height: 32px;
    }
    .calculator .reward-section .reward-text .p2{
        font-size: 16px;
        line-height: 20px;
    }
}
</style>

