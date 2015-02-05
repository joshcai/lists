var React = require('react');
var $ = require('jquery');
var EntryBox = require('./EntryBox.jsx');

var List = React.createClass({
  sendDelete: function() {
    this.props.onCategoryDelete(this.props.url, this.props.parent_id);
  },
  render: function() {
    var interval = (loggedIn ? 2000 : 30000);
    return (
      <div className="category col-md-3 col-sm-4 col-xs-6">
        <div className="category-inner well">
          <div className="text-center">
            <h4 className="categoryTitle">
              {this.props.name}
            </h4>
          </div>
          <br />
          <EntryBox parent_id={this.props.parent_id} pollInterval={interval}/>
        </div>
      </div>
    );
  }
});

module.exports = List;