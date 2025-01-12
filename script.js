
const hamburger = document.querySelector('#hamburger');
const hamburgerMenu = document.querySelector('#hamburger-menu');

let isMenuOpen = false;

const toggleMenu = () => {

  isMenuOpen = !isMenuOpen;
  hamburgerMenu.classList.toggle('-translate-x-full');
  hamburgerMenu.classList.toggle('-translate-x-0');
  
  hamburger.children[0].classList.toggle('rotate-45');
  hamburger.children[0].classList.toggle('top-1/2');
  hamburger.children[2].classList.toggle('-translate-y-1/2');

  hamburger.children[1].classList.toggle('hidden');

  hamburger.children[2].classList.toggle('-rotate-45');
  hamburger.children[2].classList.toggle('top-1/2');
  hamburger.children[2].classList.toggle('-translate-y-1/2');

}

hamburgerMenu.childNodes.forEach((child) => {
  child.addEventListener('click', () => {
    toggleMenu();
  })
})

hamburger.addEventListener('click', () => {
  toggleMenu();
}
)

window.addEventListener('resize', () => {
    if(isMenuOpen && window.innerWidth > 768) {
      toggleMenu();
    }
})
