var React = require('react');

var EntryPrivacy = React.createClass({
  render: function() {
    var icon = this.props.priv ? "glyphicon-eye-close" : "glyphicon-eye-open";
    return (<span className={"glyphicon " + icon}></span>);
  }
});

module.exports = EntryPrivacy;