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
      <form className="categoryForm text-center form-inline" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" placeholder="Add a category..." ref="title"/>&nbsp;
        <button type="submit" className="btn btn-primary">
          Post
        </button>     
      </form>
    );
  }
});

module.exports = CategoryForm;