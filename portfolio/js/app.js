document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor elements with href attributes starting with '#'
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    // Add click event listeners to the anchor elements
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of anchor links
  
        // Get the target element using the href attribute of the clicked link
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        // Scroll to the target element using smooth behavior
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });