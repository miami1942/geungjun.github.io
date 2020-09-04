new fullpage('#fullpage', {
});

var list = $("#gnb .gnb_list > li");

list.on("mouseenter", function () {
    $("#header").addClass("on");
    $("#sub_header").addClass("on");
});
list.on("mouseleave", function () {
    $("#header").removeClass("on");
    $("#sub_header").removeClass("on");
});