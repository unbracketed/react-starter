//original implementation:
//https://github.com/TrySpace/ReactDebugMixin
var ReactDebugMixin = {

  componentWillMount: function() {
    console.group(this.constructor.displayName, 'componentWillMount')
	  this.debugUpdateCount = 0;
  },

  componentDidMount: function(){
  	this.collapsed ? console.groupEnd(this.constructor.displayName+" componentWillMount", this.props) : console.groupEnd(this.constructor.displayName+" componentWillMount")
  	this.collapsed ? console.groupCollapsed(this.constructor.displayName+" componentDidMount", this.props) : console.group(this.constructor.displayName+" componentDidMount %O", this.props)
  	this.collapsed ? console.groupEnd(this.constructor.displayName+" componentDidMount", this.props) : console.groupEnd(this.constructor.displayName+" componentDidMount")
  },

  componentWillReceiveProps: function(nextProps) {
  	this.collapsed ? console.groupCollapsed(this.constructor.displayName+" componentWillReceiveProps") : console.group(this.constructor.displayName+" componentWillReceiveProps")
  	console.log("next Props: %O", nextProps)
  },

  componentWillUpdate: function(nextProps, nextState){
  	this.collapsed ? console.groupCollapsed(this.constructor.displayName+" componentWillUpdate", nextState) : console.group(this.constructor.displayName+" componentWillUpdate")
  	console.log("next Props: %O", nextProps)
  	console.log("next State: %O", nextState)
  },

  componentDidUpdate: function(prevProps, prevState){
  	console.groupEnd(this.constructor.displayName+" componentWillReceiveProps")
  	console.groupEnd(this.constructor.displayName+" componentWillUpdate")
  	this.collapsed ? console.groupCollapsed(this.constructor.displayName+" componentDidUpdate", prevState) : console.group(this.constructor.displayName+" componentDidUpdate")
  	this.debugUpdateCount++;
    console.log("UpdateCounter: "+this.debugUpdateCount)
    console.log("previous Props: %O", prevProps)
    console.log("previous State: %O", prevState)
    console.groupEnd(this.constructor.displayName+"componentDidUpdate")
  },

  componentWillUnmount: function() {
  	this.collapsed ? console.groupCollapsed(this.constructor.displayName+" componentDidUnmount") : console.group(this.constructor.displayName+" componentDidUnmount")
    console.log("Total UpdateCounter: "+this.debugUpdateCount)
    console.groupEnd(this.constructor.displayName+" componentDidUnmount")
  }

};

module.exports = ReactDebugMixin;
