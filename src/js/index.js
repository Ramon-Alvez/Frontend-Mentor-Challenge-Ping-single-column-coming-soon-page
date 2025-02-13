const form = document.getElementById('form')
const emailInput = document.querySelector('input#email')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const errorSpan = document.querySelector('span.error')


// Functions to Add or Remove the "error border" to input
function addError() {
    emailInput.classList.add('invalid')
}
function removeError() {
    emailInput.classList.remove('invalid')
}


// Function to test email values as valid or not
function verifyEmail() {

    if (emailInput.value == '') 
    {
        addError()
        errorSpan.innerText = 'Whoops! It looks like you forgot to add your email'
    }
    else if (!emailRegex.test(emailInput.value))
    {
        addError()
        errorSpan.innerText = 'Please provide a valid email address'
    }
    else
    {
        removeError()
        errorSpan.innerText = ''
    }
}


// Form verification
form.addEventListener('submit', (event) => {
    event.preventDefault()
    verifyEmail()
}) 