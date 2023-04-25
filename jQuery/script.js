// Wait for the DOM to load
$(document).ready(function() {
  
    $('#submit').click(function() {
  
        const name = $('#name');
        const email = $('#email');
        const phone = $('#phone');
        const form = $('#form');
        const message = $('#message');
    
        var required = [name, email, phone];
    
        for(let i = 0; i<required.length; i++){
            if(required[i].val() === ""){
                message.text("Please Fill Out Required Fields");
                message.addClass('warning');
                required[i].prev().addClass('warning');
            } else{
                required[i].prev().removeClass('warning');
            }
        }

        if(!($("label").hasClass("warning"))) {
            form.remove();
            $("h2").text("Thanks for your feedback!");
        }
    });
  
  });
  