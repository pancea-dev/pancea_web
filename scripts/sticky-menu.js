document.addEventListener('scroll', stickMenu);

var breakpoint = 150

function stickMenu() {
   var scrollDown = window.scrollY;
   var menuWrapper = document.querySelector(".menu-wrapper");
   var menu = document.querySelector(".menu");
   var wordmark = document.querySelector(".menu img");
   var button = document.querySelector(".js-button");

   if (scrollDown >= breakpoint) {
      menuWrapper.classList.add('js-menu-wrapper');
      menu.classList.add('js-menu');
      wordmark.style.display = 'block';
      button.style.color = 'var(--black)';
      button.style.borderColor = 'var(--black)';
   }

   else {
      menuWrapper.classList.remove('js-menu-wrapper');
      menu.classList.remove('js-menu');
      wordmark.classList.remove('js-wordmark');
      wordmark.style.display = 'none';
      button.style.color = 'var(--white)';
      button.style.borderColor = 'var(--white)';
   }
}