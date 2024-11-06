import $ from '../core';

$.prototype.carousel = function (
	autoplay = false,
	time = 0,
	pauseOnHover = false
) {
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

		function showSlide() {
			slidesField.style.transform = `translateX(-${offset}px)`;
			slideIndex = offset/widthNum;
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		}

		if (autoplay) {
			let intervalId = setInterval(() => {
				if (offset == widthNum * (slides.length - 1)) {
					offset = 0;
				} else {
					offset += widthNum;
				}
				showSlide()
			},time);

			if (pauseOnHover) {
				$(this[i]).on('mouseenter', () => {
					clearInterval(intervalId);
				});
				$(this[i]).on('mouseleave', () => {
					intervalId = setInterval(() => {
						if (offset == widthNum * (slides.length - 1)) {
							offset = 0;
						} else {
							offset += widthNum;
						}
						showSlide()
					},time);
				});
			}
		}

		//переключение слайда by clicking right arrow (next)
		$(this[i].querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault();
			if (offset == widthNum * (slides.length - 1)) {
				offset = 0;
			} else {
				offset += widthNum;
			}
			showSlide();
		});

		//переключение слайда by clicking left arrow (prev)
		$(this[i].querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault();
			if (offset == 0) {
				offset = widthNum * (slides.length - 1);
			} else {
				offset -= widthNum;
			}
			showSlide();
		});
		//indicators
		const sliderId = this[i].getAttribute('id');
		$(`#${sliderId} .carousel-indicators li`).click(e => {
			const slideTo = e.target.getAttribute('data-slide-to');

			// slideIndex = slideTo;
			offset = widthNum * slideTo;
			showSlide();
		});
	}
};

$('#carousel_primary').carousel(true, 1000, true);

$.prototype.createCarousel = function(images = [], sizes={}, autoplay, time, pauseOnHover) {
	for (let i = 0; i < this.length; i++) {
		const carousel = this[i];

		carousel.innerHTML = `
			<ol class="carousel-indicators">
			</ol>
			<div class="carousel-inner">
				<div class="carousel-slides">
				</div>
			</div>
			<a href="#" class="carousel-prev" data-slide='prev'>
				<span class="carousel-prev-icon">&lt;</span>
			</a>
			<a href="#" class="carousel-next" data-slide='next'>
				<span class="carousel-next-icon">&gt;</span>
			</a>
		`;

		carousel.style.width = sizes.width;
		carousel.querySelector('.carousel-inner').style.height = sizes.height;
		
		const indicators = carousel.querySelector('.carousel-indicators');
		function createIndicators(j) {
			
			const dot = document.createElement('li');
			dot.setAttribute('data-slide-to', j);
			if (j == 0) {
				dot.classList.add('active');
			}

			indicators.appendChild(dot);
		}

		const slides = carousel.querySelector('.carousel-slides');
		function createSlides(image) {
			const item = document.createElement('div');
			const img = document.createElement('img');

			item.classList.add('carousel-item');
			img.setAttribute('src', image.src);
			img.setAttribute('alt', image.alt);
			item.append(img);

			slides.appendChild(item);
		}

		images.forEach((image, j) => {
			createIndicators(j);
			createSlides(image);
		});

		$(this[i]).carousel(autoplay, time, pauseOnHover);
	}
};

