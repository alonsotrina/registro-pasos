var slideIndex = 0;

function My_Function(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    
  }    
  
  // efecuto la funcion
  My_Function();
  
  //Set the interval
  var interval = window.setInterval( My_Function, 4000 );



  