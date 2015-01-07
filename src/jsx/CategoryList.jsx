var React = require('react');
var Category = require('./Category.jsx');

var CategoryList = React.createClass({
  render: function() {
    var categoryNodes = this.props.data.map(function (category) {
      return (
        <Category title={category.title}>
          {category._id}
        </Category>
      );
    });
    return (
      <div className="categoryList">
        {categoryNodes}
      </div>
    );
  }
});

module.exports = CategoryList;