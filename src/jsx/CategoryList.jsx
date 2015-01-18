var React = require('react');
var Category = require('./Category.jsx');

var CategoryList = React.createClass({
  render: function() {
    var categoryNodes = this.props.data.map(function (category) {
      return (
        <Category key={category._id} cat_id={category._id} title={category.title} url={"api/categories/"+category._id}/>
      );
    });
    return (
      <div className="categoryList row">
        {categoryNodes}
      </div>
    );
  }
});

module.exports = CategoryList;