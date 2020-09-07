new fullpage('#fullpage', {
    navigation: true,
    slidesNavigation: true,
    scrollingSpeed: 500,
    onLeave: function (origin, destination, direction) {
        console.log("Leaving section" + origin.index);
    },
    resetSliders: true,
    touchSensitivity: 15,
});