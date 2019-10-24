var start = false;
var touchenabled = false;
var started = false;
var oef = false;
var count = 2;
var pageX, pageY;
var mySound;
var longdong = -1;
var shakeInt;
var shakeWhile = false;
var etn1 = Math.floor(Math.random() * (2 - 0 + 1));
var etn2 = Math.floor(Math.random() * (2 - 0 + 1));
var goFS = document.getElementById("goFS");
var bheight = document.getElementById('startscreen').clientHeight / 2;
var bwidth = document.getElementById('startscreen').clientWidth / 2;


var timeout_id = 0,
    hold_time = 3000,
    hold_menu = $('.hold_menu'),
    hold_trigger = $('#goFS');

hold_trigger.mousedown(function() {
    timeout_id = setTimeout(function() {
    menu_toggle();
    goFS.innerHTML = goFS.innerHTML.replace("Go in", "Longdong Mode");
    longdong = bheight*2;
}, hold_time);
}).bind('mouseup mouseleave', function() {
    clearTimeout(timeout_id);
});

function menu_toggle() {
  hold_menu.toggle();
}


goFS.addEventListener("click", function() {
  startGame();
}, false);

goFS.addEventListener("touchstart", function() {
  touchenabled = true;
}, false);

function startGame() {
  $("#startscreen").css('z-index', '-1');
  /*if (touchenabled) {
    document.body.requestFullscreen();
  }
*/
  mySound = new sound("https://raw.githubusercontent.com/finlaydegrauwe/seksedu/master/oeff.mp3");
  var i = 1;
  var j = 50;
  var k = 50;
  var l = 50;
  var m = 1;
  var sch = 1;
  var nuts = 100;
  var ofsetl = 100;
  var ofsete = 1;
  var leftsv = -335;
  var rightsv = 335;
  var colorfade = 1;
  var goinfadeout = setInterval(function() {
    $("#goFS").css({
      "background-color": "rgb(" + colorfade * 2 + "," + colorfade * etn1 + "," + colorfade * etn2 + ")",
      "color": "rgba(255,255,255," + i + ")",
      "top": m * 1.12 + ((pageY - bheight) / 30) + "%",
      "border-radius": k + "%",
      "width": j + "vw",
      "height": l * 1 + "%"
    });
    $(".piemel").css({
      "background-color": "rgb(" + count * 3 + ",0,0)"
    });
    $("#leftnut").css({
      "z-index": 1,
      left: pageX - 280 + ofsetl,
      top: pageY - 150 + ofsetl,
      height: nuts,
      width: nuts
    });
    $("#rightnut").css({
      "z-index": 1,
      left: pageX - 20 + ofsetl,
      top: pageY - 150 + ofsetl,
      height: nuts,
      width: nuts
    });
    $("#schaft").css({
      "z-index": 1,
      left: pageX - 100,
      top: pageY,
      height: sch + 100 + longdong
    });
    $("#eikel").css({
      "z-index": 1,
      left: pageX - 100,
      top: pageY + ofsete - 20
    });
    $("#lefts").css({
      "z-index": 2,
      "background-color": "rgb(255," + 100 * etn1 + "," + 100 * etn2 + ")",
      width: bwidth,
      left: leftsv - 80,
      top: m + 17 + ((pageY - bheight) / 40) + "%",
      height: l + "%"
    });
    $("#rights").css({
      "z-index": 2,
      "background-color": "rgb(255," + 100 * etn1 + "," + 100 * etn2 + ")",
      left: bwidth + 80 + rightsv,
      top: m + 17 + ((pageY - bheight) / 40) + "%",
      height: l + "%"
    });

    i -= 0.05;
    j *= 1.015 + 0.01;
    k -= 0.5;
    l += 0.2;
    m += 0.6;
    sch *= 1.091;
    nuts += 2.98;
    ofsetl -= 1.49;
    ofsete *= 1.0922;
    leftsv += 5;
    rightsv -= 5;
    colorfade += 1.5;
  }, 15);
  setTimeout(function() {
    clearInterval(goinfadeout);
    started = true;
  }, 1005);
}

function replaceIt() {
  $('#startscreen').replaceWith(function() {
    return $('#goFS', this);
  });
}

$(document).mousemove(function(e) {
  pageX = e.pageX;
  pageY = e.pageY;
  if (started) {
    drawpiemel(pageX, pageY);
  }
});


document.addEventListener("touchmove", function(event) {
  event.preventDefault();
  pageX = event.touches[0].clientX;
  pageY = event.touches[0].clientY;
  if (started) {
    drawpiemel(pageX, pageY);
  }
});

function drawpiemel(pageX, pageY) {
  $("#leftnut").css({
    left: pageX - 280 - count / 2,
    top: pageY - 150 - count / 2,
    height: 300 + count,
    width: 300 + count
  });
  $(".piemel").css({
    "background-color": "rgb(" + count * 3 + ",0,0)"
  });
  $("#rightnut").css({
    left: pageX - 20 - count / 2,
    top: pageY - 150 - count / 2,
    height: 300 + count,
    width: 300 + count
  });
  $("#schaft").css({
    height: 450+longdong+"px",
    left: pageX - 100,
    top: pageY
  });
  $("#eikel").css({
    left: pageX - 100,
    top: pageY + 320
  });
  $("#lefts").css({
    top: 40.2 + 17 + ((pageY - bheight) / 40) + "%"
  });
  $("#rights").css({
    top: 40.2 + 17 + ((pageY - bheight) / 40) + "%"
  });
  $("#goFS").css({
    "top": 45 + ((pageY - bheight) / 30) + "%",
  });
  if (pageY < bheight /* && pageX > 350 && pageX < 650*/ ) {
    oef = true;
  }
  if (pageY > bheight && oef == true) {
    oef = false;
    count += 1;
    mySound.stop();
    mySound.play();
  }
    if (count > 30) {
    shakeWhile = true;
    var shakeval = (Math.random() * 20)-10;
    shakeInt = setInterval(function() {
    if (shakeWhile){
    $("#startscreen").css('margin-top', shakeval);
    }
    },15);
  }
   if (count > 45) {
  shakeWhile = false;
  }
  if (count > 50) {
    started = false;
    endGame();
    count = 0;
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
  }
}

function endGame() {
  $("#startscreen").css('z-index', '3');
    for (var i;i<10;i++){
     var div = document.createElement('div'+i);
        div.id = i;
        $("#startscreen").appendChild(div);
        var posx = Math.floor(Math.random() * (bwidth*2 - 0 + 1));
        var posy = Math.floor(Math.random() * (bheight*2 - 0 +1));
        var size = Math.floor(Math.random() * (bheight - 0 +1));
        $("#div"+i).css({
            "left": posx+"px",
            "top": posy+"px",
            "z-index": 5,
            "background-color": "rgb(255,255,220)",
            "border-radius": "50%",
            "width": size+"px",
            "height": size+"px",
            "position": "absolute"
        });
    }
  var endu = 1;
  var endscreen = setInterval(function() {
    $("#startscreen").css('margin-top', endu);
    endu += 4; if (pageY < bheight) {
    oef = true;
  }
  if (pageY > bheight && oef == true) {
    oef = false;
    mySound.stop();
    mySound.play();
  }
  }, 15);
  setTimeout(function() {
    clearInterval(endscreen);
    location.reload();
  }, 3000);
}

$(document).on('keypress', function(e) {
  if (e.which == 13) {
    alert(count + " " + bwidth);
  }
});
