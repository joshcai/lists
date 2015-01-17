var React = require('react');

var EntryForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    if (!name) {
      return;
    }
    this.props.onEntrySubmit({name: name});
    this.refs.name.getDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="entryForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = EntryForm;