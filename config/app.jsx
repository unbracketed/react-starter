var React = require("react")
var Router = require("react-router")
var routes = require("../app/routes")

Router.run(routes, function(Handler, state) {
	React.render(<Handler />, document.getElementById('content'))
})
