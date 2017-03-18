document.addEventListener('DOMContentLoaded', function () {

var eingabe: string  = prompt ("Bitte Namen eingeben");
 
document.getElementById("hallo").innerHTML = "Herzlich Willkommen" + " " + eingabe;  

});
