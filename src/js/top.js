//Js for slider MV
let swipeOption = {
	loop: true,
	effect: 'fade',
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	speed: 2000,
}
new Swiper('.js-slider-mv', swipeOption);

//Js for Business
const swiper_business = new Swiper('.js-top-business', {
	loop: false,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	paginationClickable: true,
	spaceBetween: 20,
	breakpoints: {
		1920: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1028: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 12
		}
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	}
});

if($(window).width() <= 834){
	swiper_business.slideNext();
}