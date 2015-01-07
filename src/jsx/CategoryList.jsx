var React = require('react');
var Category = require('./Category.jsx');

var CategoryList = React.createClass({
  render: function() {
    var categoryNodes = this.props.data.map(function (category) {
      return (
        <Category key={category._id} title={category.title} url={"api/categories/"+category._id}/>
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