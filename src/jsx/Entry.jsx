var React = require('react');
var $ = require('jquery');

var Entry = React.createClass({
  sendDelete: function() {
    this.props.onEntryDelete(this.props.url, this.props.e_id);
  },
  openList: function() {
    this.props.onOpenList(this.props.url);
  },
  render: function() {
    return (
      <div className="entry">
        <p className="entryName">
          <a href="#" onClick={this.openList}>
            {this.props.name}
          </a>&nbsp;
          {loggedIn && this.props.e_id &&
            <button
              type="button"
              className="close"
              onClick={this.sendDelete}>
              ×
            </button>
          }
        </p>
      </div>
    );
  }
});

module.exports = Entry;