/*==============   Drop Down Menu ==============*/
const menuBtn = document.querySelector('.menu-btn');
const dropDown = document.querySelector('.drop-down-menu');

menuBtn.onclick = () => {
     dropDown.classList.toggle('show-menu');
}

/*  =============  Slider =============== */
let slideIndex = 1;
showSlides(slideIndex);

//Next/prev
function plusSlides(n) {
     showSlides(slideIndex += n);
}

function showSlides(n) {
     let i;
     let excoSlides = document.getElementsByClassName('exco');
     let excosCount = document.querySelector('.excos-count');

     if (n > excoSlides.length) {
          slideIndex = 1;
     }
     if (n < 1) {
          slideIndex = excoSlides.length;
     }

     for (i = 0; i < excoSlides.length; i++) {
          excoSlides[i].style.display = 'none';
     }

     excoSlides[slideIndex - 1].style.display = 'block';
     excosCount.innerHTML = `${slideIndex} / 13`;
     
}