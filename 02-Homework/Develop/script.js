var form = document.getElementById('passwordGenerator')
var numberOfCharactersElement = document.getElementById('numberOfCharacters')
var uppercaseIncludedElement = document.getElementById('uppercaseIncluded')
var numbersIncludedElement = document.getElementById('numbersIncluded')
var specialCharactersIncludedElement = document.getElementById('specialCharactersIncluded')
var passwordScreen = document.getElementById('passwordScreen')

var lowercase_char_codes  = arrayFromLowToHigh(97, 122)
var uppercase_char_codes = arrayFromLowToHigh(65, 90)
var number_char_codes = arrayFromLowToHigh(48, 57)
var special_char_codes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh (58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

form.addEventListener('submit', e => {
  e.preventDefault()
  var numberOfCharacters = numberOfCharactersElement.value
  var uppercaseIncluded = uppercaseIncludedElement.checked
  var numbersIncluded = numbersIncludedElement.checked
  var specialCharactersIncluded = specialCharactersIncludedElement.checked
  var password = generatePassword(numberOfCharacters, uppercaseIncluded, numbersIncluded, specialCharactersIncluded)
  passwordScreen.innerText = password
})

function generatePassword(numberOfCharacters, uppercaseIncluded, numbersIncluded, specialCharactersIncluded) {
  let charCodes = lowercase_char_codes
  if (uppercaseIncluded) charCodes = charCodes.concat(uppercase_char_codes)
  if (numbersIncluded) charCodes = charCodes.concat(number_char_codes)
  if (specialCharactersIncluded) charCodes = charCodes.concat(special_char_codes)
  
  var passwordCharacters = []
  for (let i = 0; i < numberOfCharacters; i++) {
    var character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(character))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}