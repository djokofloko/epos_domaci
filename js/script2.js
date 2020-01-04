$(document).ready(function () {

    // var disp = $("nav_button").css("display");


    $("#nav_button").click(function () {
        $("#nav_button").css("display", "none");

        $("#nav_2").css("display", "block");

    });


    $("#nav_el6_2").click(function () {
        $("#nav_button").css("display", "block");

        $("#nav_2").css("display", "none");
    });





    $("#nav_el1_2").click(function () {
        var disp = $("#content_div1_2").css("display");

        if (disp === "none") {
            $("#content_div1_2").css("display", "block");

            $("#content_div2_2").css("display", "none");
            $("#content_div3_2").css("display", "none");
            $("#content_div4_2").css("display", "none");
            $("#content_div5_2").css("display", "none");
        } else if (disp === "block") {
            $("#content_div1_2").css("display", "none");

            // $("#content_div2_2").css("display", "none");
            // $("#content_div3_2").css("display", "none");
        }
    });

    $("#nav_el2_2").click(function () {
        var disp = $("#content_div2_2").css("display");

        if (disp === "none") {
            $("#content_div2_2").css("display", "block");

            $("#content_div1_2").css("display", "none");
            $("#content_div3_2").css("display", "none");
            $("#content_div4_2").css("display", "none");
            $("#content_div5_2").css("display", "none");
        } else if (disp === "block") {
            $("#content_div2_2").css("display", "none");

            // $("#content_div1_2").css("display", "none");
            // $("#content_div3_2").css("display", "none");
        }
    });

    $("#nav_el3_2").click(function () {
        var disp = $("#content_div3_2").css("display");

        if (disp === "none") {
            $("#content_div3_2").css("display", "block");

            $("#content_div1_2").css("display", "none");
            $("#content_div2_2").css("display", "none");
            $("#content_div4_2").css("display", "none");
            $("#content_div5_2").css("display", "none");
        } else if (disp === "block") {
            $("#content_div3_2").css("display", "none");

            // $("#content_div1_2").css("display", "none");
            // $("#content_div2_2").css("display", "none");
        }
    });

    $("#nav_el4_2").click(function () {
        var disp = $("#content_div4_2").css("display");

        if (disp === "none") {
            $("#content_div4_2").css("display", "block");

            $("#content_div1_2").css("display", "none");
            $("#content_div2_2").css("display", "none");
            $("#content_div3_2").css("display", "none");
            $("#content_div5_2").css("display", "none");
        } else if (disp === "block") {
            $("#content_div4_2").css("display", "none");

            // $("#content_div1_2").css("display", "none");
            // $("#content_div2_2").css("display", "none");
        }
    });

    $("#nav_el5_2").click(function () {
        var disp = $("#content_div5_2").css("display");

        if (disp === "none") {
            $("#content_div5_2").css("display", "block");

            $("#content_div1_2").css("display", "none");
            $("#content_div2_2").css("display", "none");
            $("#content_div3_2").css("display", "none");
            $("#content_div4_2").css("display", "none");
        } else if (disp === "block") {
            $("#content_div5_2").css("display", "none");

            // $("#content_div1_2").css("display", "none");
            // $("#content_div2_2").css("display", "none");
        }
    });
});