;(function (win, doc, jQuery, undefined) {

	'use strict';

	netive.common = {
		init: function(){
			netive.common.pageMinHeight();				
		},
		pageMinHeight: function(){
			const el_html = document.querySelector('html');
			const elMain = document.querySelector('.base-main');
			
			window.addEventListener('resize', act);
			function act(){
				const wh = window.innerHeight;

				elMain.style.minHeight = wh + 'px';
				
				if (wh < elMain.offsetHeight) {
					el_html.classList.add('is-scroll');
				} else {
					el_html.classList.remove('is-scroll');
				}
			}
			act();
		},
		slideMinHeight: function(){
			const elSlide = document.querySelector('.swiper-slide');
			const elHead = document.querySelector('.base-header');

			
			function slideChange(){
				const wh = window.innerHeight;
				const hh = elHead.offsetHeight;
				
				elSlide.style.minHeight = (wh - hh) + 'px';
			}
			elSlide.addEventListener('touchmove', slideChange);
			console.log('in');
			
			slideChange();

		},
		gnb: function () {
			const gbnlink = $('.base-header .btn-menu'),
				  gnb = $('.base-header'),
				  content = $('.base-body');
			
			$(gbnlink).click(function () {
				gnb.toggleClass('open');
				
				if (gnb.hasClass('open')) {
					content.addClass('open');
				} else {
					content.removeClass('open');
				}
			})

			$(content).click(function () {
				gnb.removeClass('open');
				content.removeClass('open');
			})
			
			
		}
	};

	
})(window, document, $);