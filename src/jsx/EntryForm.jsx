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
        <input type="text" className="form-control" placeholder="Add an entry..." ref="name" />
        <input type="submit" className="hiddenSubmit" hidefocus="true" tabIndex="-1" />
      </form>
    );
  }
});

module.exports = EntryForm;