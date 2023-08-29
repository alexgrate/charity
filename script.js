
document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('#menu');
    let nav = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('uil-times');
        nav.classList.toggle('nav-toggle');
    };

    window.onscroll = () => {
        menu.classList.remove('uil-times');
        nav.classList.remove('nav-toggle');

        if (window.scrollY > 68) {
            nav.classList.add('header-active');
        } else {
            nav.classList.remove('header-active');
        }
    };
});


// var slideImg = document.getElementById('slideImg');

// var images = new Array(
//     '/IMG/women02.jpg',
//     '/IMG/women05.jpg',
//     '/IMG/women06.jpg',
//     '/IMG/women07.jpg',
//     '/IMG/women08.jpg',
//     '/IMG/women09.jpg'
// );

// var len = images.length;
// let i = 0;

// function slider() {
//     if (i === len) {
//         i = 0;
//     }
//     slideImg.src = images[i];
//     i++;
//     setTimeout(slider, 3000);
// }

// slider(); // Start the slider initially



var swiper = new Swiper(".causes-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

var swiper = new Swiper(".volunteers-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
})


// ----------- TESTIMONIAL -------------


var swiper = new Swiper(".testimonial-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
})

// ----------------- END OF TESTIMONIAL -----------


// ------------------ COUNTER ---------------

const counts = document.querySelectorAll('.count');
const speed = 1000;

const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When the element enters the viewport
            const counter = entry.target;

            function upData() {
                const target = Number(counter.getAttribute('data-target'));
                const count = Number(counter.innerText);
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = Math.floor(inc + count);
                    setTimeout(upData, 1);
                } else {
                    counter.innerText = target;
                }
            }
            
            upData();

            // Unobserve the element after triggering the animation
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counts.forEach((counter) => {
    observer.observe(counter);
});









