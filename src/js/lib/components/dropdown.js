import $ from '../core';
/** 
 * @description click the element triggers show/hide submenu
 */

$.prototype.dropdown = function() {
	for (let i = 0; i < this.length; i++) {
		const id = $(this[i]).getAttributeValue('id');
		$(this[i]).click(()=> {
			$(`[data-toggle-id="${id}"]`).fadeToggle(300);
		});
	}
};


$('.dropdown-toggle').dropdown(); //initialisation of dropdown method for static html page