import $ from '../core';

$.prototype.addAttribute = function(attribute, value='') {
	for (let i = 0; i < this.length; i++) {
		if (this[i].classList) {
			if (!attribute) {
				return this;
			}
			this[i].setAttribute(attribute, value);
		}
	}
	return this;
};

$.prototype.getAttributeValue = function(attribute) {
	return this[0].getAttribute(attribute);
};

$.prototype.addAttributeValue = function(attribute, value = '') {
	for (let i = 0; i < this.length; i++) {
		if (this[i].classList) {
			if (!attribute) {
				return this;
			}
			if (this[i].hasAttribute(attribute)) {
				this[i].setAttribute(attribute, value);
			}
		}
	}
	return this;
};

$.prototype.removeAttributeValue = function(attribute, value = '') {
	for (let i = 0; i < this.length; i++) {
		if (!attribute) {
			return this;
		} else {
			if (this[i].hasAttribute(attribute)) {
				if (this[i].getAttribute(attribute) == value) {
					this[i].setAttribute(attribute, value='');
				}
				if (value == '' || !value) {
					this[i].setAttribute(attribute, value='');
				}
			}
		}
	}
	return this;
};

$.prototype.toggleAttributeValue = function(attribute, value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i].classList) {

			if (this[i].hasAttribute(attribute)) {
				if (this[i].getAttribute(attribute) !== value ) {
					this[i].setAttribute(attribute, value);
				} else {
					this[i].setAttribute(attribute, value = '');
				}
			}

		}
	}
	return this;
};



