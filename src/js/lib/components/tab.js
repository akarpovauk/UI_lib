import $ from '../core';

$.prototype.tab = function() {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).on('click', () => {
			$(this[i])
				.addClass('tab-item_active')
				.siblings()
				.removeClass('tab-item_active')
				.closest('.tab').find('.tab-pane')
				.removeClass('tab-pane_active')
				.eq($(this[i]).index())
				.addClass('tab-pane_active');
		});
	}
};

$('[data-tablist] .tab-item').tab();