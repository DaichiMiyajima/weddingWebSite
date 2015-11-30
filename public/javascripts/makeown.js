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
	if($("#formName").val().length !=0 && $("#formEmail").val().length !=0 && $("#formPhone").val().length !=0 && $("#formMessage").val().length !=0 && $('.active input[name=Attendance]').val() &&  $('.active input[name=Friends]').val()  ){
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
    	                   formAttendance:$('.active input[name=Attendance]').val(),
    	                   formFriends:$('.active input[name=Friends]').val(),
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
                              swal("Error!", "Error!", "error");
    	            }
	        });
	  });
	}else if(!$('.active input[name=Attendance]').val()){
              swal("Required!", "You should put Attendance radio button!", "error");
          }else if(!$('.active input[name=Friends]').val()){
              swal("Required!", "You should put Friends radio button!", "error");
          }else{
	    swal("Required!", "You should input all of the items!", "error");
	}	        

});



