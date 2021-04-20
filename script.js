document.getElementById("hiddenDiv")
 .style.visibility = 'hidden'

function login() {
 var user = document.getElementById(
  "username").value;
 var password = document.getElementById(
  "password").value;
 if (user == "Julian Houba") {
  if (password == "FM2007") {
   var loginDiv = document
    .getElementById("loginDiv");
   document.getElementById(
    "loginMsg").color = "green";
   document.getElementById(
     "loginMsg").innerHTML =
    "Login erfolgreich!";
   loginDiv.style.visibility = 'hidden';
document.getElementById("hiddenDiv").style.visibility = 'visible';
  } else document.getElementById(
    "loginMsg").innerHTML =
   "Falsches Passwort!";
 } else document.getElementById(
   "loginMsg").innerHTML =
  "Unbekannter Benutzername!";
}