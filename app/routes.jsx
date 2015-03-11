var React = require('react')
var {DefaultRoute, Route} = require('react-router')
var App = require('App')
var Main = require('views/Home/Handler')
var Another = require('views/Another/Handler')


routes = (
  <Route name="app" path="/" handler={App}>
		<Route name="another-view" handler={Another}/>
		<DefaultRoute handler={Main}/>
	</Route>
)

module.exports = routes
