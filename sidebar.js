/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "30px";
  document.getElementById("mySidebar").style.marginLeft = "540px";
  document.getElementById("main").style.marginLeft = "0px";

}

function openNavSize() {
  document.getElementById("mySidebar1").style.width = "30px";
  document.getElementById("mySidebar1").style.marginLeft = "508px";
  document.getElementById("main").style.marginLeft = "0px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNavSize() {
  document.getElementById("mySidebar1").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}