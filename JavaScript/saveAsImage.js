//TODO
//- Ausweitung der Funktion um Image-Datei an CM-API zu senden

//Bereitstellung des Canvas als Image-Datei
function save() {
  document.getElementById("canvasimg").style.border = "2px solid";
  var dataURL = canvas.toDataURL();
  document.getElementById("canvasimg").src = dataURL;
  document.getElementById("canvasimg").style.display = "inline";
}