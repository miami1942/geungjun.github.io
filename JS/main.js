var state = false;
var list = $("#header #gnb > ul").height();
let slide_switch = 1;
//let up_switch = 1;

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
                    //setTimeout(function () {
                    $(this).fadeOut(1000)
                    //}, 4000);
                })
            })
        })
    })
}
function up() {
    $("#up_img").animate({
        marginTop: "-1.5rem",
    }, 700, function () {
        $(this).animate({
            marginTop: "0rem",
        }, 700, function () {
            $(this).animate({
                marginTop: "-1.5rem",
            }, 700, function () {
                $(this).animate({
                    marginTop: "0rem",
                }, 700)
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
    navigationTooltips: ['start', '목차', '자기소개-인적',
        '자기소개-학력', '자기소개-기술력', '프로젝트1', '프로젝트2',
        '프로젝트3', '위로가기', '작성자'],
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
        if (destination.index === 8) {
            //if (up_switch === 1) {
                up_switch = 0
                setTimeout(function () {
                    up()
                }, 300);

            //}
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
    $("#header").height(0);
    $("#expand_header").removeClass("on");
    state = false;
    //$("#header").removeClass("on")
});
$("#fullpage").on("click", function () {
    $("#header").height(0);
    $("#expand_header").removeClass("on");
    state = false;
    //$("#header").removeClass("on")
});

$("#up_box").on('click', function () {
    console.log("up click")
    fullpage_api.moveTo(1, 0);
});