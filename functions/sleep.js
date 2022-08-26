const { TypeError, Error } = require('../classes/non-public-classes/Error');

/**
 * SLeep-based Timeout function
 * @param {Number} ms Sleep time (ms)
 * @returns {Promise<void>}
 */
module.exports = function sleep(ms) {
	if (!ms) throw new Error('MISSING_PARAMETER', "The parameter 'ms' is missing");
	if (typeof ms !== 'number') throw new TypeError('PARAMETER_NOT_NUMBER', "The parameter 'ms' must be a number");

	return new Promise((resolve) => setTimeout(resolve, ms));
};