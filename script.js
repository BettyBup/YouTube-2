

// Declaración de variables

var searchInput = document.querySelector(".search-input");

var searchForm = document.querySelector("#search-form");

var menuToggle = document.querySelector(".menu-toggle");

var menuOverlay = document.querySelector(".menu-overlay");

var menuClose = document.querySelector(".menu-close");

var menu = document.querySelector("nav ul");

// Controlador de eventos para mostrar/el ocultar menú

menuToggle.addEventListener("click", function() {

  menuOverlay.classList.toggle("open");

  menu.classList.toggle("open");

});

menuClose.addEventListener("click", function() {

  menuOverlay.classList.remove("open");

  menu.classList.remove("open");

});

// Controlador de eventos para enviar formulario de búsqueda

searchForm.addEventListener("submit", function(event) {

  event.preventDefault();

  var searchTerm = searchInput.value;

  window.location.href = "https://www.youtube.com/results?search_query=" + searchTerm;

});


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  var slideText = slides[slideIndex-1].getElementsByTagName('img')[0].alt;
  document.getElementById('slide-text').innerHTML = "<h2>" + slideText + "</h2>";
  setTimeout(showSlides, 4000); // Cambia la imagen cada 4 segundos
}

function plusSlides(n) {
  slideIndex += n;
  var slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  var slideText = slides[slideIndex-1].getElementsByTagName('img')[0].alt;
  document.getElementById('slide-text').innerHTML = "<h2>" + slideText + "</h2>";
}
function darkMode(){

  let element = document.body;

  element.classList.toggle("dark-mode");

  element.classList.contains("dark-mode") ? localStorage.setItem("darkMode","enabled") : localStorage.setItem("darkMode",null)

}
function scrollToTop() {

  let scrollY = window.scrollY;

  let distance = 200;

  let speed = 20;

  let currentY = scrollY;

  let targetY = 0;

  let body = document.body;

  let requestId;

  function easeOutQuad(t, b, c, d) {

    t /= d;

    return -c * t*(t-2) + b;

  };

  function animate() {

    var currentTime = Date.now();

    var time = Math.min(1, ((currentTime - startTime) / duration));

    var easing = easeOutQuad(time, 0, 1, 1);

    window.scrollTo(0, (easing * (targetY - startY)) + startY);

    if (time < 1) {

      requestId = requestAnimationFrame(animate);

    } else {

      cancelAnimationFrame(requestId);

    }

  }

  if (body.classList.contains('smooth-scroll')) {

    var startY = currentY;

    var startTime = Date.now();

    var duration = Math.abs(targetY - startY) / speed;

    requestId = requestAnimationFrame(animate);

  }

  else {

    window.scrollTo(0, targetY);

  }

}


























   

















