document.addEventListener('DOMContentLoaded', function() {
    const glow = document.querySelector('.glow');
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    
    let mouseMoving = false;
    let timeoutId;
    
    // Retrieve the cursor position from localStorage
    const storedX = localStorage.getItem('cursorX');
    const storedY = localStorage.getItem('cursorY');
    
    if (storedX && storedY) {
      glow.style.transform = `translate(${storedX}px, ${storedY}px)`;
    }
    
    document.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX - glow.offsetWidth / 2;
      const mouseY = e.clientY - glow.offsetHeight / 2;
      
      // Store the current cursor position in localStorage
      localStorage.setItem('cursorX', mouseX.toString());
      localStorage.setItem('cursorY', mouseY.toString());
    
      glow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    
      // Clear the previous timeout
      clearTimeout(timeoutId);
    
      // Start the glow effect only when the mouse starts moving
      if (!mouseMoving) {
        glow.classList.add('glow-active');
        mouseMoving = true;
      }
    
      // Set a timeout to fade out the glow when the mouse stops moving
      timeoutId = setTimeout(function() {
        glow.classList.remove('glow-active');
        mouseMoving = false;
      }, 500);
    });
  });


// image slider
var images = document.querySelectorAll('.slider img');
var currentImage = 0;
var numVisibleImages = 5;
var slideInterval = setInterval(nextImage, 3000); // Change slide every 2.5 seconds
var prevArrow = document.querySelector('.arrow.prev');
var nextArrow = document.querySelector('.arrow.next');
var thumbnails = document.querySelectorAll('.thumbnail');
var prevButtonClicked = false;

prevArrow.addEventListener('click', function() {
  previousImage();
  prevButtonClicked = true;
  resetSlideInterval();
});

nextArrow.addEventListener('click', function() {
  nextImage();
  prevButtonClicked = false;
  resetSlideInterval();
});

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(function() {
    if (!prevButtonClicked) {
      nextImage();
    }
    prevButtonClicked = false;
  }, 3000); // Reset slide interval to 2.5 seconds
}

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', function(e) {
    var index = Array.from(thumbnails).indexOf(e.target.parentElement);
    setCurrentImage(index);
  });
}

function previousImage() {
  setCurrentImage((currentImage - 1 + images.length) % images.length);
}

function nextImage() {
  setCurrentImage((currentImage + 1) % images.length);
}

function setCurrentImage(index) {
  images[currentImage].classList.remove('active');
  thumbnails[currentImage].classList.remove('active');
  currentImage = index;
  images[currentImage].classList.add('active');
  thumbnails[currentImage].classList.add('active');
  updateProgressBar();
}

function updateProgressBar() {
  var progress = (currentImage / (images.length - 1)) * 100;
  progressBar.style.width = progress + '%';
}


  
  