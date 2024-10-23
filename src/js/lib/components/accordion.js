import $ from '../core';

$.prototype.accordion = function(summaryActive ='accordion-summary_active', contentActive = 'accordion-content_active', paddings = 40) {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).click(() => {
			$(this[i]).toggleClass(summaryActive);
			$(this[i].nextElementSibling).toggleClass(contentActive);

			if (this[i].classList.contains(summaryActive)) {
				this[i].nextElementSibling.style.maxHeight = this[i].scrollHeight + paddings + 'px';
			} else {
				this[i].nextElementSibling.style.maxHeight = '0px';
			}
		});
	}
};
$('.accordion-summary').accordion();