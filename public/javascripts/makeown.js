$(document).ready(function() {
	$.ajax({
    	url  : "/groupchat",
    	type : "get",
		async:false,
    	success : function(responses) {
		    _delete_element("reply_comment_rireki_article");
			var article = document.querySelector('#reply_comment_rireki_article');
			var li;
			for (var i=0 ; i < responses.length ; i++){
			  h3 = document.createElement("h3");
			  var section = document.createElement("section");
			  var p = document.createElement("p");
			  h3.textContent = responses[i].userName;
			  p.textContent = responses[i].groupChat;
			  article.appendChild(h3);
			  article.appendChild(section);
			  section.appendChild(p);
			}
			
    	},
    	error : function(){
        
    	}
	});	
});
	
function kakunin() {
    
    swal({   
        title: "HTML <small>Title</small>!",   
        text: "<textarea type=\"text\" tabIndex=\"3\" ></textarea>\n",   
        html: true,
        animation: false
    });
                                        
    /*swal({   
        title: "Invitation!",   
        text: "Put the below button or Write your information:",   
        type: "input",   
        showCancelButton: true,   
        closeOnConfirm: false,   
        animation: "slide-from-top",   
        inputPlaceholder: "Your Name" ,
        }, function(inputValue){ 
                if (inputValue === false) return false; 
                if (inputValue === "") {
                         swal.showInputError("You need to write something!");     
                         return false  
                }      
                swal("Nice!", "You wrote: " + inputValue, "success"); 
        });*/
};

