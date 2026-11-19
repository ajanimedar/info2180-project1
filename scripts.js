/* Add your JavaScript to this file */

window.onload = function() {
    
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var messageDiv = document.querySelector(".message");

    
    form.addEventListener("submit", function(event) {
       
        event.preventDefault();

       
        var email = emailInput.value;

        
        if (email === "") {
            messageDiv.innerHTML = "Please enter a valid email address.";
        } else {
            messageDiv.innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });
};