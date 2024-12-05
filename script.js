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
    document.getElementById("test").innerHTML = txt + '<br><span class="hid">bike rack</span><span aria-hidden="true"></span><br><button onclick="help();">Hint</button>'
  }
}
function help() {
  now = Date.now();
  timetilnexthint = new Date('2024-12-05T00:44:00') - now;
  document.getElementById("hint").innerHTML = timetilnexthint; 

}
typeWriter();