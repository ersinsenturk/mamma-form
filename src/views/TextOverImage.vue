<template>
    <div class="toi-section">
        <div class="container">
            <div class="toi-box">
                <div class="toi-image-box">
                    <div class="toi-image-text">
                        Taze Mamma nedir?
                    </div>
                    <div class="toi-image">
                        <img src="../assets/fresh.png" alt="">
                    </div>
                </div>
                <div class="toi-content">
                    <div class="toi-title">Mevsiminde sebze ve meyvelerle pişirilen, tüm yaş gruplarinda.</div>
                    <div class="toi-text">Tüm Mammalar uzmanlarimiz esliginde, spesifik vitamin ve mineral dengesine, bağırsak sağlığına, bağışıklık sistemine destek olmak için gerekli miktarda hayvansal ve bitkisel protein, lif, yağ ve karbonhidrat oranları gozetilerek oluşturulmuştur.</div>
                    <a href="" class="toi-btn">Nasıl çalışıyor?</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container{
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
}
.toi-section{
    padding: 100px 0;
    background: url(../assets/sec-bg.png) no-repeat top center;
    background-size: 100% auto;
    font-family: 'Source Serif Pro', serif;
}
.toi-section .toi-box{
    background-color: #FEF8F2;
    padding: 40px;
    border-radius: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.toi-section .toi-box .toi-image-box{
    flex-basis: 480px;
    background-color: #F4F3E7;
    border-radius: 40px;
    padding-top: 40px;
    text-align: center;
}
.toi-section .toi-box .toi-image-box .toi-image-text{
    font-size: 48px;
    line-height: 54px;
    padding: 0 45px;
    color: #212121;
    margin-bottom: 30px;
}
.toi-section .toi-box .toi-image-box .toi-image{
    
}
.toi-section .toi-box .toi-image-box .toi-image img{
    max-width: 100%;
    display: inline-block;
}
.toi-section .toi-box .toi-content{
    flex-basis: calc(100% - 480px);
    padding-left: 60px;
    box-sizing: border-box;
}
.toi-section .toi-box .toi-content .toi-title{
    font-size: 36px;
    line-height: 42px;
    color: #19463C;
    margin-bottom: 30px;
}
.toi-section .toi-box .toi-content .toi-text{
    font-family: Acumin Pro,sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: #212121;
}
.toi-section .toi-box .toi-content .toi-btn{
    font-family: Acumin Pro,sans-serif;
    display: inline-block;
    background-color: #19463C;
    color: #ECFC72;
    font-size: 18px;
    line-height: 60px;
    padding: 0 45px;
    margin-top: 40px;
    border-radius: 40px;
    text-decoration: none;
}
@media screen and (max-width: 768px) {
    .toi-section{
        padding: 30px 0;
    }
    .toi-section .toi-box{
        padding: 25px;
        border-radius: 20px;
    }
    .toi-section .toi-box .toi-image-box{
        flex-basis: 100%;
        padding-top: 20px;
        border-radius: 20px;
    }
    .toi-section .toi-box .toi-image-box .toi-image-text{
        font-size: 28px;
        line-height: 36px;
        padding: 0 30px;
    }
    .toi-section .toi-box .toi-content{
        flex-basis: 100%;
        padding: 30px 0 0 0;
        text-align: center;
    }
    .toi-section .toi-box .toi-content .toi-title{
        font-size: 24px;
        line-height: 32px;
    }
    .toi-section .toi-box .toi-content .toi-text{
        font-size: 18px;
        line-height: 22px;
    }
    .toi-section .toi-box .toi-content .toi-btn{
        font-size: 16px;
        line-height: 48px;
        padding: 0 60px;
    }
}
</style>