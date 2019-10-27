let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".mobile-nav");
  let getSidebarUl = document.querySelector(".mobile-nav ul");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebarUl.style.visibility = "visible";

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.visibility = "hidden";
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "100%";

    toggleNavStatus = false;
  }
};
