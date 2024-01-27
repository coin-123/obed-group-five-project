
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector('.form__message')
    messageElement.textContent = message
    messageElement.classList.remove('form__message--success', 'form__message--error p')
    messageElement.classList.add('form__message--${type}')
    // console.log()
}


const con = {isobednlemchukwugmailcom:{
    password:2009,
    department:"student",
    gender:10

}
}


function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error")
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error")
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message
}

// setFormMessage(loginForm, "succes", "You're logged in")

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector('#createAccount')

    document.querySelector("#linkCreateAccount").addEventListener('click', e => {
        e.preventDefault()
        loginForm.classList.add('form--hidden')
        createAccountForm.classList.remove('form--hidden')
    })

    document.querySelector("#linkLogin").addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('form--hidden');
        createAccountForm.classList.add("form--hidden");

     
    })
// error discription for login page
    loginForm.addEventListener('submit', function     (event){
        event.preventDefault ()

        if(loginForm.user.value in con){
            if(con[loginForm.user.value].password == loginForm.password.value){
                location.href = "team project/index.html"
            
            }
                
            }else {

                        // perform your AJAX/fetch login//

                setFormMessage(loginForm, 'error', "invalid username/password combination" )
                
                // 
            }
    



      
    })
// 

// error discirption for createAccount page
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            e.preventDefault()
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 character in length")
            }
        })

        inputElement.addEventListener('input', () => {
            clearInputError(inputElement)
        })

    })
    // 

    let checkboxes = document.querySelectorAll('.single-checkbox');
    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener('change', function() {
            checkboxes.forEach(function(otherCheckbox) {
                if (otherCheckbox !== checkbox){
                    otherCheckbox.checked = false;
                }
            })
        })
    })



})