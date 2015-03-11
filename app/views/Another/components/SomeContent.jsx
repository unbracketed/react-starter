var React = require('react')
var requiredString = React.PropTypes.string.isRequired


var SomeContent = React.createClass({

  propTypes: {
      name: requiredString,
      language: requiredString,
      category: requiredString,
      codeType: requiredString
  },

  render() {
    return (
      <div>
			  {this.props.name} is a {this.props.language} {this.props.category} {this.props.codeType}.
      </div>
    )
  }
})

module.exports = SomeContent
