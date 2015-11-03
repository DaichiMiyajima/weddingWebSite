$(document).ready(function() {
    $(".appForm").hide();
});

$("#appform,#application,#footerAppForm").click(function () {
    $(".index").hide();
    $(".appForm").show();      	      
});

$("#send,#home,#footerHome").click(function () {
    $(".index").show();
    $(".appForm").hide();      	      
});



