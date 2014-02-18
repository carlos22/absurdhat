/**
 * Absurd Hat
 * @param {Array} vendors ['ms', 'webkit', 'moz', 'opera']
 */
function absurdHat(api, vendors) {
    // load generated loader
	var loader = require('./loader');
    // do plugin calls
    loader(api, vendors);
};

module.exports = absurdHat;
