var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;


var App = React.createClass({
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

var MainView = React.createClass({
  render() {
    return (
      <div>
				<Link to="another-view">Another View</Link>
        <div>Main View</div>
      </div>
    );
  }
});

var AnotherView = React.createClass({
  render() {
    return (
      <div>
				<Link to="app">Main View</Link>
				<div>Another View</div>
      </div>
    );
  }
});

routes = (
  <Route name="app" path="/" handler={App}>
		<Route name="another-view" handler={AnotherView}/>
		<DefaultRoute handler={MainView}/>
	</Route>
);

// react-router handles location
Router.run(routes, function(Handler, state) {
	React.render(<Handler />, document.getElementById('content'));
});
