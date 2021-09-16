let boxSlide = document.getElementsByClassName("box")
let prevBtn = document.querySelector(".prev"); 
let nextBtn = document.querySelector(".next"); 

 
let imgIndex = 1;
/*current slide*/
slideCarousel(imgIndex);

/*previous and forward arrow buttons*/
function slideBtn(n){
  /*display next slide*/
  slideCarousel(imgIndex += n);
}

/*current slide function*/
function slideCarousel(n) {
  let i;
  let featureSlides = document.getElementsByClassName("slide");

  /*if the slide is more than the total number of slides*/
  if(n > featureSlides.length) {
    imgIndex = 1;
  }

   /*if the slide is less than the total number of slides*/
  if ( n < 1){
    imgIndex = featureSlides.length;
  }
  
  /*for each slide when the total number of slide is greater than 0, set other slides to display: none*/
  
  for (i = 0; i <featureSlides.length; i++){
    featureSlides[i].style.display = "none";
  }
  
  /*the current visible slide is set to block display */ 
  featureSlides[imgIndex - 1].style.display = "block";
}

/*if device screen-size matches, previous & forward arrow buttons are visible and the respective slide is displayed as the arrows are clicked*/

function responsive(screenSize) { 
  if (screenSize.matches) {
    let i; 

    prevBtn.style.display = "block";
    nextBtn.style.display = "block";

    for (i = 1; i < boxSlide.length; i++){ 
      boxSlide[i].style.display = "none";
    }
  }
  else { 
    for (i = 0; i < boxSlide.length; i++){ 
      boxSlide[i].style.display = "block";
    }
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}

var screenSize = window.matchMedia("(max-width: 600px)")
responsive(screenSize) 
screenSize.addListener(responsive)
