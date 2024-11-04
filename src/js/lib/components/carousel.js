import $ from '../core';

$.prototype.carousel = function() {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
		const slidesField = this[i].querySelector('.carousel-slides');
		const slides = this[i].querySelectorAll('.carousel-item');
		const dots = this[i].querySelectorAll('.carousel-indicators li');

		//add width to .carousel-slides равную количеству слайдов, чтобы этот блок вмещал их всех
		slidesField.style.width = 100 * slides.length + '%';

		// add width to each slide
		slides.forEach(slide => {
			slide.style.width = width;
		});

		let offset = 0;
		let widthNum = +width.replace(/\D/g, '');
		let slideIndex = 0;
		
		//переключение слайда by clicking right arrow (next)
		$(this[i].querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault();
			if (offset == widthNum * (slides.length - 1)) {
				offset = 0;
			} else {
				offset += widthNum;
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			// if (slideIndex == slides.length - 1) {
			// 	slideIndex = 0;
			// } else {
			// 	slideIndex ++;
			// }
			slideIndex = offset/widthNum;
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		//переключение слайда by clicking left arrow (prev)
		$(this[i].querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault();
			if (offset == 0) {
				offset = widthNum * (slides.length - 1);
			} else {
				offset -= widthNum;
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			// if (slideIndex == 0) {
			// 	slideIndex = slides.length - 1;
			// } else {
			// 	slideIndex --;
			// }
			slideIndex = offset/widthNum;
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});
		//indicators
		const sliderId = this[i].getAttribute('id');
		$(`#${sliderId} .carousel-indicators li`).click(e => {
			const slideTo = e.target.getAttribute('data-slide-to');

			// slideIndex = slideTo;
			offset = widthNum * slideTo;
			slidesField.style.transform = `translateX(-${offset}px)`;
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideTo].classList.add('active');
		});
	}
};

$('.carousel').carousel();