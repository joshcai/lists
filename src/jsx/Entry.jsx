var React = require('react');
var $ = require('jquery');

var Category = React.createClass({
  sendDelete: function() {
    this.props.onEntryDelete(this.props.url, this.props.e_id);
  },
  render: function() {
    return (
      <div className="entry">
        <p className="entryName">
          {this.props.name} &nbsp;
          {loggedIn &&
            <button type="button" className="close" onClick={this.sendDelete}>
              ×
            </button>
          }
        </p>
      </div>
    );
  }
});

module.exports = Category;