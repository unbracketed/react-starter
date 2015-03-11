var React = require('react')
var {RouteHandler} = require('react-router')


var App = React.createClass({
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
})

module.exports = App
