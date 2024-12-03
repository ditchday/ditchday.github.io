var i = 0;
var txt = 'Who are you, what are you, why are you'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML = txt.substring(0, i+1) +'<span aria-hidden="true"></span>';
    i++;
    setTimeout(typeWriter, speed);
  }
}