var React = require('react');

var Category = React.createClass({
  render: function() {
    return (
      <div className="category">
        <h2 className="categoryTitle">
          {this.props.title}
        </h2>
        id {this.props.children}
      </div>
    );
  }
});

module.exports = Category;