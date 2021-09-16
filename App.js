
        let imgGallery = document.getElementById("slideImg").children
        let boxSlide = document.getElementsByClassName("box")
        let prevBtn = document.querySelector(".prev"); 
        let nextBtn = document.querySelector(".next"); 

        
        let imgIndex = 1;
                slideCarousel(imgIndex);

                function slideBtn(n){
                    slideCarousel(imgIndex += n);
                }

                function slideCarousel(n) {
                    let i;
                    let featureSlides = document.getElementsByClassName("slide");

                    if(n > featureSlides.length) {
                        imgIndex = 1;
                    }

                    if ( n < 1){
                        imgIndex = featureSlides.length;
                    }
                    for (i = 0; i <featureSlides.length; i++){
                        featureSlides[i].style.display = "none";

                    }

                    featureSlides[imgIndex - 1].style.display = "block";
                }
        
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