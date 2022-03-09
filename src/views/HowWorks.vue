<template>
    <div class="howitwork-section">
        <div class="container">
            <div class="howitwork-title">Mamma nasıl çalışır?</div>
            <div class="howitwork-flex">
                <div class="howitwork-box">
                    <div class="howitwork-image">
                        <img src="../assets/howwork-1.png" alt="">
                    </div>
                    <div class="howitwork-box-title">
                        Günlük besin hesabı
                    </div>
                    <div class="howitwork-box-text">
                        Kopeginizle ilgili birkac soruya cevap verin, onun icin hangi lezzetli ve besleyici.
                    </div>
                </div>
                <div class="howitwork-box">
                    <div class="howitwork-image">
                        <img src="../assets/howwork-2.png" alt="">
                    </div>
                    <div class="howitwork-box-title">
                        Kutu boyutuna kararver
                    </div>
                    <div class="howitwork-box-text">
                        Mamma hesaplayarak köpeğin için en uygun kutu boyutuna karar verebilirsin.
                    </div>
                </div>
                <div class="howitwork-box">
                    <div class="howitwork-image">
                        <img src="../assets/howwork-3.png" alt="">
                    </div>
                    <div class="howitwork-box-title">
                        Evine teslim & servise hazır
                    </div>
                    <div class="howitwork-box-text">
                        Taze pişirilmiş ve dondurulmuş ürünler soğuk zincir ile evine teslim edilir.
                    </div>
                </div>
            </div>
            <a href="" class="howitwork-btn">Siparişe hemen başla</a>
        </div>
    </div>
</template>

<style>
.container{
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
}

.howitwork-section{
    padding: 100px 0;
    text-align: center;
    font-family: 'Source Serif Pro', serif;
}
.howitwork-section .howitwork-title{
    font-size: 48px;
    line-height: 60px;
    margin-bottom: 60px;
}
.howitwork-section .howitwork-flex{
    display: flex;
    flex-flow: row wrap;
}
.howitwork-section .howitwork-box{
    flex-basis: 33.3%;
    padding: 0 10px;
    color: #212121;
    box-sizing: border-box;
}
.howitwork-section .howitwork-box .howitwork-image{
    border-radius: 40px;
    margin-bottom: 40px;
}
.howitwork-section .howitwork-box .howitwork-image img{
    max-width: 100%;
    display: block;
}
.howitwork-section .howitwork-box .howitwork-box-title{
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 20px;

}
.howitwork-section .howitwork-box .howitwork-box-text{
    font-size: 20px;
    line-height: 28px;
    font-family: Acumin Pro,sans-serif;
    font-weight: 300;
}
.howitwork-section .howitwork-btn{
    display: inline-block;
    background-color: #19463C;
    color: #ECFC72;
    font-family: Acumin Pro,sans-serif;
    font-size: 18px;
    line-height: 60px;
    padding: 0 45px;
    margin-top: 60px;
    border-radius: 40px;
    text-decoration: none;
}
@media screen and (max-width: 768px) {
    .howitwork-section{
        padding: 50px 0;
    }
    .howitwork-section .howitwork-title{
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 30px;
    }
    .howitwork-section .howitwork-box{
        margin-bottom: 30px;
        flex-basis: 100%;
    }
    .howitwork-section .howitwork-box .howitwork-image{
        margin-bottom: 20px;
    }
    .howitwork-section .howitwork-box .howitwork-box-title{
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 10px;
    }
    .howitwork-section .howitwork-box .howitwork-box-text{
        font-size: 18px;
        line-height: 24px;
    }
    .howitwork-section .howitwork-btn{
        margin-top: 30px;
        font-size: 16px;
        line-height: 48px;
    }
}
</style>