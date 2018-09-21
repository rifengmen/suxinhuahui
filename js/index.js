window.onload = function () {
    // banner图
    // 参数一：获取轮播点集合
    // 参数二：获取图片元素集合
    // 参数三：获取banner盒子元素
    // 参数四：获取左向按钮元素
    // 参数五：获取右向按钮元素
    // 参数六：获取banner盒子宽度
    let dots = document.querySelectorAll(".banner-dian div");
    let imgs = document.querySelectorAll(".banner-img a");
    let banner = document.querySelector(".banner");
    let lbtn = document.querySelector(".banner-left");
    let rbtn = document.querySelector(".banner-right");
    let widths = parseInt(getComputedStyle(banner,null).width);
    let val = 2500;
    let dotst = document.querySelectorAll(".banner-dian>span");
    console.log(dotst);
    banner_ani(dots,imgs,banner,lbtn,rbtn,widths,val,dotst);


    // Initialize Swiper
    // swiper 轮播图
    var mySwiper = new Swiper ('.swiper-container', {

        // 横竖屏控制
        // direction: 'vertical',

        // 是否循环
        loop: true,

        // 分屏控制（需要几幅图片）
        slidesPerView : 3,

        // 分屏间距
        spaceBetween : 26,

        // // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 自动轮播
        autoplay: {
            delay: 1000,
            // 默认为true，点击后停止自动轮播，如不停止须改为false
            disableOnInteraction: false,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })


    // 导航栏背景变色
    let navs = document.querySelector(".nav");
    let texts = document.querySelectorAll(".nav-inner-a a")
    let hots = document.querySelector(".nav-inner-a .hot")
    window.onscroll = function () {
        let tops = document.body.scrollTop || document.documentElement.scrollTop;
        if (tops >= 120) {
            navs.style.background = "#fff";
            texts.forEach(val => {
                val.style.color = "#000";
            });
            hots.style.color ="#16b0dc";
        }
        else if (tops < 120) {
            navs.style.background = "rgba(0,0,0,0.15)";
            texts.forEach(val => {
                val.style.color = "#fff";
            })
            hots.style.color ="#16b0dc";
        }
    }






}
