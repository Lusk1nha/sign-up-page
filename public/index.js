const allInputs = document.querySelectorAll('input')
const claimButton = document.querySelector('.claim-trial')

const regExValidation = {
  text: {
    regex: /^[a-zA-Z\s]{4,}$/,
    error: 'Only accepts letters',
  },

  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Only valid email',
  },

  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    error: 'Must have 8 characters, and at least one letter, and one number.',
  },

}

allInputs.forEach(input => {
  input.addEventListener('keyup', validInput)
})

function validInput(e) {
  const input = e.target
  const inputValue = input.value
  const regexType = regExValidation[input.type]
  
  const regexTest = regexType['regex'].test(inputValue)

  if ( !inputValue.length ) {
    setError(input, `${input.placeholder} cannot be empty`)

  } else {
    if ( regexTest ) removeError(input) 
    else setError(input, regexType.error)

  }

  const validInputs = document.querySelectorAll('.inputContainer.error')
  if (validInputs.length == 0 ) {
    claimButton.disabled = false

  } else claimButton.disabled = true
}

function setError(input, error) {
  const inputContainer = input.parentElement
  inputContainer.childNodes[3].innerHTML = error

  inputContainer.classList.add('error')
}

function removeError(input) {
  const inputContainer = input.parentElement
  inputContainer.childNodes[3].innerHTML = ''

  inputContainer.classList.remove('error')
}
