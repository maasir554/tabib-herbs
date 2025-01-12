
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


const whatsAppForm = document.querySelector('#whatsapp-form');

const submitButton = document.querySelector('#submit-form');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();    
    const formData = new FormData(whatsAppForm);

    const whatsAppMessageRaw = 
                            `Name: ${formData.get('fullname')}\nEmail: ${formData.get('email')}\nPhone_number: ${formData.get('phone')}\nCity: ${formData.get('city')}\nMessage: ${formData.get('message')}`;

    const whatsAppMessage = encodeURIComponent(whatsAppMessageRaw);
    
    window.open(`https://wa.me/919131355378?text=${whatsAppMessage}`, '_blank');
});


const swiper = new Swiper('#carousel-display', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
      delay: 2500, // ms delay between transitions
      disableOnInteraction: false, // Continue autoplay after user interaction
    },

  // If we need pagination
  pagination: {
    el: '#carousel-bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#carousel-right',
    prevEl: '#carousel-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

