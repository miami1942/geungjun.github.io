var state = false;
var list = $("#header #gnb > ul").height()

$("#expand_header").click(function () {
    if (state == false) {
        $("#header").height(list + 10)
        $("#menu #expand_header").addClass("on")
        state = !state;
    } else {
        $("#header").height(0);
        $("#expand_header").removeClass("on");
        state = !state;
    }
    //$("#header").toggleClass("on");
})
$("#fullpage").on("mouseenter", function () {
    setTimeout(function () {
        $("#header").height(0);
        $("#expand_header").removeClass("on");
        state = false;
        //$("#header").removeClass("on")
    }, 0)
});

var mySwiper = new Swiper('.swiper-container', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

new fullpage('#fullpage', {
    navigation: true,
    navigationTooltips: ['STRAT', '목차', '자기소개-인적',
        '자기소개-학력', '자기소개-기술력', '프로젝트1', '프로젝트2',
        '프로젝트3', '프로젝트4','위로','기타'],
    scrollingSpeed: 500,
    scrollBar: false,
});