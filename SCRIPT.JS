  // Auto-hide navbar on link click (for mobile view)
  document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');
      const navbarToggle = document.querySelector('.navbar-toggler');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggle.click();
      }
    });
  });


    // Function to adjust scroll position dynamically
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbar = document.querySelector('.navbar'); // Select your navbar
        const offset = navbar ? navbar.offsetHeight : 0;
        const position = target.offsetTop - offset;
  
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      });
    });

    //  JavaScript for Dynamic PDF Loading 

    const pdfLinks = document.querySelectorAll('.open-pdf');
    const pdfViewer = document.getElementById('pdfViewer');
  
    pdfLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const pdfSrc = link.getAttribute('data-pdf-src');
        pdfViewer.src = pdfSrc;
        const pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
        pdfModal.show();
      });
    });


    //  Custom JS to handle modal image
    
        function showImage(imageSrc) {
            document.getElementById("modalImage").src = imageSrc;
        }
    

        
    //  toggle view 

   function collapseNavbar() {
       var myCollapse = document.getElementById('navbarNav');
       var bsCollapse = new bootstrap.Collapse(myCollapse, {
           toggle: true
       });
   }
   