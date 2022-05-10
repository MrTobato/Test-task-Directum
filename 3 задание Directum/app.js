const button = document.querySelector(".reg");
const wrapperForm = document.querySelector("#regCard");
const popup = document.querySelector(".popup");
const close = document.querySelector(".closebtn");
const form = document.querySelector("form");

//Показывает форму регистрации при нажатии кнопки
button.addEventListener("click", () => {
  wrapperForm.classList.add("open");
  popup.classList.add("popup_open");
});

// Скрывает форму
close.addEventListener("click", () => {
  wrapperForm.className = "";
  popup.className = "popup";
  form.style = ""; // После нажатия крестика в тег form передаётся инлайн стиль dispaly: none. Это костыль.
});

//Галлерея
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
