var mixinAdapter = require('./mixinAdapter');
function load(api, vendors) {
	api.plugin('hatBackgroundImage', function (api, value) {return mixinAdapter(require('./mixins/background-image/background-image.js'), 'background-image', value, vendors);}); 
}

module.exports = load;
