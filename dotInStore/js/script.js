
/* Contact Form
    * ------------------------------------------------------ */
    var clContactForm = function() {
        
        /* local validation */
        $('#contactForm').validate({
        
            /* submit via ajax */
            submitHandler: function(form) {
    
                var sLoader = $('.submit-loader');
    
                $.ajax({
    
                    type: "POST",
                    url: "mailing/sendEmail.php",
                    data: $(form).serialize(),
                    beforeSend: function() { 
						
                        sLoader.slideDown("slow");
    
                    },
                    success: function(msg) {
    
                        // Message was sent
                        if (msg == 'OK') {
                            sLoader.slideUp("slow"); 
                            $('.message-error').fadeOut();
                            $('#contactForm').fadeOut();
                            $('.message-success').fadeIn();
                        }
                        // There was an error
                        else {
                            sLoader.slideUp("slow"); 
                            $('.message-warning').html(msg);
                            $('.message-warning').slideDown("slow");
                        }
                    },
                    error: function() {
/*
    
                        sLoader.slideUp("slow"); 
*/                      sLoader.slideUp("slow");
                        $('.message-warning').html("Something went wrong. Please try again.");
                        $('.message-warning').slideDown("slow");
                    }

                });                
				   /* $('#ResponceModal').modal("show");*/
            }
    
        });
    };

$(document).ready(function(){


	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		timestamp : (new Date()).getTime() + 08*10*60*60*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
