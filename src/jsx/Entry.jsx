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