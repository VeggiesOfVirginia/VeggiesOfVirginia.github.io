var slideIndex = 1;
var slideTime = setTimeout(cycleImages, 10000, 1);

function cycleImages(n) {
  showImage(slideIndex += n);
}

function showImage(n) {
  var images = document.getElementsByClassName("summarySlides");
  var slideshowWidth = window.getComputedStyle(document.getElementById("slideshow")).getPropertyValue("width");
  var slideshowHeight = window.getComputedStyle(document.getElementById("slideshow")).getPropertyValue("height");
  if (n > images.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.opacity = "0.0";
  }
  images[slideIndex - 1].style.opacity = "1.0";
  if (images[slideIndex - 1].naturalWidth * (parseFloat(slideshowHeight) / images[slideIndex - 1].naturalHeight) >= parseFloat(slideshowWidth)) {
    images[slideIndex - 1].style.width = slideshowWidth;
    images[slideIndex - 1].style.height = "auto";
  } else {
    images[slideIndex - 1].style.height = slideshowHeight;
    images[slideIndex - 1].style.width = "auto";
  }
  clearTimeout(slideTime);
  slideTime = setTimeout(cycleImages, 5000, 1);
}
