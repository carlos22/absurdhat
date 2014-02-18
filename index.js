/**
 * Absurd Hat
 * @param {Object} config
 * @param {Array} config.vendors ['ms', 'webkit', 'moz', 'opera']
 */
function absurdHat(api, config) {
    config = config || {};
    // load generated loader
	var loader = require('./loader');
    // do plugin calls
    loader(api, config.vendors);
};

module.exports = absurdHat;
