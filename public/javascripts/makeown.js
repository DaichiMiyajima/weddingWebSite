$(document).ready(function() {
});

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


