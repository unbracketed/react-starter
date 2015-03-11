var React = require('react')
var {Link} = require('react-router')


var MainHandler = React.createClass({
  render() {
    return (
      <div>
				<Link to="another-view">Another View</Link>
        <div>Main View</div>
      </div>
    )
  }
})

module.exports = MainHandler
