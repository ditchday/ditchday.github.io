var i = 0;
var txt = 'Who are you, what are you, why are you'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

var helpCounter = 0;
var now;
var timetilnexthint;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML = txt.substring(0, i+1) +'<span aria-hidden="true"></span>';
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("test").innerHTML = txt + '<span aria-hidden="true"></span>' + '<br><button onclick="help();">Hint</button>'
  }
}
function help() {
  now = new Date();
  timetilnexthint = new Date(2024, 12, 5, 0, 40, 0, 0) - now;
  document.getElementById("hint").innerHTML = timetilnexthint; 

}
typeWriter();