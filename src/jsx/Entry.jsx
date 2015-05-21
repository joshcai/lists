var React = require('react');
var $ = require('jquery');
var EntryPrivacy = require('./EntryPrivacy.jsx');

var Entry = React.createClass({
  sendDelete: function() {
    this.props.onEntryDelete(this.props.url, this.props.e_id);
  },
  makePrivate: function() {
    var priv = !this.state.priv;
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'PUT',
      data: { priv: priv },
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    this.setState({priv: priv});
  },
  openList: function() {
    this.props.onOpenList(this.props.url);
  },
  getInitialState: function() {
    return {priv: this.props.priv};
  },
  render: function() {
    return (
      <div className="entry row">
        <a href="#" className="alignleft" onClick={this.openList}>
          {this.props.name}
        </a>&nbsp;
        <span className="alignright">
          {loggedIn && this.props.e_id &&
            <a href="#" onClick={this.makePrivate}>
              <EntryPrivacy priv={this.state.priv} />
            </a>
          }
          {loggedIn && this.props.e_id &&
            <a href="#" onClick={this.sendDelete}>
              <span className="glyphicon glyphicon-remove"></span>
            </a>
          }
        </span>
        <div className="clearfloat"></div>
      </div>
    );
  }
});

module.exports = Entry;