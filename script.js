var i = 0;
var txt = 'Welcome to the internet! Everything you need is here, you just need to know where to look. If you are truly confused, we got you... for a price'; /* The text */
var early = 'You are too early, come back at 8'
var speed = 50; /* The speed/duration of the effect in milliseconds */
var hint1 = 'Hint: See what is unseen';
var hint2 = 'Hint: Have you tried highlighting everything?';
var hint3 = 'Hint: Bro its just hidden text, whatever its bike rack go to the bike rack';
let timezoneOffset = Date.getTimezoneOffset();
let pstOffset = -480;


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
  if (helpCounter == 0) {
    timetilnexthint = new Date('2024-12-05T08:05:00'+(pstOffset + timezoneOffset) * 60 * 1000) - now;
    if (timetilnexthint < 0) {
      document.getElementById("test").innerHTML = txt + '<br><span class="hid">bike rack</span><span aria-hidden="true"></span><br><button onclick="help();">Hint</button><br>'+hint1+"<br>Punishment: Put on the sunglasses behind the wallboard and keep them on for the whole stack";
      helpCounter++;
    }
    else {
    	document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<br>Wait a bit for the hint.";
    }
  }
  else if (helpCounter == 1) {
    timetilnexthint = new Date('2024-12-05T08:06:00'+(pstOffset + timezoneOffset) * 60 * 1000) - now;
    if (timetilnexthint < 0) {
      document.getElementById("test").innerHTML = txt + '<br><span class="hid">bike rack</span><span aria-hidden="true"></span><br><button onclick="help();">Hint</button><br>'+hint2+"<br>Punishment: Use the highlighter and highlight yourself. Go wild.";
      helpCounter++;
    }
    else {
    	document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<br>Wait a bit for the hint.";
    }
  }
  else if (helpCounter == 2) {
    timetilnexthint = new Date('2024-12-05T08:07:00'+(pstOffset + timezoneOffset) * 60 * 1000) - now;
    if (timetilnexthint < 0) {
      document.getElementById("test").innerHTML = txt + '<br><span class="hid">bike rack</span><span aria-hidden="true"></span><br><button onclick="help();">Hint</button><br>'+hint3+"<br>Punishment: You make me sad. Everyone send the sad emoji in spam";
      helpCounter++;
    }
    else {
    	document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<br>Wait a bit for the hint.";
    }
  }
}
function tooearly() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML = early.substring(0, i+1) +'<span aria-hidden="true"></span>';
    i++;
    setTimeout(typeWriter, speed);
  }
}
now = Date.now();
var timetobegin = new Date('2024-12-05T08:00:00'+(pstOffset + timezoneOffset) * 60 * 1000) - now;
if (timetobegin < 0) {
  typeWriter();
}
else {
  tooearly();
}