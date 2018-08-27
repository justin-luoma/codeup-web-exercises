"use strict";

$(document).ready(function () {
    $("#panel2").hide();

    $("#btn1").click(function () {
        $("#panel1").slideToggle(1000).delay(1000).slideToggle(1000);
    });
    $("#btn2").dblclick(function () {
        $("#panel2").fadeToggle(1000);
    });
});