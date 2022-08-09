document.addEventListener('DOMContentLoaded', () => {
  const footerBackground = document.querySelector('.footer-pattern-hills');

  if (window.innerWidth >= 766) {
    footerBackground.setAttribute('viewBox', '0 0 1440 197');
  }
  
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 766) {
      footerBackground.setAttribute('viewBox', '0 0 1440 197');
    } else {
      footerBackground.setAttribute('viewBox', '765 0 575 197');
    }
  });
});