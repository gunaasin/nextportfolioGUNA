document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__slideInUp');
          } else {
              // entry.target.classList.remove('animate__slideInUp');
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
              // entry.target.classList.remove('animate__slideInUp');
          }
      });
  });

  const hiddenElementsLeft = document.querySelectorAll(".righttlazy");
  hiddenElementsLeft.forEach((el) => {
      observers.observe(el);
  });
});
