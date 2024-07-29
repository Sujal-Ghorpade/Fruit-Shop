

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
    navbar.classList.remove('active');
    shoppingCart.classList.toggle('active');
}

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
}

document.querySelector("#login-btn").onclick = () => {
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
}

// slider for products

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// slide for review
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});