<template>
    <div class="lwi-section">
        <div class="container">
            <div class="lwi-box">
                <div class="lwi-image">
                    <img src="../assets/lwi-img.png" alt="">
                </div>
                <div class="lwi-content">
                    <div class="lwi-list">
                        <div class="lwi-list-item">Yemek heyecanı</div>
                        <div class="lwi-list-item">Küçülen kakalar</div>
                        <div class="lwi-list-item">Parlak tüyler</div>
                        <div class="lwi-list-item">Alerjik kaşıntıda azalma</div>
                        <div class="lwi-list-item">Daha fazla enerji</div>
                        <div class="lwi-list-item">Daha fazla mutluluk</div>
                    </div>
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

.lwi-section{
    padding: 100px 0;
    background-size: 100% auto;
    font-family: 'Source Serif Pro', serif;
}
.lwi-section .lwi-box{
    background-color: #F4F3E7;
    padding: 0 40px 0 0;
    border-radius: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.lwi-section .lwi-box .lwi-image{
    flex-basis: 50%;
    background-color: #F4F3E7;
    border-radius: 40px 0 0 40px;
    overflow: hidden;
    text-align: center;
}
.lwi-section .lwi-box .lwi-image img{
    max-width: 100%;
    display: inline-block;
}
.lwi-section .lwi-box .lwi-content{
    flex-basis: 50%;
    padding-left: 80px;
    box-sizing: border-box;
}
.lwi-section .lwi-box .lwi-content .lwi-list{
    font-size: 28px;
    line-height: 36px;

    color: #212121;
}
.lwi-section .lwi-box .lwi-content .lwi-list .lwi-list-item{
    background: url(../assets/list-icon.png) no-repeat left top 5px;
    background-size: 20px;
    padding-left: 36px;
    margin-bottom: 20px;
}
@media screen and (max-width: 768px) {
    .lwi-section{
        padding: 30px 0;
    }
    .lwi-section .lwi-box{
        padding: 0 0 25px 0;
        border-radius: 20px;
    }
    .lwi-section .lwi-box .lwi-image{
        flex-basis: 100%;
        border-radius: 20px 20px 0 0;
    }
    .lwi-section .lwi-box .lwi-content{
        flex-basis: 100%;
        padding: 30px 30px 0 30px;
    }
    .lwi-section .lwi-box .lwi-content .lwi-list{
        font-size: 22px;
    }
}
</style>