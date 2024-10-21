import $ from '../core';

/** modal created by Dialog element
 * @description open model window by clicking on trigger;
 * trigger must have attributes data-toggle=“modal” and data-target;
 * data-target should be the same as modal id 
 */
$.prototype.showModal = function() {
	return this[0].showModal();
};
$.prototype.closeModal = function() {
	return this[0].close();
}

// $.prototype.openModal = function() {
// 	for (let i = 0; i < this.length; i++) {
// 		// target - это id модального окна, которое должно быть открыто
// 		const target = this[i].getAttribute('data-target');
// 		$(this[i]).click((e) => {
// 			e.preventDefault();
// 			$(target).showModal();
// 		});
// 	};
// };

// $.prototype.closeModal = function() {
// 	for (let i = 0; i < this.length; i++) {
// 		$(this[i]).find('[data-close]').click(() => {
// 			this[i].close();
// 		});
// 		//close modal by click outside the window
// 		$(this[i]).click(e => {
// 			if (e.target === e.currentTarget) {
// 				this[i].close();
// 			}
// 		});
// 	};
// };

// $('[data-toggle="modal-dialog"]').openModal();
// $('.modal').closeModal();

/** open modal window created with DIALOG element
 * @description open model window by clicking on trigger;
 * trigger must have attributes data-toggle=“modal” and data-target;
 * data-target should be the same as modal id 
 */
$.prototype.modalDialog = function(created) {
	for (let i = 0; i < this.length; i++) {
		// target - это id модального окна, которое должно быть открыто
		const target = this[i].getAttribute('data-target');
		// console.log(this[i]);
		// console.log($(target));

		$(this[i]).click((e) => {
			// open modal 
			e.preventDefault();
			// console.log($(target));
			$(target).showModal();
		});
		//close modal by click on close buttons
		$(target).find('[data-close]').click(() => {
			$(target).closeModal();
			if (created) {
				document.querySelector(target).remove();
			}
		});

		//close modal by click outside the window
		$(target).click(e => {
			// console.log(e.target);
			if (e.target === e.currentTarget) {
				$(target).closeModal();
				if (created) {
					document.querySelector(target).remove();
				}
			}
		});

		if (created) {
			$(target).on('keydown', (e) => {
				if (e.key === "Escape") {
					console.log("Нажата Esc – пора на свободу!");
					document.querySelector(target).remove();
				}
			})
		}
	};
};

$('[data-toggle="modal-dialog"]').modalDialog();

/** create DIALOG window dynamicly
 * запускается на кнопках-триггерах, у триггеров должен быть 
 * атрибут data-target равный id модального окна} param0 
 */
$.prototype.createModalDialog = function({text, btns} = {}) {

	// modal dialog window creation: создаём этот элемент <dialog class="modal" id="exampleModal1">
	let modal = document.createElement('dialog');
	modal.classList.add('modal');

	//get attribute from trigger button (string) and remove #
	modal.setAttribute('id', this[0].getAttribute('data-target').slice(1));
	
	/** create buttons
	 *  btns = {settings: [[text, className = [], close, cb]]}
	 * j - порядковый номер кнопки
	 */
	const buttons = [];

	for (let j = 0; j < btns.settings.length; j++) {
		let [text, className, close, cb] = btns.settings[j]
		let btn = document.createElement('button');
		btn.classList.add('btn', ...className);
		btn.textContent = text;
		//атрибут close
		if (close) {
			btn.setAttribute('data-close', 'true')
		}
		if (cb && typeof(cb) === 'function') {
			btn.addEventListener('click', cb);
		}
		buttons.push(btn);
	}

	// add content to modal window
	modal.innerHTML = `
		<button class="close" data-close aria-label="close">
			<span>&times;</span>
		</button>
		<div class="modal-header" aria-label="title">
			<h3 class="modal-title">${text.title}</h3>
		</div>
		<div class="modal-body">${text.body}</div>
		<div class="modal-footer">
		</div>
	`;

	// add buttons to footer
	modal.querySelector('.modal-footer').append(...buttons);
	document.body.appendChild(modal);

	// вызов модального окна
	$(this[0]).modalDialog(true);
	$(this[0].getAttribute('data-target')).showModal();
};

/** modal created by div element
 * 
 */
