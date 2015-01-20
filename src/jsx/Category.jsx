var React = require('react');
var $ = require('jquery');
var EntryBox = require('./EntryBox.jsx');

var Category = React.createClass({
  sendDelete: function() {
    this.props.onCategoryDelete(this.props.url, this.props.cat_id);
  },
  render: function() {
    var interval = (loggedIn ? 2000 : 30000);
    return (
      <div className="category col-md-3 col-sm-4 col-xs-6">
        <div className="category-inner well">
          <div className="text-center">
            <h4 className="categoryTitle">
              {this.props.title}
            </h4>
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