document.addEventListener('DOMContentLoaded', () => {
  let scale = 1;
  let ticking = false;
  const scrollbar = document.querySelector('.scrollbar');
  const heroPage = document.querySelector('.heroPage');
  const aboutPage = document.querySelector('.aboutPage');
  const xpPage = document.querySelector('.xpPage');
  const contactPage = document.querySelector('.contactPage');

  function updateContent() {
    heroPage.style.transform = `scale(${scale})`;
    aboutPage.style.transform = `scale(${scale})`;
    xpPage.style.transform = `scale(${scale})`;
    contactPage.style.transform = `scale(${scale})`;

  if (scale >= 1 && scale < 2) {
    heroPage.style.opacity = 1;            heroPage.style.visibility = 'visible';  
    aboutPage.style.opacity = 0;           aboutPage.style.visibility = 'hidden'; 
    xpPage.style.opacity = 0;              xpPage.style.visibility = 'hidden'; 
    contactPage.style.opacity = 0;         contactPage.style.visibility = 'hidden'; 

    scrollbar.style.backgroundColor = '#ea36fd';
    
  } else if (scale >= 2 && scale < 3) {
    heroPage.style.opacity = 0;            heroPage.style.visibility = 'hidden';
    aboutPage.style.opacity = 1;           aboutPage.style.visibility = 'visible';
    xpPage.style.opacity = 0;              xpPage.style.visibility = 'hidden';
    contactPage.style.opacity = 0;         contactPage.style.visibility = 'hidden';

    scrollbar.style.backgroundColor = '#97e7a9';
  } else if (scale >= 3 && scale < 4) {
    heroPage.style.opacity = 0;           heroPage.style.visibility = 'hidden';
    aboutPage.style.opacity = 0;          aboutPage.style.visibility = 'hidden';
    xpPage.style.opacity = 1;             xpPage.style.visibility = 'visible';
    contactPage.style.opacity = 0;        contactPage.style.visibility = 'hidden';

    scrollbar.style.backgroundColor = '#2800f7';
  }
  else if (scale >= 4 && scale < 5){
    heroPage.style.opacity = 0;            heroPage.style.visibility = 'hidden';
    aboutPage.style.opacity = 0;           aboutPage.style.visibility = 'hidden';
    xpPage.style.opacity = 0;              xpPage.style.visibility = 'hidden';
    contactPage.style.opacity = 1;         contactPage.style.visibility = 'visible';

    scrollbar.style.backgroundColor = '#f099a5';
  }

  const scrollbarWidth = `${(scale - 1) / 4 * 100}%`; 
    scrollbar.style.width = scrollbarWidth;
  ticking = false;

}



   document.querySelectorAll('.anchors a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        scale = parseFloat(this.getAttribute('data-scale'));
        if (!ticking) {
          requestAnimationFrame(updateContent);
          ticking = true;
        }
      }
    )
  });


  window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      scale += 0.1;
    } else {
      scale -= 0.1; 
    }

 
    scale = Math.max(1, Math.min(scale, 5));

    if (!ticking) {
      requestAnimationFrame(updateContent);
      ticking = true;
    }
     
  });
});

