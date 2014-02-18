var mixinAdapter = require('./mixinAdapter');
function load(api, vendors) {
<%
    for(var i = 0; i < mixins.length; i++) {
        var m = mixins[i];
        print("\tapi.plugin('" + m.pluginName + "', function (api, value) {" +
                "return mixinAdapter(require('" + path + m.name + "/"+m.name+".js'), '" + m.name + "', value, vendors);" +
            "}); "
        );
    }
%>
}

module.exports = load;
