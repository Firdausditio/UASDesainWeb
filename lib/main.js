const slideshowImages = document.querySelectorAll(".slide .slideshow-img");
console.log(slideshowImages)

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage(){
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.display = "block";
}

$(document).ready(function(){
    $(".header").height($(window).height());
})

const inputs = document.querySelectorAll('input, textarea');

for(let inputs of inputs){
    inputs.addEventListener('invalid', (event) => {
        input.classList.add('error');
    }, false);

    input.addEventListener('blur', event =>{
        input.checkValidity();
    })
}

