//Öffnen der SidebarColor rechts neben dem Canvas
function openNavColor() {
  document.getElementById("sidebarColor").style.width = "30px";
  document.getElementById("sidebarColor").style.marginLeft = "540px";
  document.getElementById("main").style.marginLeft = "0px";
}

//Öffnen der SidebarSize unterhalb des Anzeige-Buttons
function openNavSize() {
  document.getElementById("sidebarSize").style.width = "30px";
  document.getElementById("sidebarSize").style.marginLeft = "508px";
  document.getElementById("main").style.marginLeft = "0px";
}

//Schließen der SidebarColor
function closeNavColor() {
  document.getElementById("sidebarColor").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//Schließen der SidebarSize
function closeNavSize() {
  document.getElementById("sidebarSize").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}