<template>
    <div>
        <div class="m-auto user-avatar cursor-p">
            <img src="../../static/img/1664988.jpg" class="w-100" alt="">
        </div>
        <div class="font-size-2 color-b8c4ce text-center mt-2 cursor-p">别问我是谁说了你也不认识</div>
        <div class="d-flex honor justify-content-between cursor-p">
            <i class="iconfont honor-icon iconVIP"></i>
            <i class="iconfont honor-icon iconyuanchuangtag"></i>
            <i class="iconfont honor-icon icondashang"></i>
            <i class="iconfont honor-icon iconjingyanzhi"></i>
        </div>
        <div class="d-flex text-center fan border-top mt-3 font-size-1">
            <div class="w-50 mt-2 border-right cursor-p">
                <span>粉丝</span>
                <span>11</span>
            </div>
            <div class="w-50 mt-2 cursor-p">
                <span>关注</span>
                <span>5</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .user-avatar{
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .honor{
        width: 100px;
        margin:0 auto;
    }
    .honor-icon{
        font-size: 20px;
    }
    .fan span{
        display: block;
    }
</style>
