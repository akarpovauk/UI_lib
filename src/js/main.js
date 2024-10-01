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

$('button').on('click', function() { 
	$(this).hide().show().toggleClass('active');
});