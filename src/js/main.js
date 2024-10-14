import $ from './lib/lib';

// $('div').hide().show();
// $('.active').toggle().toggle();
// $('.active').addClass('hello', 'world');
// $('.active').toggleClass('hello');
// $('.active').on('click', sayHello);
// $('.active').off('click', sayHello);
// $('.active').click(sayHello);

// function sayHello() {
// 	console.log('hello');
// }
// $('button').addAttribute('data-modal');
// $('button').addAttributeValue('data-modal', '5');
// $('div').addAttribute('data-private', 'true');

// $('button').on('click', function() { 
// 	// $(this).hide().show().toggleClass('active');
// 	// console.log($('div').getAttributeValue('data-private'));

// 	// $('[data-modal]').addAttribute('data-name', 'name');
// 	// $('button').addAttributeValue('data-name', 'new');
// 	// $('button').toggleAttributeValue('data-modal', 'toggle');
// 	// $('[data-private]').removeAttributeValue('data-private', 'false');
// 	$('div').eq(1).toggleClass('active');
// });

// $('button').html('YES');

// $('div').click(function() {
// 	console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));
// ($('.more').closest('.findme').addClass('hello'));
// console.log($('.more').eq(0).siblings());
// console.log($('.findme').siblings());

// $('.list').fadeOut(1800);
// $('button').fadeOut(1800);

// $('button').fadeOut(2800);
// setTimeout(()=> {$('button').fadeIn(1800)}, 4000);

//buttons hide show text

$('#first').on('click', ()=> {
	$('section div').eq(0).fadeToggle(800);
}) 

$('[data-count="second"]').on('click', ()=> {
	$('section div').eq(1).fadeToggle(800);
}) 

$('section.fadeToggle button').eq(2).on('click', ()=> {
	$('section div.w-500px').fadeToggle(800);
}) 

// console.log($('.dropdown-toggle').getAttributeValue('id'));

//dropdown menu dynamicly generated:
/* $('.wrapper-dropdown').html(
	`
	<div class="dropdown">
		<button class="btn btn_primary dropdown-toggle" id='dropdownMenuButton'>Dropdown button</button>
		<ul class="dropdown-list" data-toggle-id="dropdownMenuButton">
			<li class="dropdown-item"><a href="#">Action #1</a></li>
			<li class="dropdown-item"><a href="#">Action #2</a></li>
			<li class="dropdown-item"><a href="#">Action #3</a></li>
		</ul>
	</div>
	<div class="dropdown">
		<button class="btn btn_primary dropdown-toggle" id='dropdownMenu2Button'>Dropdown button</button>
		<ul class="dropdown-list" data-toggle-id="dropdownMenu2Button">
			<li class="dropdown-item"><a href="#">Action #1</a></li>
			<li class="dropdown-item"><a href="#">Action #2</a></li>
			<li class="dropdown-item"><a href="#">Action #3</a></li>
		</ul>
	</div>
	`
)
$('.dropdown-toggle').dropdown(); */

