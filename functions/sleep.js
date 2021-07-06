/**
 * Sleep-based Timeout function
 * @param {Number} milliseconds Sleep time (ms)
 * @returns {Promise<void>}
 */
module.exports = (ms) => {
   if (!ms) throw new TypeError("Time isn't specified");
   return new Promise((resolve) => setTimeout(resolve, ms));
};
