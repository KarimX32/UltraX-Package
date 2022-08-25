const axios = require('axios').default;
const { Error, TypeError } = require('../classes/non-public-classes/Error');

/**
 * Bin code in a SourceBin
 * @param {String} code Code to put into the SourceBin
 * @returns {Promise<String>} The URL of the SourceBin
 */
module.exports = async (code) => {
	if (!code) throw new Error('MISSING_PARAMETER', "The parameter 'code' is missing");
	if (typeof code !== 'string') throw new TypeError('PARAMETER_NOT_STRING', "The parameter 'code' must be a string");

	const a = await axios('https://sourceb.in/api/bins', {
		method: 'POST',
		data: {
			files: [{
				content: code,
			}],
		},
	});
	return `https://sourceb.in/${a.data.key}`;
};
