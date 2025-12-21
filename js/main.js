(function() {
  "use strict";

const textElement = document.getElementById("typing");

const words = ["Front Developer","React Developer"];
let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 80;
const delayAfterTyping = 1200;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // كتابة
    textElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, delayAfterTyping);
    }
  } else {
    // مسح
    textElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

// / skills --------------->>>>

const progressData = [
  {id: 'progress1', value: 0.95, },
  {id: 'progress2', value: 0.9, },
  {id: 'progress3', value: 0.85, },
  {id: 'progress4', value: 0.9, },
  {id: 'progress5', value: 0.85, },
  {id: 'progress6', value: 0.8, },
];

progressData.forEach(item => {
  const bar = new ProgressBar.Line('#' + item.id, {
    strokeWidth: 4,
    color: '#1af9e7',
    trailColor: '#fcfcfc',
    duration: 1500
  });
  bar.animate(item.value);
});


const header_tog = document.getElementById("header-tog")
const header = document.getElementById("header")
const main = document.getElementById("main")
// console.log(header.classList);

function updateHeaderTog() {
    const header_tog = document.getElementById("header-tog");
    if (!header_tog) return;

    window.innerWidth < 1200 
        ? header_tog.classList.add("visible") 
        : header_tog.classList.remove("visible");

}
function closeHeader(header, header_tog) {
    header.classList.add("-translate-x-full");
    header_tog.classList.remove("fa-xmark");
    header_tog.classList.add("fa-list-ul");
}

function showBar() {
    const header_tog = document.getElementById("header-tog");
    const header = document.getElementById("header");
    if (!header_tog || !header) return;

    updateHeaderTog();

    window.addEventListener("resize", updateHeaderTog);

    header_tog.addEventListener("click", () => {
        header.classList.toggle("-translate-x-full");
        header_tog.classList.toggle("fa-list-ul");
        header_tog.classList.toggle("fa-xmark");
    
        
    
    });
    main.addEventListener("click", () => {
   if (!header.classList.contains("-translate-x-full")) {

closeHeader(header, header_tog)}
})



    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeHeader(header, header_tog);
        }
    });
}

window.addEventListener('load', showBar);







//////////////// scroll-btn /////////////////////

const scrollBtn = document.querySelector(".scroll-tog")

function handleScroll(){
    if (scrollBtn) {
        window.scrollY>100?scrollBtn.classList.add("visible"):scrollBtn.classList.remove("visible")
        
    }
    scrollBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        
    })

}
 
 window.addEventListener('load', handleScroll);
  document.addEventListener('scroll', handleScroll);



// ///////// isotope ////////

  
  const grid = document.querySelector('.grid-container');
 imagesLoaded(grid,()=>{
 const iso = new Isotope(grid, {
    itemSelector: '.item',
    layoutMode: 'masonry',
    transitionDuration: '0.4s'
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      // active button style
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-black', 'text-white');
        b.classList.add('bg-gray-200');
      });

      btn.classList.add('bg-black', 'text-white');
      btn.classList.remove('bg-gray-200');
    });
  });

 })
 
// form 

let btnForm = document.getElementById("btn-form");
let msgForm = document.getElementById("massege-form");
let action_click = document.querySelectorAll(".action-click")

btnForm.addEventListener("click",()=>{
  msgForm.innerHTML =`<p class="text-blue-500"  >Messages cannot be sent from this page.
Please contact us via <span class="font-bold">Email</span>or<span class="font-bold">Phone</span> , as this page is intended for front-end demonstration purposes only.</p>`
  action_click.forEach(text =>{
    text.classList.add("border-b-4")
    setTimeout(()=>{
    text.classList.remove("border-b-4")
       msgForm.innerHTML =``
    },7000)
  })

})






  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // يمنع السلوك الافتراضي

    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);

    if (!section) return;

    const scrollMarginTop =
      parseInt(getComputedStyle(section).scrollMarginTop) || 0;

    window.scrollTo({
      top: section.offsetTop - scrollMarginTop,
      behavior: 'smooth'
    });

  
    history.pushState(null, '', targetId);
  });
});


  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.text-white').forEach(link => link.classList.remove('text-white'));
        navmenulink.classList.add('text-white');
      } else {
        navmenulink.classList.remove('text-white');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();





  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }


  // scroll reveal --------------------->>

  const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2000,
    // reset:true
  })

  sr.reveal('.hero-text')
  sr.reveal('.about')
  sr.reveal('.about-img')
  sr.reveal('.about-text',{delay:300,origin:"bottom"})
  sr.reveal('.about-text-first-clild',{delay:600,origin:"bottom"})
  sr.reveal('.about-text-last-clild',{delay:600})
  sr.reveal('.FAbout')
  sr.reveal('.skills')
  sr.reveal('.resume')
  sr.reveal('.resume-list-1',{delay:300,origin:"bottom"})
  sr.reveal('.resume-list-2',{delay:300})
  sr.reveal(".portfolio")
  sr.reveal('.item',{delay:300,origin:"bottom"})
  sr.reveal(".services")
  sr.reveal(".contact")
   sr.reveal('.contact-map',{delay:300,origin:"bottom"})
  sr.reveal('.contact-form',{delay:300})

