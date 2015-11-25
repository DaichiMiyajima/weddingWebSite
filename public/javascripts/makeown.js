$(document).ready(function() {
    $(".appForm").hide();
});

$("#appform,#application,#footerAppForm").click(function () {
    $(".index").hide();
    $(".appForm").show();
    $("#facebook").show();
    $("#notfacebook").hide();  	      
});

$("#a_notfacebook").click(function () {
    $("#facebook").hide();     	          
    $("#notfacebook").show();     	      
});

$("#a_facebook").click(function () {
    $("#notfacebook").hide();  
    $("#facebook").show();     	             	      
});

$("#home,#footerHome").click(function () {
    $(".index").show();
    $(".appForm").hide();      	      
});

$("#sendMessage").click(function () {
	if($("#formName").val().length !=0 && $("#formEmail").val().length !=0 && $("#formPhone").val().length !=0 && $("#formMessage").val().length !=0 ){
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
    	                   formAttendance:$('input[name=Attendance]:checked').val(),
    	                   formFriends:$('input[name=Friends]:checked').val(),
			formName:$("#formName").val(),
			formEmail:$("#formEmail").val(),
			formPhone:$("#formPhone").val(),
			formMessage:$("#formMessage").val()
		   },
    	            success : function(responses) {
	                    swal("Registered!", "Your information has been registered.", "success");
                              $(".index").show();
                              $(".appForm").hide();
                              $("[id^='form']").val("");
    	            }
    	            ,error : function(){
        
    	            }
	        });
	  });
	}else{
	    swal("Required!", "You should input all of the items!", "error");
	}	        

});



