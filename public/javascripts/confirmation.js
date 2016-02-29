$(document).ready(function() {
    $('.timeline-panel-done').css({ 
        'background': 'linear-gradient(rgb(255, 253, 254) 0%, rgb(93, 129, 228) 100%)'  
    });
});

$(".timeline-panel-yet").on('click', function() {
        swal("Required!", "You should input all of the items!", "error");	        
});

function confY(id,name){
            swal({   
	    title: "Confirm",   
	    text: name + "：return to original?",   
	    type: "info",   
	    showCancelButton: true,   
	    closeOnConfirm: false,   
	    confirmButtonText: "Yes, delete it!",
	    showLoaderOnConfirm: true, 
	    }, function(){
	        $.ajax({
	            url  : "/conf",
    	            type : "post",
    	            data:{
			formId:id,
			formConfirmation:"yet"
		   },
    	            success : function(responses) {
	                    swal("Updated!", "参加確認→未確認", "success");
	                    location.reload();  
    	            }
    	            ,error : function(){
                              swal("Error!", "Error!", "error");
    	            }
	        });
	  });
}

function confD(id,name){
            swal({   
	    title: "Confirm",   
	    text: name + "：attend the party?",   
	    type: "info",   
	    showCancelButton: true,   
	    closeOnConfirm: false,   
	    showLoaderOnConfirm: true, 
	    }, function(){
	        $.ajax({
	            url  : "/conf",
    	            type : "post",
    	            data:{
			formId:id,
			formConfirmation:"done"
		  },
    	            success : function(responses) {
	                   swal("Updated!", "参加確認完了！", "success");
	                    location.reload();
	                    location.reload();  
    	            }
    	            ,error : function(){
                              swal("Error!", "Error!", "error");
    	            }
	        });
	  });
}



