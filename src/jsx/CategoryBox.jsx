var React = require('react');
var $ = require('jquery');
var CategoryList = require('./CategoryList.jsx');
var CategoryForm = require('./CategoryForm.jsx');

var CategoryBox = React.createClass({
  loadCategoriesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCategorySubmit: function(category) {
    var categories = this.state.data;
    var newCategories = categories.concat([category]);
    this.setState({data: newCategories});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: category,
      success: function(data) {
        // this.setState({data: data});
        console.log('success!');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCategoriesFromServer();
    setInterval(this.loadCategoriesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="categoryBox">
        <h1>Lists</h1>
        <CategoryList data={this.state.data} />
        <CategoryForm onCategorySubmit={this.handleCategorySubmit} />
      </div>
    );
  }
});

module.exports = CategoryBox;