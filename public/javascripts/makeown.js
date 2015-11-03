$(document).ready(function() {
    $(".appForm").hide();
});

$("#appform").click(function () {
    $(".index").hide();
    $(".appForm").show();      	      
});



$("#send").click(function () {
    $(".index").show();
    $(".appForm").hide();      	      
});


$("#home").click(function () {
    $(".index").show();
    $(".appForm").hide();      	      
});

$("#application").click(function () {
    $(".index").hide();
    $(".appForm").show();      	      
});

