const kCode = Symbol('code');

function createError(Base) {
	return class err extends Base {
		constructor(key, ...args) {
			super(...args);
			this[kCode] = key;
			if (Error.captureStackTrace) Error.captureStackTrace(this, err);
		}

		get name() {
			return `${super.name} [${this[kCode]}]`;
		}

		get code() {
			return this[kCode];
		}
	};
}

module.exports = {
	Error: createError(Error),
	TypeError: createError(TypeError),
};