window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
  
    if (scrollPosition >= documentHeight - windowHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });
  