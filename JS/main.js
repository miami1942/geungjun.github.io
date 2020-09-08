var list = $("#header #gnb");

list.on("mouseenter", function () {
    $("#header").addClass("on");
});
list.on("mouseleave", function () {
    $("#header").removeClass("on");
})

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
    scrollingSpeed: 500,
    scrollBar: true,
});