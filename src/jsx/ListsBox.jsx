var React = require('react');
var $ = require('jquery');
var List = require('./List.jsx');

var ListsBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
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
  togglePreview: function() {
    loggedIn = !loggedIn;
  },
  handleOpenList: function(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        console.log(data);
        var lists = this.state.data;
        var newLists = lists.splice(0, data.depth).concat([data]);
        this.setState({data: newLists});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var listNodes = this.state.data.map(function (list) {
      return (
        <List
          key={list._id}
          parent_id={list._id}
          name={list.name}
          depth={list.depth}
          onOpenList={this.handleOpenList}
          url={"api/entries/in/"+list._id}/>
      );
    }, this);
    return (
      <div className="lists row">
        {listNodes}
      </div>
    );
  }
});

module.exports = ListsBox;