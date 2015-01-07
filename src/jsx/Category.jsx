var React = require('react');
var $ = require('jquery');

var Category = React.createClass({
  sendDelete: function() {
    $.ajax({
      url: this.props.url,
      type: 'DELETE',
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="category">
        <h2 className="categoryTitle">
          {this.props.title}
        </h2>
        <a href="#" onClick={this.sendDelete}>
          delete
        </a>
      </div>
    );
  }
});

module.exports = Category;