$.prototype.modalDiv = function(created) {
	for (let i = 0; i < this.length; i++) {
		// target - это id модального окна, которое должно быть открыто
		const target = this[i].getAttribute('data-target');

		// show modal window
		$(this[i]).click((e) => {
			e.preventDefault();
			$(target).fadeIn(500);
			document.body.style.overflow = 'hidden';
		});

		//close modal by click on close button 	
		const closeElements = document.querySelectorAll(`${target} [data-close]`);
		closeElements.forEach(elem => {
			$(elem).click(() => {
				$(target).fadeOut(500);
				document.body.style.overflow = '';
				if (created) {
					document.querySelector(target).remove();
				}
			});
		});
		//close modal by click outside modal window
		$(target).click(e => {
			if (e.target.classList.contains('modal-div')) {
				$(target).fadeOut(500);
				document.body.style.overflow = '';
				if (created) {
					document.querySelector(target).remove();
				}
			}
		});
	}
};

$('[data-toggle="modal-div"]').modalDiv();

/** create DIV modal window dynamically, 
 * по клику на элементах-триггерах, которое 
 * привязано чётко к этому триггеру
 * BUG  - генерится много окон
 */
// $.prototype.createModalDiv = function({text, btns} = {}) {
// 	for (let i = 0; i < this.length; i++) {
		
// 		let modal = document.createElement('div');
// 		modal.classList.add('modal-div');
// 		//get attribute from trigger button (string) and remove #
// 		modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

// 		// create buttons
// 		// btns = {settings: [[text, className = [], close, cb]]}
// 		// [j] - номер кнопки
// 		const buttons = [];
// 		for (let j = 0; j < btns.settings.length; j++) {
// 			let [text, className, close, cb] = btns.settings[j]
// 			let btn = document.createElement('button');

// 			btn.classList.add('btn', ...className);
// 			btn.textContent = text;
// 			//атрибут close
// 			if (close) {
// 				btn.setAttribute('data-close', 'true');
// 			}
// 			// cb
// 			if (cb && typeof(cb) === 'function') {
// 				btn.addEventListener('click', cb);
// 			}

// 			buttons.push(btn);
// 		}

// 		// add content to modal window
// 		modal.innerHTML = `
// 			<div class="modal-div-dialog">
// 				<div class="modal-div-content">
// 					<button class="close" data-close aria-label="close">
// 						<span>&times;</span>
// 					</button>
// 					<div class="modal-div-header" aria-label="title">
// 						<h3 class="modal-div-title">
// 							${text.title}
// 						</h3>
// 					</div>
// 					<div class="modal-div-body">${text.body}</div>
// 					<div class="modal-div-footer"></div>
// 				</div>
// 			</div>
// 		`;
// 		// add buttons to footer
// 		modal.querySelector('.modal-div-footer').append(...buttons);
// 		document.body.appendChild(modal);

// 		// вызов модального окна
// 		$(this[i]).modalDiv(true);
// 		$(this[i].getAttribute('data-target')).fadeIn(500);
// 	}
// };

/** create DIV modal window dynamically, 
 * по клику на элементах-триггерах, которое 
 * привязано чётко к этому триггеру
 */
$.prototype.createModalDiv = function({text, btns} = {}) {
	let modal = document.createElement('div');
	modal.classList.add('modal-div');

	//get attribute from trigger button (string) and remove #
	modal.setAttribute('id', this[0].getAttribute('data-target').slice(1));

	/** create buttons
	 * btns = {settings: [[text, className = [], close, cb]]}
	 * [j] - номер кнопки
	 */
	const buttons = [];
	for (let j = 0; j < btns.settings.length; j++) {
		let [text, className, close, cb] = btns.settings[j]
		let btn = document.createElement('button');

		btn.classList.add('btn', ...className);
		btn.textContent = text;

		//атрибут close
		if (close) {
			btn.setAttribute('data-close', 'true');
		}

		// cb
		if (cb && typeof(cb) === 'function') {
			btn.addEventListener('click', cb);
		}
		buttons.push(btn);
	}

	// add content to modal window
	modal.innerHTML = `
		<div class="modal-div-dialog">
			<div class="modal-div-content">
				<button class="close" data-close aria-label="close">
					<span>&times;</span>
				</button>
				<div class="modal-div-header" aria-label="title">
					<h3 class="modal-div-title">
						${text.title}
					</h3>
				</div>
				<div class="modal-div-body">${text.body}</div>
				<div class="modal-div-footer"></div>
			</div>
		</div>
	`;

	// add buttons to footer
	modal.querySelector('.modal-div-footer').append(...buttons);
	document.body.appendChild(modal);

	// вызов модального окна
	$(this[0]).modalDiv(true);
	$(this[0].getAttribute('data-target')).fadeIn(500);
};

