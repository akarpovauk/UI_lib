import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin){
	let timeStart;

	function _animateOverTime(time) {
		if  (!timeStart) {
			timeStart = time;
		}

		let timeElapsed = time - timeStart;
		let completion = Math.min(timeElapsed / dur, 1);

		cb(completion);

		if (timeElapsed < dur) {
			requestAnimationFrame(_animateOverTime);
		} else {
			if (typeof fin === 'function') {
				fin();
			}
		}
	}

	return _animateOverTime;
};

$.prototype.fadeIn = function(dur, display, fin) {
	for (let i = 0; i < this.length; i++) {
		this[i].style.display = display || 'block';
		let startOpacity = this[i].style.opacity === '' ? 0 : Number(this[i].style.opacity);

		const _fadeIn = (completion) => {
			this[i].style.opacity = Math.min(completion + startOpacity, 1);
		}

		const animate = this.animateOverTime(dur, _fadeIn, fin);
		requestAnimationFrame(animate);
	}
	return this;
}

$.prototype.fadeOut = function(dur, fin) {
	for (let i = 0; i < this.length; i++) {
		let startOpacity = this[i].style.opacity === '' ? 1 : Number(this[i].style.opacity);
		const _fadeOut = (completion) => {
			this[i].style.opacity = Math.max(1 - (completion + startOpacity), 0);
			if (completion === 1) {
				this[i].style.display = 'none';
			}
		}

		const animate = this.animateOverTime(dur, _fadeOut, fin);
		requestAnimationFrame(animate);
	}
	return this;
}