$(document).ready(function() {
    $(".appForm").hide();
});

$("#appform,#application,#footerAppForm").click(function () {
    $(".index").hide();
    $(".appForm").show();      	      
});

$("#home,#footerHome").click(function () {
    $(".index").show();
    $(".appForm").hide();      	      
});

$("#sendMessage").click(function () {
	swal({   
	    title: "Confirm",   
	    text: "Submit to register",   
	    type: "info",   
	    showCancelButton: true,   
	    closeOnConfirm: false,   
	    showLoaderOnConfirm: true, 
	    }, function(){
	        $.ajax({
	            url  : "/appform",
    	            type : "post",
    	            data:{
			formName:$("#formName").val(),
			formEmail:$("#formEmail").val(),
			formPhone:$("#formPhone").val(),
			formMessage:$("#formMessage").val()
		   },
    	            success : function(responses) {
	                    swal("Registered!", "Your information has been registered.", "success");
                              $(".index").show();
                              $(".appForm").hide();    
    	            }
    	            ,error : function(){
        
    	            }
	        });
	        
	    });
});



