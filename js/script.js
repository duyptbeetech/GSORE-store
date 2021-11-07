
$('#categories').on('click', function (event) {
    event.preventDefault();
    $('#categories + ul').toggleClass('active');
})
$('.mobile a').on('click', function (event) {
    event.preventDefault();
    // setTimeout(()=>{
    $(this).toggleClass('open');
    $(this).siblings("ul").toggleClass('active');
    content = $(this).siblings("ul")[0];
    if ($(this).siblings("ul").css('max-height') != '0px') {
        $(this).siblings("ul").css('max-height', '0px');
    } else {
        he = parseInt($(this).closest("ul.active").css('max-height'));
        $(this).closest("ul.active").css('max-height', he + content.scrollHeight + "px")
        $(this).siblings("ul").css('max-height', content.scrollHeight + "px");
    }
    // }, 205);
    $(this).closest('li').siblings('li').find('a.open').removeClass('open');
    $(this).closest('li').siblings('li').find('ul.active').css('max-height', '0px');
    $(this).closest('li').siblings('li').find('ul.active').removeClass('active');
})
$('#close-btn-menu').on('click', (event) => {
    event.preventDefault();
    $('.mobile-head .nav-tab').toggleClass('active')
    $('.mobile-head').fadeOut('slow');
})
$('#mobile-btn').on('click', (event) => {
    event.preventDefault();
    $('.mobile-head').fadeIn('fast');
    $('.mobile-head .nav-tab').toggleClass('active')
})

var swiper = new Swiper(".banner-swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper = new Swiper("#products .content .swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper("#testimoni .swiper", {
    // slidesPerView: 4,
    // spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper("#news .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper("#brand .swiper", {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 3,
        },
        450: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

