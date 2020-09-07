var list = $("#gnb .gnb_list > li");

list.on("mouseenter", function () {
    $("#header").addClass("on");
    $("#sub_header").addClass("on");
});
list.on("mouseleave", function () {
    $("#header").removeClass("on");
    $("#sub_header").removeClass("on");
});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

new fullpage('#fullpage', {
    navigation: true,
    navigationTooltips: ['', 'EX1', 'EX2', 'STRAT', ''],
    showActiveTooltip: true,
});