var React = require('react')
var {Link} = require('react-router')
var SomeContent = require('./components/SomeContent')


var AnotherHandler = React.createClass({
  render() {
    return (
      <div>
				<Link to="app">Main View</Link>
				<div>Another View</div>
        <SomeContent
          name='React'
          language='Javascript'
          category='view'
          codeType='library'
        />
      </div>
    )
  }
})

module.exports = AnotherHandler
