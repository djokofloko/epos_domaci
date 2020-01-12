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
    
    $("#nav_el1_2").hover(function (e) {
        $("#nav_el1_2").css("background-color", "rgba(0, 0, 0, 0.3)")
    });
    
    $("#nav_el2_2").hover(function (e) {
        $("#nav_el2_2").css("background-color", "rgba(0, 0, 0, 0.3)")
    });
    
    $("#nav_el3_2").hover(function (e) {
        $("#nav_el3_2").css("background-color", "rgba(0, 0, 0, 0.3)")
    });
    
    $("#nav_el4_2").hover(function (e) {
        $("#nav_el4_2").css("background-color", "rgba(0, 0, 0, 0.3)")
    });
    
    $("#nav_el5_2").hover(function (e) {
        $("#nav_el5_2").css("background-color", "rgba(0, 0, 0, 0.3)")
    });
    
    $("#nav_el6_2").hover(function (e) {
        $("#nav_el6_2").css("background-color", "rgba(0, 0, 0, 0.3)")
    });
    
    
    $("#nav_el1_2").mouseleave(function (e) {
        $("#nav_el1_2").css("background-color", "rgba(0, 0, 0, 0.4)")
    });
    
    $("#nav_el2_2").mouseleave(function (e) {
        $("#nav_el2_2").css("background-color", "rgba(0, 0, 0, 0.4)")
    });
    
    $("#nav_el3_2").mouseleave(function (e) {
        $("#nav_el3_2").css("background-color", "rgba(0, 0, 0, 0.4)")
    });
    
    $("#nav_el4_2").mouseleave(function (e) {
        $("#nav_el4_2").css("background-color", "rgba(0, 0, 0, 0.4)")
    });
    
    $("#nav_el5_2").mouseleave(function (e) {
        $("#nav_el5_2").css("background-color", "rgba(0, 0, 0, 0.4)")
    });
    
    $("#nav_el6_2").mouseleave(function (e) {
        $("#nav_el6_2").css("background-color", "rgba(0, 0, 0, 0.4)")
    });
    
    
});