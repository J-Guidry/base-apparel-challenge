// select the input field type email
const email = document.querySelector("#email[type=email]");
const submitButton = document.querySelector("#submit");
const inputArea = document.querySelector("#email");
const errorIcon = document.querySelector(".error");
const errorMessage = document.querySelector(".error-message")
const form = document.querySelector("form");

    // Suppress the default error popup bubbles
    form.addEventListener( "invalid", function( event ) {
        event.preventDefault();
    }, true );

    form.addEventListener( "submit", function( event ) {
        if ( !this.checkValidity() ) {
            event.preventDefault();
        }
    });


const invalid = () => {
    email.oninvalid = (e) => {
        //clear field before testing validity
        e.target.setCustomValidity("");
        if(!e.target.validity.valid) {
            submitButton.classList.toggle("active-button");
            submitButton.classList.toggle("submit-color");
            inputArea.classList.toggle("active-border");
            errorIcon.classList.toggle("error-active");
            errorMessage.classList.toggle("error-message-visible");
        }
    };
    email.oninput = (e) => {
        //clear field after
        e.target.setCustomValidity("");
    }
}