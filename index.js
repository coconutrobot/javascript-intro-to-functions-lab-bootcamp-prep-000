function shout(string) { 
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var spy = "hello"
var uppercase = "HELLO"
var lowercase = "hello"
var love = "I love you, too."

function logWhisper(string) {
  console.log(spy)
  return string.toLowerCase()
}

function logShout(string) {
  console.log(uppercase)
  return string.toUpperCase()
}

function sayHiToGrandma(uppercase, lowercase, love) {
  console.log(love)
  return "I love you, too."
}