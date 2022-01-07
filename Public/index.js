// menu popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  // sticky scroll function affecting the nav bar
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  // humberger menu
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// closing menu
const navLink = document.querySelectorAll(".link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


 