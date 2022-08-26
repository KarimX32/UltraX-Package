const { Error, TypeError } = require('../classes/non-public-classes/Error');

/**
 * Generates a password
 * @param {Number} length The length of the password characters
 * @returns {String} The generated password
 */
module.exports = (length) => {
	if (!length) throw new Error('MISSING_PARAMETER', "The parameter 'length' is missing");
	if (typeof length !== 'number') throw new TypeError('PARAMETER_NOT_NUMBER', "The parameter 'length' must be a number");

	const res = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let value = '';
	for (let i = 0, n = res.length; i < length; ++i) {
		value += res.charAt(Math.floor(Math.random() * n));
	}
	return value;
};