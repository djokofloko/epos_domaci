$(document).ready(function () {
    $("#nav_el1").click(function () {
        var disp = $("#content_div1").css("display");

        if (disp === "none") {
            $("#content_div1").css("display", "block");

            $("#content_div2").css("display", "none");
            $("#content_div3").css("display", "none");
        } else if (disp === "block") {
            $("#content_div1").css("display", "none");

            $("#content_div2").css("display", "none");
            $("#content_div3").css("display", "none");
        }
    });

    $("#nav_el2").click(function () {
        var disp = $("#content_div2").css("display");

        if (disp === "none") {
            $("#content_div2").css("display", "block");

            $("#content_div1").css("display", "none");
            $("#content_div3").css("display", "none");
        } else if (disp === "block") {
            $("#content_div2").css("display", "none");

            $("#content_div1").css("display", "none");
            $("#content_div3").css("display", "none");
        }
    });

    $("#nav_el3").click(function () {
        var disp = $("#content_div3").css("display");

        if (disp === "none") {
            $("#content_div3").css("display", "block");

            $("#content_div1").css("display", "none");
            $("#content_div2").css("display", "none");
        } else if (disp === "block") {
            $("#content_div3").css("display", "none");

            $("#content_div1").css("display", "none");
            $("#content_div2").css("display", "none");
        }
    });
});