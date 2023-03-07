let destaque = document.getElementById("destaque");
let closeCursor = document.getElementById("close-cursor");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnail1 = document.getElementById("thumbnail1");
let thumbnail2 = document.getElementById("thumbnail2");
let thumbnail3 = document.getElementById("thumbnail3");
let thumbnail4 = document.getElementById("thumbnail4");

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  destaque.addEventListener ("click", function(){openModal(); currentSlide(1)});
  closeCursor.addEventListener ("click", function(){closeModal()});
  prev.addEventListener ("click", function(){plusSlides(-1)});
  next.addEventListener ("click", function(){plusSlides(1)});
  thumbnail1.addEventListener ("click", function(){currentSlide(1)});
  thumbnail2.addEventListener ("click", function(){currentSlide(2)});
  thumbnail3.addEventListener ("click", function(){currentSlide(3)});
  thumbnail4.addEventListener ("click", function(){currentSlide(4)});