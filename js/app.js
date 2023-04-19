$(document).ready(function () {
    $(".elev").click(function () {
        $("Html,body").scrollTop(0);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".elev").css("transform", "translate(0 , 0)");
        } else {
            $(".elev").css("transform", "translate(0 , 200px)");
        }
    });
});