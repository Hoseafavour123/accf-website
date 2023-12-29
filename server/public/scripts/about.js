let sIndex = 0;
Slides();

function Slides() {
    let i;
    let slides = document.getElementsByClassName('image');
    let count = document.querySelector('image-count')

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    sIndex++;

    if (sIndex > slides.length) {
        sIndex = 1;
    }
    slides[sIndex - 1].style.display = 'block';
    setTimeout(Slides, 2000);
}