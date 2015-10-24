$(document).ready(function() {
	$('#myContainer').multiscroll({
            	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
            	anchors: ['first', 'second', 'third'],
            	menu: '#menu',
            	navigation: true,
            	navigationTooltips: ['One', 'Two', 'Three'],
            	loopBottom: true,
            	loopTop: true
            });
});
	
function kakunin() {
    
    swal({   
        title: "HTML <small>Title</small>!",   
        text: "<textarea type=\"text\" tabIndex=\"3\" class=\"input-text\"  style=\"font-size: 16px !important;\"></textarea> \n",   
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


$("#appform").animatedModal({
                	      modalTarget:'modal-02',
	                animatedIn:'flipInY',
	                animatedOut:'bounceOutDown',
	                color:'rgb(51, 51, 51)',
	                // Callbacks
	                beforeOpen: function() {
	                    console.log("The animation was called");
	                },           
	                afterOpen: function() {
	                    console.log("The animation is completed");
	                }, 
	                beforeClose: function() {
	                    console.log("The animation was called");
	                }, 
	                afterClose: function() {
	                    console.log("The animation is completed");
	                }
});

$("#image").animatedModal({
        animatedIn:'flipInY'
});


