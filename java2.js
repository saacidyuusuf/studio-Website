document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    offset: 200,
    delay: 200,
    easing: 'ease-in'
  });
});

window.addEventListener("DOMContentLoaded", () => {
  mostaskedQ();
  dateDisplay();
  aboutTab()
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

const sr = scrollReveal({
  distance: "60",
  duration: 2500,
  reset: true,
});
//question hoos

function mostaskedQ() {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
      //its the same article know we refrencing as item
      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });

      question.classList.toggle("show-text");
    });
  });
}

function aboutTab() {
  const about = document.querySelector(".about");
  const btns = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".content");

  about.addEventListener("click", function (e) {
      const id = e.target.dataset.id
      if (id) {
          btns.forEach(function (btn) {
              btn.classList.remove("active")
              e.target.classList.add("active")
          })
          contents.forEach(function (article) {
              article.classList.remove("active")
          })
          const element = document.getElementById(id)
          element.classList.add("active")
      }
  })
}

function dateDisplay() {
  const date = document.getElementById("date");

  date.innerHTML = new Date().getFullYear();
}
