/**
 * Sleep-based Timeout function
 * @param {Number} milliseconds Sleep time (ms)
 * @returns {Promise<void>}
 */
function sleep(milliseconds) {
    if (!milliseconds) throw new TypeError("Time isn't specified")
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

module.exports = sleep;

/**
 * const wait = require('util').promisify(setTimeout)
 * wait(5000)
 */