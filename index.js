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
  if (love) {
  return "I love you, too.";
} else if (uppercase) {
  return "YES INDEED!"; 
} else if (lowercase) {
  return "I can't hear you."
}}