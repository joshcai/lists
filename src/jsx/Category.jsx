var React = require('react');
var $ = require('jquery');
var EntryBox = require('./EntryBox.jsx');

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
    var interval = (loggedIn ? 2000 : 30000);
    return (
      <div className="category col-md-3 col-sm-4 col-xs-6">
        <div className="category-inner well">
          <div className="text-center">
            <h2 className="categoryTitle">
              {this.props.title}
            </h2>
            {loggedIn && 
              <a href="#" className="btn btn-danger" onClick={this.sendDelete}>
                delete category
              </a>
            }
          </div>
          <EntryBox cat_id={this.props.cat_id} pollInterval={interval}/>
        </div>
      </div>
    );
  }
});

module.exports = Category;