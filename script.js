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



























   

















