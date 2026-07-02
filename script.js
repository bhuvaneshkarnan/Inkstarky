document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Portfolio Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Basic visual feedback for MVP (simulating filter by fading out and in)
      const grid = document.querySelector('.portfolio-grid');
      grid.style.opacity = '0';
      
      setTimeout(() => {
        let visibleIndex = 1;
        portfolioItems.forEach(item => {
          // Remove layout classes item-1 to item-6
          for (let i = 1; i <= 6; i++) {
            item.classList.remove(`item-${i}`);
          }
          
          const category = item.getAttribute('data-category');
          
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            // Re-assign layout class to keep the asymmetrical grid working
            item.classList.add(`item-${visibleIndex}`);
            visibleIndex = visibleIndex > 6 ? 1 : visibleIndex + 1;
          } else {
            item.style.display = 'none';
          }
        });
        grid.style.opacity = '1';
      }, 300);
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all others
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
