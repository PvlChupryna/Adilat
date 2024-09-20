document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector('.header');

    window.onscroll = () => {
    if (window.scrollY > 150) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    };

    /* SLIDER */
    const swiper = new Swiper('.swiper', {
  
    //   slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.reviews-dots',
        bulletActiveClass: 'reviews-dot-active',
        bulletClass: 'reviews-dot',
        clickable: true
      },
      breakpoints: {
        769:{
            slidesPerView: 2
        }
      },
    
      navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
      },
  
    });
  
});

/* плавный переход */

document.addEventListener('click', event => {
    if (event.target.classList.contains('menu-link')) {
      event.preventDefault();

      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;

      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, 600);
        window.scrollTo(0, run);
        if (timeElapsed < 600) requestAnimationFrame(animation);
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
});

    /* добавление классов для меню при скроле */

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-link");

const activateMenuItem = () => {
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section;
    } else {
      break;
    }
  }

  menuLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${currentSection.id}`);
  });
};

window.addEventListener("scroll", activateMenuItem);

    /* filtr sections */


const filterBtns = document.querySelectorAll(".works-button");
const worksList = document.querySelector(".works-list");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
    filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("is-active");
    });
    btn.classList.add("is-active");

    const filterValue = btn.getAttribute("data-filter");

    for (const item of worksList.children) {
        if (filterValue === "all") {
        item.classList.remove('hide');
        item.classList.add('show');
        } else if (item.classList.contains(filterValue)) {
        item.classList.remove('hide')
        item.classList.add('show')
        } else {
        item.classList.remove('show')
        item.classList.add('hide')
        }
    }
    });
});

    /* BURGER */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click',()=> {
    burger.classList.toggle('is-active');
    menu.classList.toggle('open');
});


  
 
