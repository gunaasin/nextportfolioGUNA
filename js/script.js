document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__slideInUp');
              entry.target.classList.remove('animate__fadeOutDown');
          } else {
              entry.target.classList.remove('animate__slideInUp');
              entry.target.classList.add('animate__fadeOutDown');
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
