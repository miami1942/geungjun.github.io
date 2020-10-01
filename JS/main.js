var state = false;
var list = $("#header #gnb > ul").height()
let slide_switch = 1
let slide_time = 5

function slide() {
    $(".slide_sign").animate({
        marginRight: "30px",
    }, 700, function () {
        $(this).animate({
            marginRight: "0px",
        }, 700, function () {
            $(this).animate({
                marginRight: "30px",
            }, 700, function () {
                $(this).animate({
                    marginRight: "0px",
                }, 700, function () {
                    setTimeout(function () {
                        $(".slide_sign").fadeOut(1000)
                    }, 4000);
                })
            })
        })
    })
}

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
        '프로젝트3', '프로젝트4', '위로', '기타'
    ],
    scrollingSpeed: 500,
    scrollBar: false,
    onLeave: function (origin, destination, direction) {
        console.log(destination.index)
        if (destination.index === 5) {
            if (slide_switch === 1) {
                slide_switch = 0
                setTimeout(function () {
                    slide()
                }, 1200);

            }
        }
    },
});

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