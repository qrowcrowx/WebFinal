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

  
  