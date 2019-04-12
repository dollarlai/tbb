
$(function(){

	// $.preload(
		// './images/logo_tbb_w.png',
		// './images/bg.jpg',
		// './images/hands.png',
		// './images/hands_m.png',
		// './images/service1.jpg',
		// './images/service2.jpg',
		// './images/service3.jpg'
	// );

	//loading
	$(window).on("load", function(){
		// $('.loading').addClass('hide');
		// $('.wrapper').fadeIn(800);
		$("nav ul").load("nav.html");
	});


	if ($(window).width() < 768) {
			$('nav a').click(function(){
				$("nav").slideUp();
				$('.openNav').removeClass('open');
			});
	} else {
		$("nav").show();
	}

	$('.openNav').click(function(){
		$(this).toggleClass('open');
		$('nav').slideToggle();
	});

		//nav slide
		$('nav a, .link a').click(function(){
			$('html,body').animate({
				scrollTop:$( $.attr(this, 'href')).offset().top - 50}, 800);
			return false;
		});

	// goktop
	$(window).scroll(function (){
		if ($(this).scrollTop() > 100) {
			$('#gotop').addClass('show');
		} else {
			$('#gotop').removeClass('show');
		}

	});
	$('#gotop').click(function(){
		$('body,html').animate({ scrollTop:0 }, 800);
		return false;
	});

	$('ul.filter li').click(function() {
		var $this = $(this),
		_clickTab = $this.find('a').attr('href');
		
		$this.addClass('cur').siblings('.cur').removeClass('cur');
		$(_clickTab).stop(false, true).fadeIn().siblings('div').hide();
		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	//slide
    $('.faqList .item').click(function(){
			$(this).toggleClass('show');
			$(this).children('.ans').slideToggle();
    });

});


_more = function () {
	$(".btn-more").on('click', function (e) {
		e.preventDefault();
		$(this).parents(".item-text").toggleClass("open")
	})
}


_SwiperNoneRand = function () {
	var swiper = new Swiper('.swiper-container', {
			autoHeight: true, //enable auto height
			paginationClickable: true,
			// effect: 'fade',
			speed: 0,
			navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
			},
			pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function (index, className) {
							// var names = [];
							// $(".swiper-wrapper .swiper-slide").each(function (i) {
							//     names.push($(this).attr("data-name"));
							// });
							return '<div class="' + className + '">'+
													'<div class=step>'+
															'<span class="txt">STEP</span>'+
															'<span class="num">' + (index + 1) + '</span>'+
													'</div>'+
													// '<div class="text">' + names[index] + '</div>'+
											'</div>';
					},
			},
	});
};