var i = 0;
var txt = '&#x202e;Binary to letter encoder, put in 5 bits and try it out'; /* The text */
var stl = 'As we know, the internet is huge, and thus nothing is original anymore. Might as well give into it. Recreate the following photo and send it in spam. We will give you a code if its good.'
var speed = 50; /* The speed/duration of the effect in milliseconds */
var hint1 = 'Hint: Top right is lame, I prefer bottom left';
var hint2 = 'Hint: Where have you seen bits';
var hint3 = 'Hint: Go to the wallboard. See the bits? Read it starting from the bottom left and use the converter.';

let timezoneOffset = Date.getTimezoneOffset();
let pstOffset = -480;
var helpCounter = 0;
var input;
var aaa;
var cod;
var now;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML = txt.substring(0, i+1) +'<span aria-hidden="true"></span>';
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("test").innerHTML = txt + '<br><input type="text" id="input" required minlength="5" maxlength="5"><span id="output"></span><br><button onclick="convert();">&#x202e;Convert</button><br><button onclick="help();">Hint</button>'
  }
}

function convert() {
  input = document.getElementById("input");
  aaa = parseInt(input.value, 2)
  if (aaa == 0) {
    document.getElementById("output").innerHTML = "_";
  }
  else if (aaa>0 && aaa<27)
    document.getElementById("output").innerHTML = String.fromCharCode(64+aaa);
  else {
    document.getElementById("output").innerHTML = "Invalid";
  }
}

function help() {
  if (helpCounter == 0) {
    document.getElementById("test").innerHTML = txt + '<br><input type="text" id="input" required minlength="5" maxlength="5"><span id="output"></span><br><button onclick="convert();">&#x202e;Convert</button><br><button onclick="help();">Hint</button><br>'+hint1+"<br>Punishment: Record yourself doing part of the Cha Cha slide";
    helpCounter++;
  }
  else if (helpCounter == 1) {
    document.getElementById("test").innerHTML = txt + '<br><input type="text" id="input" required minlength="5" maxlength="5"><span id="output"></span><br><button onclick="convert();">&#x202e;Convert</button><br><button onclick="help();">Hint</button><br>'+hint2+"<br>Punishment: Give a senior a complement in binary in spam";
    helpCounter++;
  }
  else if (helpCounter == 2) {
    document.getElementById("test").innerHTML = txt + '<br><input type="text" id="input" required minlength="5" maxlength="5"><span id="output"></span><br><button onclick="convert();">&#x202e;Convert</button><br><button onclick="help();">Hint</button><br>'+hint3+"<br>Punishment: Convert your energy into productive means. 10 pushups, all of you; send in spam";
    helpCounter++;
  }
}
now = Date.now();
var timetobegin = new Date('2024-12-05T08:35:00'+(pstOffset + timezoneOffset) * 60 * 1000) - now;
var stallcount = 0;
function stallloop() {
  now = Date.now();
  timetobegin = new Date('2024-12-05T08:35:00'+(pstOffset + timezoneOffset) * 60 * 1000) - now;
  if (timetobegin < 0) {
    typeWriter();
  }
  else {
    cod = document.getElementById("input").value;
    if (stallcount == 0) {
      if (cod == 'fancy') {
        stallcount++;
        stallloop();
      }
      else {
        document.getElementById("test").innerHTML = stl +'<span aria-hidden="true"></span><br><input type="text" id="code"><br><img src="image0.jpg" alt="Im sorry">'
      }
    }
    else if (stallcount == 1) {
      if (cod == 'great') {
        stallcount++;
        stallloop();
      }
      else {
        document.getElementById("test").innerHTML = stl +'<span aria-hidden="true"></span><br><input type="text" id="code"><br><img src="image1.jpg" alt="Im sorry">'
      }
    }
    else if (stallcount == 2) {
      if (cod == 'amazing') {
        stallcount++;
        stallloop();
      }
      else {
        document.getElementById("test").innerHTML = stl +'<span aria-hidden="true"></span><br><input type="text" id="code"><br><img src="image1.jpg" alt="Im sorry">'
      }
    }
  }

}
function stall() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML = stl.substring(0, i+1) +'<span aria-hidden="true"></span>';
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("test").innerHTML = stl +'<span aria-hidden="true"></span><input type="text" id="code">';
    stallloop();
    }
}



if (timetobegin < 0) {
  typeWriter();
}
else {
  stall();
}
