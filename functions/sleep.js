/**
 * SLeep-based Timeout function
 * @param {Number} ms Sleep time (ms)
 * @returns {Promise<void>}
 */
const sleep = (ms) => {
   if (!ms) throw new TypeError("Time isn't specified");
   return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = sleep;
