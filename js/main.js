window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("header").style.backgroundColor = "yellow";
    document.getElementById("img").src = "img/tupper-2-.png";
    document.getElementById("header").style.height = "70px";
    document.getElementById("font").style.color = "purple";
    document.getElementById("navOne").style.color = "white";
    document.getElementById("navOne").style.color = "white";
    document.querySelector(".nav").style.color = "white";
  } else {
    document.getElementById("header").style.backgroundColor = "";
    document.getElementById("img").src = "";
    document.getElementById("header").style.height = "";
    document.getElementById("font").style.color = "";
    document.getElementById("font").style.fontSize = "";
    document.getElementById("nav").style.color = "";
  }
}
