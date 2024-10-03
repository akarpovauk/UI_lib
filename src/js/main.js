import $ from './lib/lib';

$('div').hide().show();
$('.active').toggle().toggle();
$('.active').addClass('hello', 'world');
$('.active').toggleClass('hello');
$('.active').on('click', sayHello);
$('.active').off('click', sayHello);
$('.active').click(sayHello);

function sayHello() {
	console.log('hello');
}
$('button').addAttribute('data-modal');
$('button').addAttributeValue('data-modal', '5');
$('div').addAttribute('data-private', 'true');

$('button').on('click', function() { 
	$(this).hide().show().toggleClass('active');
	console.log($('div').getAttributeValue('data-private'));

	$('[data-modal]').addAttribute('data-name', 'name');
	$('button').addAttributeValue('data-name', 'new');
	$('button').toggleAttributeValue('data-modal', 'toggle');
	$('[data-private]').removeAttributeValue('data-private', 'false');

});