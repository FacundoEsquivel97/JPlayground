function vermas (){
  var buttonmas = document.getElementById("mas");
  var buttonmenos = document.getElementById("menos");
  var box2 = document.getElementById("box2");
  buttonmas.style.display= "none";
  buttonmenos.style.display= "block";
  box2.style.display= "block";
}

function vermenos (){
  var buttonmas = document.getElementById("mas");
  var buttonmenos = document.getElementById("menos");
  var box2 = document.getElementById("box2");
  buttonmas.style.display= "block";
  buttonmenos.style.display= "none";
  box2.style.display= "none";
}

function ColorRed(){
  var himg = document.getElementById("himg")
 himg.src = "https://i.imgur.com/pV5mPvi.png";
   var ib1 = document.getElementById("ib1")
 ib1.src = "https://i.imgur.com/wX9WmNT.jpg";
   var buttons = document.getElementsByClassName("hb")
  for (var e of buttons) {
  e.style.backgroundColor = "red";
}
  var htitle = document.getElementById("HTitleBox")
 htitle.style.color = "red";
  var h = document.getElementById("h")
 h.style.borderBottomColor = "red";
}
function ColorBlue(){
    var himg = document.getElementById("himg")
 himg.src = "https://i.imgur.com/gn48rNX.png";
  var ib1 = document.getElementById("ib1")
 ib1.src = "https://i.imgur.com/husI1Ri.jpg";
   var buttons = document.getElementsByClassName("hb")
  for (var e of buttons) {
  e.style.backgroundColor = "blue";
}
  var elm = document.getElementById("HTitleBox");
 elm.style.color = "blue";
    var h = document.getElementById("h")
 h.style.borderBottomColor = "blue"
}
function ColorPurple(){
  var himg = document.getElementById("himg")
 himg.src = "https://i.imgur.com/hbUQLAz.png";
  var ib1 = document.getElementById("ib1")
 ib1.src = "https://i.imgur.com/i31FksM.jpg";
   var buttons = document.getElementsByClassName("hb")
  for (var e of buttons) {
  e.style.backgroundColor = "purple";
}
  var elm = document.getElementById("HTitleBox");
 elm.style.color = "purple";
    var h = document.getElementById("h")
 h.style.borderBottomColor = "purple"
}