// Language Toggle Functionality
(function() {
  'use strict';

  const root = document.documentElement;
  const savedLang = localStorage.getItem('lang') || 'es';
  
  // Set initial language
  root.setAttribute('data-lang', savedLang);

  // Language toggle button
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      const currentLang = root.getAttribute('data-lang');
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      root.setAttribute('data-lang', nextLang);
      localStorage.setItem('lang', nextLang);
      
      // Update button text
      langBtn.textContent = nextLang === 'es' ? 'ES/EN' : 'EN/ES';
    });
    
    // Set initial button text
    langBtn.textContent = savedLang === 'es' ? 'ES/EN' : 'EN/ES';
  }
})();

