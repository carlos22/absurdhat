/**
 * Mixin Adapter - wraps a lessHat JS impl to produce a proper absurdJS subtree
 * @param {Function} - lessMixinImpl
 * @param {String} name - property/mixin name (dashed, e.g background-image)
 * @param {String} value - parameter given
 * @param {Array} vendors - define for which vendors the quirky rules (prefixes etc.) should be written, e.g. ['ms', 'webkit', 'moz', 'opera']
 * @returns {Array} - absurd.js compatible rule
 */
function mixinAdapter(lessMixinImpl, name,  value, vendors) {
    // allow all vendors of none given
    vendors = vendors || ['ms', 'webkit', 'moz', 'opera'];
    var css = [];
    var i = 0;
    (lessMixinImpl.vendors || []).forEach(function (vendor) {
        // skip vendor if not in vendors
        if (vendors.indexOf(vendor) === -1) {
            return true;
        }
        var value = lessMixinImpl[vendor].call(this, value);
        // skip when magic number is returned
        if (value === 8121991) {
            return true;
        }
        // fix + in fornt of rule if mixin removed it
        if (value.charAt(0) === '+' && value.charAt(0) !== '+') {
            value = '+' + value;
        }
        // add rule
        // TODO: use lessMixinImpl.returns[vendor].property if available
        var prefixedMixinProperty = {};
        prefixedMixinProperty['%' + i  + '%' + name] = value;
        css.push(prefixedMixinProperty);
        ++i;
    });
    var unprefixedMixinProperty = {};
    unprefixedMixinProperty[name] = lessMixinImpl(value);
    css.push(unprefixedMixinProperty);

    return css;
}

module.exports = mixinAdapter;


