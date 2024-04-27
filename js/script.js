gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true)
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

ScrollTrigger.create({
  trigger: ".box-c",
  pin: true,
  start: "center center",
//   markers: true
});


// document.querySelector("projectbut").addEventListener("click", e => {
//     smoother.scrollTo(".box-c", true, "center center");
    
//     // gsap.to(smoother, {
//     // 	scrollTop: smoother.offset(".box-c", "center center"),
//     // 	duration: 1
//     // });
//   });
  

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__slideInUp');
            //   entry.target.classList.remove('animate__fadeOutDown');
          } else {
            //   entry.target.classList.remove('animate__slideInUp');
            //   entry.target.classList.add('animate__fadeOutDown');
          }
      });
  });

  const hiddenElements = document.querySelectorAll(".lefttlazy");
  hiddenElements.forEach((el) => {
      observer.observe(el);
  });

  const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__jello');
          } else {
            //   entry.target.classList.remove('animate__jello');
          }
      });
  });

  const hiddenElementsLeft = document.querySelectorAll(".righttlazy");
  hiddenElementsLeft.forEach((el) => {
      observers.observe(el);
  });
});



// ////////


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}



let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;



