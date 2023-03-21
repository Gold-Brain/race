/*----------------------------------------
	Header
----------------------------------------*/
$('.main-header__mobile-icon').on('click', function () {
	$(this).toggleClass("mobile-close");
	$(this).prev().fadeToggle();
	$(".main-header__navGlobal").fadeToggle(300).toggleClass("is-show");
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.main-header').addClass('is-active');
		$("#page-recruit_index").parent().addClass('is-visible');
		$("#page-profile_index").parent().addClass('is-visible');
	} else {
		$('.main-header').removeClass('is-active');
	}
});

new Swiper('.js-interview', {
	loop: false,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	slidesPerView: 3,
	paginationClickable: true,
	spaceBetween: 20,
	breakpoints: {
		1920: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1360: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		834: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10
		}
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	}
});

new Swiper('.js-cross', {
	loop: false,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	slidesPerView: 2,
	paginationClickable: true,
	spaceBetween: 20,
	breakpoints: {
		1920: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1360: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10
		}
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	}
});

/*----------------------------------------
	Size
----------------------------------------*/

// object fit
$(function () {
	objectFitImages('.u-img-of');
});


// matchHeight
jQuery(function ($) {
	$('.mh').matchHeight();
	$('.top-business__caption').matchHeight();
	$(window).on("load resize", function () {
		$('.mh-child').matchHeight();
		$('.top-business__caption').matchHeight();
	});
});



/*----------------------------------------
	Common Utility
----------------------------------------*/

// Top page ページ読み込み後のクラス付与
$(window).on('load', function () {
	setTimeout(function () {
		$('.top-mainvisual').addClass('is-active');
	}, 1000);
});


// Scroll animation
$(function () {
	$(window).scroll(function () {
		$('.js-scrollin').each(function () {
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200) {
				$(this).addClass('is-visible');
			}
		});

		$('.js-animation-image').each(function () {
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200) {
				$(this).addClass('is-visible');
			}

			if ($(this).hasClass('is-visible')){
				setTimeout(function () {
					var target = $('.is-visible');
					target.addClass('showed');
				}, 1000);
			}
		});
	});
});


// Smooth Scroll
var headerHeight = $('#main-header').outerHeight();

var urlHash = location.hash;
if (urlHash) {
	$('body,html').stop().scrollTop(0);
	setTimeout(function () {
		var target = $(urlHash);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({ scrollTop: position }, 500);
	}, 100);
}

$(function () {
	$('a[href*="#"], area[href*="#"]').not(".noScroll").click(function () {
		var speed = 400,
			href = $(this).prop("href"),
			hrefPageUrl = href.split("#")[0],
			currentUrl = location.href,
			currentUrl = currentUrl.split("#")[0];

		if (hrefPageUrl == currentUrl) {

			href = href.split("#");
			href = href.pop();
			href = "#" + href;

			var target = $(href == "#" || href == "" ? 'html' : href),
				position = target.offset().top - headerHeight;
			$('body,html').stop().animate({ scrollTop: position }, 500);
			return false;
		}

	});
});


//Footer fixed button
$(function () {
	var btn = $('.js-contact');
	$(window).on('load scroll', function () {
		if ($(this).scrollTop() > 200) {
			btn.addClass('is-show');
		} else {
			btn.removeClass('is-show');
		}
	});

	$(window).on('load scroll', function () {
		var height = $(document).height(),
			position = window.innerHeight + $(window).scrollTop(),
			footer = $(".main-footer").height();
		if (height - position < footer) {
			btn.addClass('absolute');
		} else {
			btn.removeClass('absolute');
		}
	});
});


/*----------------------------------------
	Pages
----------------------------------------*/

function load() {
	document.body.classList.add('is-hello');
}
window.onload = load;

// Scroll business
$(function(){
	var h1 = $("#business-01").offset().top - 200;
	var h2 = $("#business-02").offset().top - 200;
	var h3 = $("#business-03").offset().top - 200;
	var h4 = $("#business-04").offset().top - 200;
	var h5 = $("#business-05").offset().top - 200;
	var h6 = $("#business-06").offset().top - 200;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		
		if (scroll > h1) {
			$(".sidebar-business__list .sidebar-business__list-business-01").addClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-business-01").removeClass("active");
		}
		if (scroll > h2) {
			$(".sidebar-business__list .sidebar-business__list-business-02").addClass("active");
			$(".sidebar-business__list .sidebar-business__list-business-01").removeClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-business-02").removeClass("active");
		}
		if (scroll > h3) {
			$(".sidebar-business__list .sidebar-business__list-business-03").addClass("active");
			$(".sidebar-business__list .sidebar-business__list-business-02").removeClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-business-03").removeClass("active");
		}
		if (scroll > h4) {
			$(".sidebar-business__list .sidebar-business__list-business-04").addClass("active");
			$(".sidebar-business__list .sidebar-business__list-business-03").removeClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-business-04").removeClass("active");
		}
		if (scroll > h5) {
			$(".sidebar-business__list .sidebar-business__list-business-05").addClass("active");
			$(".sidebar-business__list .sidebar-business__list-business-04").removeClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-business-05").removeClass("active");
		}
		if (scroll > h6) {
			$(".sidebar-business__list .sidebar-business__list-business-06").addClass("active");
			$(".sidebar-business__list .sidebar-business__list-business-05").removeClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-business-06").removeClass("active");
		}
		
	});
});

// Scroll profile
$(function(){
	var h1 = $("#sidebar-01").offset().top - 200;
	var h2 = $("#sidebar-02").offset().top - 200;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		
		if (scroll > h1) {
			$(".sidebar-business__list .sidebar-business__list-sidebar-01").addClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-sidebar-01").removeClass("active");
		}
		if (scroll > h2) {
			$(".sidebar-business__list .sidebar-business__list-sidebar-02").addClass("active");
			$(".sidebar-business__list .sidebar-business__list-sidebar-01").removeClass("active");
		} else {
			$(".sidebar-business__list .sidebar-business__list-sidebar-02").removeClass("active");
		}
	});
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var mv = $('.mv-page').outerHeight() - 50;
	if (scroll >= mv) {
		$(".sidebar-business").addClass("is-show");
	} else {
		$(".sidebar-business").removeClass("is-show");
	}
});

// MV Text animation
const text = document.querySelector('.js-fade');
const textString = text.textContent;
const splitText = textString.split("");
text.textContent = "";
for (let i=0; i < splitText.length; i++) {
	if (splitText[i] === " ") {
		text.innerHTML += "<span class='space'>" + splitText[i] + "</span>";
	} else {
		text.innerHTML += "<span>" + splitText[i] + "</span>";
	}
}
let char = 0;
let timer = setInterval(onTick, 30);
function onTick() {
	if (char < splitText.length) {
		const span = text.querySelectorAll('span')[char];
		span.classList.add('fade');
		char++;
		if (char === splitText.length) {
			complete();
			return;
		}
	}
}
function complete() {
	clearInterval(timer);
	timer = false;
}


//js page message
setTimeout(() => {
	$('.message-box__ttl').addClass('on');
}, "500")

//fade page philosophy
$(window).on('scroll load assessFeatureHeaders', function(){
    var scrollTop = $(window).scrollTop();
    var appearenceBuffer = 60;
    var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
    $('body').toggleClass('scrolled-down', scrollTop > 0);
    $('.js-scroll-line').filter(function(){
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
        return offset + height >= scrollTop && offset <= windowBottom;
    }).addClass('active');
});