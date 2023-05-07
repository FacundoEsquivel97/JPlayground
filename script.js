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
 himg.src = "img/red/01.png";
   var ib1 = document.getElementById("ib1")
 ib1.src = "img/red/02.jpg";
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
 himg.src = "img/blue/01.png";
  var ib1 = document.getElementById("ib1")
 ib1.src = "img/blue/02.jpg";
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
 himg.src = "img/violet/01.png";
  var ib1 = document.getElementById("ib1")
 ib1.src = "img/violet/02.jpg";
   var buttons = document.getElementsByClassName("hb")
  for (var e of buttons) {
  e.style.backgroundColor = "purple";
}
  var elm = document.getElementById("HTitleBox");
 elm.style.color = "purple";
    var h = document.getElementById("h")
 h.style.borderBottomColor = "purple"
}