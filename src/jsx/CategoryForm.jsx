var React = require('react');

var CategoryForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    if (!title) {
      return;
    }
    this.props.onCategorySubmit({title: title});
    this.refs.title.getDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="categoryForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref="title"/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CategoryForm;